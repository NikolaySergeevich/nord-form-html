type FormSuccessProps = {
  message: string;
};

export function FormSuccess({ message }: FormSuccessProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="rounded-md border border-success/25 bg-success/10 p-5 text-sm leading-7 text-text-primary"
    >
      <p className="font-semibold">Спасибо! Мы получили вашу заявку.</p>
      <p className="mt-1 text-text-secondary">{message}</p>
    </div>
  );
}
