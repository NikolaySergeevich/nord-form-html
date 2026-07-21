<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function loadEnvironment(string $path): array
{
    if (!is_readable($path)) {
        return [];
    }

    $values = [];
    foreach (file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) ?: [] as $line) {
        $line = trim($line);
        if ($line === '' || str_starts_with($line, '#') || !str_contains($line, '=')) {
            continue;
        }

        [$key, $value] = array_map('trim', explode('=', $line, 2));
        if (!preg_match('/^[A-Z_][A-Z0-9_]*$/i', $key)) {
            continue;
        }

        if (strlen($value) >= 2) {
            $first = $value[0];
            $last = $value[strlen($value) - 1];
            if (($first === '"' && $last === '"') || ($first === "'" && $last === "'")) {
                $value = substr($value, 1, -1);
            }
        }
        $values[$key] = $value;
    }

    return $values;
}

function clean(mixed $value, int $limit = 1000): string
{
    if (!is_string($value)) {
        return '';
    }

    $value = trim(preg_replace('/\s+/u', ' ', $value) ?? '');
    return function_exists('mb_substr')
        ? mb_substr($value, 0, $limit, 'UTF-8')
        : substr($value, 0, $limit);
}

function escapeTelegram(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'message' => 'Метод не поддерживается.']);
}

if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 32768) {
    respond(413, ['ok' => false, 'message' => 'Слишком большой запрос.']);
}

$contentType = strtolower((string) ($_SERVER['CONTENT_TYPE'] ?? ''));
if (str_contains($contentType, 'application/json')) {
    $data = json_decode(file_get_contents('php://input') ?: '', true);
    if (!is_array($data)) {
        respond(400, ['ok' => false, 'message' => 'Некорректные данные формы.']);
    }
} else {
    $data = $_POST;
}

// Invisible field for bots. A successful response does not reveal the filter.
if (clean($data['website'] ?? '') !== '') {
    respond(200, ['ok' => true]);
}

$name = clean($data['name'] ?? '', 120);
$phone = clean($data['phone'] ?? '', 80);
$email = clean($data['email'] ?? '', 160);
$message = clean($data['message'] ?? '', 1500);
$formType = clean($data['formType'] ?? '', 80);
$product = clean($data['product'] ?? '', 120);
$page = clean($data['page'] ?? '', 500);

if ($name === '' || $phone === '') {
    respond(422, ['ok' => false, 'message' => 'Укажите имя и телефон.']);
}

if (strlen(preg_replace('/\D+/', '', $phone) ?? '') < 7) {
    respond(422, ['ok' => false, 'message' => 'Проверьте номер телефона.']);
}

if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['ok' => false, 'message' => 'Проверьте адрес электронной почты.']);
}

$env = loadEnvironment(__DIR__ . DIRECTORY_SEPARATOR . '.env');
$botToken = (string) (getenv('TELEGRAM_BOT_TOKEN') ?: ($env['TELEGRAM_BOT_TOKEN'] ?? ''));
$chatId = (string) (getenv('TELEGRAM_CHAT_ID') ?: ($env['TELEGRAM_CHAT_ID'] ?? ''));

if ($botToken === '' || $chatId === '') {
    error_log('NORD FORM: Telegram credentials are not configured.');
    respond(500, ['ok' => false, 'message' => 'Сервис отправки временно недоступен.']);
}

$typeNames = [
    'consultation' => 'Консультация',
    'catalog' => 'Запрос каталога',
    'calculation' => 'Расчёт проекта',
];
$productNames = [
    'garden-module' => 'Садовый модуль',
    'hozyistvennyi-module' => 'Хозяйственный модуль',
    'spa-bath-bany' => 'SPA-баня',
    'workshop-flowers-module' => 'Цветочный модуль',
];

$lines = [
    '<b>Новая заявка с сайта NORD FORM</b>',
    '',
    '<b>Форма:</b> ' . escapeTelegram($typeNames[$formType] ?? ($formType ?: 'Заявка')),
    '<b>Имя:</b> ' . escapeTelegram($name),
    '<b>Телефон:</b> ' . escapeTelegram($phone),
];

if ($email !== '') {
    $lines[] = '<b>Email:</b> ' . escapeTelegram($email);
}
if ($product !== '') {
    $lines[] = '<b>Продукт:</b> ' . escapeTelegram($productNames[$product] ?? $product);
}
if ($message !== '') {
    $lines[] = '<b>Комментарий:</b> ' . escapeTelegram($message);
}
if ($page !== '') {
    $lines[] = '<b>Страница:</b> ' . escapeTelegram($page);
}

$url = 'https://api.telegram.org/bot' . $botToken . '/sendMessage';
$payload = http_build_query([
    'chat_id' => $chatId,
    'text' => implode("\n", $lines),
    'parse_mode' => 'HTML',
    'disable_web_page_preview' => 'true',
]);

$responseBody = false;
$statusCode = 0;

if (function_exists('curl_init')) {
    $curl = curl_init($url);
    curl_setopt_array($curl, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $payload,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 5,
        CURLOPT_TIMEOUT => 10,
        CURLOPT_HTTPHEADER => ['Content-Type: application/x-www-form-urlencoded'],
    ]);
    $responseBody = curl_exec($curl);
    $statusCode = (int) curl_getinfo($curl, CURLINFO_RESPONSE_CODE);
    curl_close($curl);
} elseif ((bool) ini_get('allow_url_fopen')) {
    $context = stream_context_create(['http' => [
        'method' => 'POST',
        'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
        'content' => $payload,
        'timeout' => 10,
        'ignore_errors' => true,
    ]]);
    $responseBody = @file_get_contents($url, false, $context);
    if (isset($http_response_header[0]) && preg_match('/\s(\d{3})\s/', $http_response_header[0], $matches)) {
        $statusCode = (int) $matches[1];
    }
}

$telegramResponse = is_string($responseBody) ? json_decode($responseBody, true) : null;
if ($statusCode < 200 || $statusCode >= 300 || !is_array($telegramResponse) || ($telegramResponse['ok'] ?? false) !== true) {
    error_log('NORD FORM: Telegram API request failed with HTTP status ' . $statusCode . '.');
    respond(502, ['ok' => false, 'message' => 'Не удалось отправить заявку. Попробуйте ещё раз.']);
}

respond(200, ['ok' => true, 'message' => 'Спасибо! Заявка отправлена.']);
