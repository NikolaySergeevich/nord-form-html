const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

const dataFiles = [
  "faq",
  "brand",
  "navigation",
  "process",
  "collections",
  "products",
  "projects",
  "blog"
];

function cleanDir(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
}

function copyDir(from, to) {
  if (!fs.existsSync(from)) return;
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(src, dest);
    else fs.copyFileSync(src, dest);
  }
}

function loadData() {
  const context = { console };
  vm.createContext(context);

  for (const name of dataFiles) {
    const file = path.join(root, "src", "data", `${name}.ts`);
    let code = fs.readFileSync(file, "utf8");
    code = code
      .replace(/^import\s+type\s+.*?;$/gm, "")
      .replace(/^import\s+\{([^}]+)\}\s+from\s+["'][^"']+["'];$/gm, "const {$1} = this;")
      .replace(/export const (\w+)(?:\s*:\s*[^=]+)?\s*=/g, "this.$1 =")
      .replace(/\s+as const/g, "");
    vm.runInContext(code, context, { filename: file });
  }

  return {
    siteConfig: {
      name: "NORD FORM",
      tagline: "Архитектура для жизни. Инженерия на десятилетия.",
      description: "Модульная архитектура из морских контейнеров для участка, отдыха и бизнеса.",
      ogImage: "/images/products/garden-module/sadovyi-modul-s-peredi.webp"
    },
    navigation: context.navigation,
    footerNavigation: context.footerNavigation,
    brandPhilosophy: context.brandPhilosophy,
    brandBeliefs: context.brandBeliefs,
    brandValues: context.brandValues,
    audienceSegments: context.audienceSegments,
    emotionalStatements: context.emotionalStatements,
    processSteps: context.processSteps,
    faq: context.faq,
    collections: context.collections,
    products: context.products,
    projects: context.projects,
    blogArticles: context.blogArticles,
    blogCategories: context.blogCategories
  };
}

const data = loadData();

const pageMeta = {
  "/": {
    title: "NORD FORM - модульная архитектура из морских контейнеров",
    description: data.siteConfig.description
  },
  "/about": {
    title: "О компании",
    description: "Философия NORD FORM: современная модульная архитектура из морских контейнеров для жизни, участка и бизнеса."
  },
  "/catalog": {
    title: "Каталог",
    description: "Получить PDF-каталог модульных решений NORD FORM."
  },
  "/collections": {
    title: "Коллекции",
    description: "Коллекции NORD FORM: садовый модуль, хозяйственный модуль, SPA-баня и цветочный павильон."
  },
  "/contacts": {
    title: "Контакты",
    description: "Связаться с NORD FORM и получить консультацию по модульному проекту."
  },
  "/production": {
    title: "Производство",
    description: "Производственный процесс NORD FORM: материалы, сборка и контроль качества."
  },
  "/products": {
    title: "Продукты",
    description: "Контейнерные продукты NORD FORM для участка, хранения, SPA и бизнеса."
  },
  "/projects": {
    title: "Проекты",
    description: "Проектные сценарии NORD FORM для четырех контейнерных коллекций."
  },
  "/blog": {
    title: "Блог",
    description: "Практические материалы о модульной архитектуре, хранении, SPA и коммерческих модулях."
  }
};

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function prefix(depth) {
  return depth ? "../".repeat(depth) : "";
}

function asset(src, depth = 0) {
  if (!src) return "";
  if (/^(https?:|mailto:|tel:)/.test(src)) return src;
  return prefix(depth) + src.replace(/^\//, "");
}

function pageHref(href, depth = 0) {
  if (!href || href.startsWith("#") || /^(https?:|mailto:|tel:)/.test(href)) return href;
  const [pathname, hash = ""] = href.split("#");
  let output;
  if (pathname === "/" || pathname === "") output = "index.html";
  else output = `${pathname.replace(/^\//, "")}.html`;
  return prefix(depth) + output + (hash ? `#${hash}` : "");
}

function writePage(route, html) {
  const file = route === "/" ? "index.html" : `${route.replace(/^\//, "")}.html`;
  const target = path.join(dist, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html, "utf8");
}

function header(depth) {
  const nav = data.navigation
    .map((item) => `<a href="${pageHref(item.href, depth)}">${esc(item.label)}</a>`)
    .join("");
  return `<header class="site-header">
  <div class="container site-header__inner">
    <a class="brand" href="${pageHref("/", depth)}" aria-label="NORD FORM">
      <span class="brand__mark">NF</span><span class="brand__text">NORD FORM</span>
    </a>
    <nav class="nav" aria-label="Основная навигация">${nav}</nav>
    <div class="header-actions">
      <a class="button button--secondary" href="${pageHref("/contacts", depth)}">Обсудить проект</a>
      <a class="button" href="${pageHref("/catalog", depth)}">Получить каталог</a>
    </div>
    <button class="mobile-toggle" type="button" aria-label="Открыть меню" aria-expanded="false"><span></span></button>
  </div>
  <div class="mobile-menu"><div class="container mobile-menu__inner">${nav}<a class="button" href="${pageHref("/catalog", depth)}">Получить каталог</a></div></div>
</header>`;
}

function footer(depth) {
  const groups = data.footerNavigation
    .map(
      (group) => `<div><p class="eyebrow">${esc(group.title)}</p><div class="grid" style="gap:8px;margin-top:16px">${group.items
        .map((item) => `<a href="${pageHref(item.href, depth)}">${esc(item.label)}</a>`)
        .join("")}</div></div>`
    )
    .join("");
  return `<footer class="site-footer">
  <div class="container site-footer__grid">
    <div>
      <a class="brand" href="${pageHref("/", depth)}"><span class="brand__mark">NF</span><span class="brand__text">NORD FORM</span></a>
      <p style="margin-top:24px;max-width:520px">${esc(data.siteConfig.tagline)}</p>
      <p style="margin-top:12px">Модульная архитектура из морских контейнеров для жизни, участка и бизнеса.</p>
    </div>
    <nav class="footer-nav" aria-label="Навигация в футере">${groups}</nav>
  </div>
  <div class="container" style="margin-top:48px;color:rgba(248,244,236,.55);font-size:.86rem">© ${new Date().getFullYear()} NORD FORM</div>
</footer>`;
}

function layout(route, meta, body, depth = 0) {
  const title = meta.title.includes("NORD FORM") ? meta.title : `${meta.title} | NORD FORM`;
  const description = meta.description || data.siteConfig.description;
  const image = asset(meta.image || data.siteConfig.ogImage, depth);
  const canonical = pageHref(route, depth);
  return `<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:type" content="website">
  <meta property="og:image" content="${image}">
  <link rel="canonical" href="${canonical}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;520;600;700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  ${["reset", "variables", "base", "layout", "components", "pages", "animations", "responsive"].map((name) => `<link rel="stylesheet" href="${asset(`/css/${name}.css`, depth)}">`).join("\n  ")}
</head>
<body>
${header(depth)}
<main>${body}</main>
${footer(depth)}
${["data", "templates", "router", "forms", "animations", "main"].map((name) => `<script src="${asset(`/js/${name}.js`, depth)}"></script>`).join("\n")}
</body>
</html>`;
}

function hero({ eyebrow, title, description, image, primaryCta, secondaryCta, stats }, depth) {
  const trust = ["Консультация без обязательств", "Предварительная оценка", "Решение под вашу задачу"];
  return `<section class="hero">
  <div class="hero__image"><img src="${asset(image.src, depth)}" alt="${esc(image.alt)}"></div>
  <div class="hero__overlay"></div>
  <div class="container hero__content">
    <div class="hero__grid">
      <div>
        ${eyebrow ? `<p class="hero__eyebrow eyebrow">${esc(eyebrow)}</p>` : ""}
        <h1>${esc(title)}</h1>
        <p class="hero__description">${esc(description)}</p>
        <div class="hero__actions">
          ${primaryCta ? `<a class="button button--inverse" href="${pageHref(primaryCta.href, depth)}">${esc(primaryCta.label)}</a>` : ""}
          ${secondaryCta ? `<a class="button button--ghost" href="${pageHref(secondaryCta.href, depth)}">${esc(secondaryCta.label)}</a>` : ""}
        </div>
        <ul class="hero__trust">${trust.map((item) => `<li>✓ ${esc(item)}</li>`).join("")}</ul>
      </div>
      ${stats?.length ? `<div class="hero__stats">${stats.map((stat) => `<div><strong>${esc(stat.value)}</strong><span>${esc(stat.label)}</span></div>`).join("")}</div>` : ""}
    </div>
  </div>
</section>`;
}

function sectionHeader(eyebrow, title, description, split = false) {
  return `<div class="section-header ${split ? "section-header--split" : ""} reveal">
    <div>${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ""}<h2 style="margin-top:${eyebrow ? "16px" : "0"}">${esc(title)}</h2></div>
    ${description ? `<p class="lead">${esc(description)}</p>` : ""}
  </div>`;
}

function card(item, href, label, depth) {
  const image = item.heroImage || item.coverImage;
  return `<article class="card reveal">
    <a href="${pageHref(href, depth)}">
      <div class="card__image"><img src="${asset(image.src, depth)}" alt="${esc(image.alt)}" loading="lazy"></div>
      <div class="card__content">
        <p class="card__eyebrow">${esc(label)}</p>
        <h3 class="card__title">${esc(item.title)}</h3>
        <p class="card__description">${esc(item.summary || item.excerpt || item.subtitle || "")}</p>
        <span class="card__link">Подробнее</span>
      </div>
    </a>
  </article>`;
}

function faq(items = data.faq) {
  return `<section class="section section--muted">
  <div class="container">
    ${sectionHeader("FAQ", "Вопросы, которые помогают принять решение.", "Собрали практические ответы о производстве, комплектации, доставке и эксплуатации.")}
    <div class="faq" style="margin-top:40px">${items.slice(0, 10).map((item) => `<article class="faq__item reveal">
      <button class="faq__button" type="button" aria-expanded="false">${esc(item.question)}<span>+</span></button>
      <div class="faq__panel"><div class="faq__content"><p>${esc(item.answer)}</p></div></div>
    </article>`).join("")}</div>
  </div>
</section>`;
}

function contactForm(type = "consultation", productOptions = "") {
  const productField =
    type === "calculation"
      ? `<div class="field"><label for="${type}-product">Продукт</label><select id="${type}-product" name="product">${productOptions}</select><p class="field__error"></p></div>`
      : "";
  const emailField =
    type === "catalog"
      ? `<div class="field"><label for="${type}-email">Email</label><input id="${type}-email" name="email" type="email" placeholder="mail@example.com"><p class="field__error"></p></div>`
      : "";
  return `<form class="form" data-nord-form="${type}" novalidate>
    <p class="lead" style="font-size:.95rem">Даже если у вас пока есть только идея, этого достаточно для начала обсуждения.</p>
    <div class="field"><label for="${type}-name">Имя</label><input id="${type}-name" name="name" autocomplete="name" placeholder="Как к вам обращаться" data-required><p class="field__error"></p></div>
    <div class="field"><label for="${type}-phone">Телефон</label><input id="${type}-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="+375" data-required><p class="field__error"></p></div>
    ${emailField}${productField}
    <div class="field"><label for="${type}-comment">Комментарий</label><textarea id="${type}-comment" name="comment" placeholder="Что хотите разместить в модуле и где планируется установка?"></textarea><p class="field__error"></p></div>
    <button class="button" type="submit">${type === "catalog" ? "Получить каталог" : type === "calculation" ? "Получить оценку" : "Обсудить проект"}</button>
    <p class="form__status" role="status" aria-live="polite"></p>
  </form>`;
}

function contactSection(depth) {
  return `<section class="section">
  <div class="container split">
    ${sectionHeader("Контакт", "Начнём с разговора о пространстве.", "Расскажите о задаче, участке или бизнес-сценарии. Мы уточним вводные и предложим следующий шаг.")}
    <div class="form-card reveal">${contactForm("consultation")}</div>
  </div>
</section>`;
}

function leadMagnetSection() {
  return `<section class="section section--dark">
  <div class="container split split--center">
    <div class="statement reveal"><p class="eyebrow">PDF каталог</p><h2>Сравните направления до консультации.</h2><p>Каталог помогает увидеть различия между модулями, собрать исходные требования и подготовиться к предметному разговору.</p></div>
    <div class="form-card reveal" style="background:rgba(248,244,236,.06);border-color:rgba(248,244,236,.16);color:var(--text-inverse)">${contactForm("catalog")}</div>
  </div>
</section>`;
}

function finalCta(title = "Обсудите модуль, который будет работать именно под вашу задачу.", depth = 0) {
  return `<section class="section section--dark"><div class="container statement reveal"><p class="eyebrow">Следующий шаг</p><h2>${esc(title)}</h2><p>На консультации разберём сценарий, участок, сезонность, инженерные требования и возможную комплектацию.</p><div class="hero__actions"><a class="button button--inverse" href="${pageHref("/contacts", depth)}">Обсудить проект</a><a class="button button--ghost" href="${pageHref("/catalog", depth)}">Получить каталог</a></div></div></section>`;
}

function brandStory() {
  return `<section class="section">
  <div class="container split split--center">
    ${sectionHeader(data.brandPhilosophy.eyebrow, data.brandPhilosophy.title, data.brandPhilosophy.description)}
    <div class="grid grid--2">${data.brandValues.slice(0, 4).map((item) => `<article class="feature-box reveal"><h3>${esc(item.title)}</h3><p class="lead">${esc(item.description)}</p></article>`).join("")}</div>
  </div>
</section>`;
}

function productionSection() {
  return `<section class="section section--muted">
  <div class="container">
    ${sectionHeader("Процесс", "От идеи до установки.", "Мы заранее связываем сценарий, конструкцию, фасад, инженерные системы, доставку и монтаж.")}
    <div class="grid grid--3 process" style="margin-top:40px">${data.processSteps.map((item) => `<article class="feature-box reveal"><h3 style="margin-top:12px">${esc(item.title)}</h3><p class="lead">${esc(item.description)}</p></article>`).join("")}</div>
  </div>
</section>`;
}

function audienceSection() {
  return `<section class="section section--muted"><div class="container">${sectionHeader("Для кого", "Когда важны порядок, образ и срок службы.", "Nord Form подходит задачам, где модуль должен быть частью среды, а не временным компромиссом.")}<div class="grid grid--3" style="margin-top:40px">${data.audienceSegments.map((item) => `<article class="feature-box reveal"><h3>${esc(item.title)}</h3><p class="lead">${esc(item.description)}</p></article>`).join("")}</div></div></section>`;
}

function statement(index = 0) {
  const item = data.emotionalStatements[index] || data.emotionalStatements[0];
  return `<section class="section section--dark"><div class="container statement reveal"><p class="eyebrow">Подход</p><h2>${esc(item.title)}</h2><p>${esc(item.description)}</p></div></section>`;
}

function gallery(images, depth) {
  if (!images?.length) return "";
  const [first, ...rest] = images;
  return `<div class="gallery reveal"><img src="${asset(first.src, depth)}" alt="${esc(first.alt)}" loading="lazy"><div class="gallery__side">${rest.slice(0, 3).map((image) => `<img src="${asset(image.src, depth)}" alt="${esc(image.alt)}" loading="lazy">`).join("")}</div></div>`;
}

function homePage() {
  const body =
    hero({
      eyebrow: "Модульная архитектура из морских контейнеров",
      title: "Современные пространства из модульной архитектуры.",
      description: "Проектируем здания, где спокойная архитектура, прочная металлическая основа и инженерная логика работают на годы эксплуатации.",
      image: { src: "/images/products/garden-module/sadovyi-modul-s-peredi.webp", alt: "Садовый модуль из графитового контейнера с дровником и теплой подсветкой" },
      primaryCta: { label: "Обсудить проект", href: "/contacts" },
      secondaryCta: { label: "Смотреть проекты", href: "/projects" },
      stats: [
        { value: "4", label: "архитектурных направления" },
        { value: "40 ft", label: "прочность основы" },
        { value: "Под задачу", label: "инженерия и комплектация" }
      ]
    }, 0) +
    brandStory() +
    `<section class="section"><div class="container">${sectionHeader("Коллекции", "Назначение задаёт форму.", "Готовые направления для участка, отдыха и бизнеса.")}<div class="grid grid--4" style="margin-top:40px">${data.collections.map((item) => card(item, `/collections/${item.slug}`, "Коллекция", 0)).join("")}</div></div></section>` +
    statement(2) +
    productionSection() +
    faq() +
    leadMagnetSection() +
    contactSection(0);
  return layout("/", pageMeta["/"], body, 0);
}

function listingPage(route, heroData, headerData, itemsHtml, extra = "") {
  const body = hero(heroData, 0) + extra + `<section class="section"><div class="container">${sectionHeader(headerData.eyebrow, headerData.title, headerData.description)}<div class="${headerData.grid || "grid grid--4"}" style="margin-top:40px">${itemsHtml}</div></div></section>` + leadMagnetSection() + finalCta();
  return layout(route, pageMeta[route], body, 0);
}

function productPage(product) {
  const depth = 1;
  const relatedProjects = data.projects.filter((project) => project.relatedProductIds?.includes(product.id) || project.productId === product.id);
  const productOptions = data.products.map((item) => `<option value="${esc(item.id)}" ${item.id === product.id ? "selected" : ""}>${esc(item.title)}</option>`).join("");
  const body =
    hero({
      eyebrow: "Продукт",
      title: product.title,
      description: product.description,
      image: product.heroImage,
      primaryCta: { label: "Получить предварительную оценку", href: "#calculation" },
      secondaryCta: { label: "Смотреть проекты", href: "/projects" },
      stats: [
        { value: product.area || "по задаче", label: "площадь" },
        { value: product.dimensions || "адаптивно", label: "габариты" },
        { value: product.basePrice || "по расчету", label: "стоимость" }
      ]
    }, depth) +
    `<section class="section"><div class="container split">${sectionHeader("Характеристики", "Основа под ваш сценарий.", product.summary)}<div class="grid grid--3">${product.specs.map((spec) => `<div class="stat-box reveal"><p class="card__meta">${esc(spec.label)}</p><h3 style="margin-top:12px">${esc(spec.value)}</h3></div>`).join("")}</div></div></section>` +
    `<section class="section section--dark"><div class="container statement reveal"><p class="eyebrow">История продукта</p><h2>От основы — к архитектуре.</h2><p>В основе «${esc(product.title)}» — прочная модульная геометрия. Ценность появляется в планировке, сценарии, фасаде, свете и деталях.</p></div></section>` +
    `<section class="section section--muted"><div class="container">${sectionHeader("Галерея", "Материалы, свет и масштаб.", "Галерея помогает оценить пропорции, внутреннюю организацию и характер объекта.")}<div style="margin-top:40px">${gallery(product.gallery, depth)}</div></div></section>` +
    `<section id="calculation" class="section"><div class="container split">${sectionHeader("Расчет", "Оценим решение до проекта.", "Укажите назначение, место установки и желаемый размер. Мы уточним комплектацию и объясним, из чего складывается решение.")}<div class="form-card reveal">${contactForm("calculation", productOptions)}</div></div></section>` +
    (relatedProjects.length ? `<section class="section section--muted"><div class="container">${sectionHeader("Проекты", "Сценарии на этой основе.", "Посмотрите, какую задачу решал модуль.")}<div class="grid grid--2" style="margin-top:40px">${relatedProjects.map((project) => card(project, `/projects/${project.slug}`, "Проект", depth)).join("")}</div></div></section>` : "") +
    faq(product.faq) +
    leadMagnetSection() +
    finalCta(`Обсудите, как адаптировать «${product.title}» под ваш участок и сценарий.`, depth);
  return layout(`/products/${product.slug}`, { ...product.seo, image: product.heroImage.src }, body, depth);
}

function collectionPage(collection) {
  const depth = 1;
  const products = data.products.filter((product) => collection.productIds.includes(product.id));
  const articles = data.blogArticles.filter((article) => collection.relatedArticleIds?.includes(article.id));
  const body =
    hero({
      eyebrow: "Коллекция",
      title: collection.title,
      description: collection.description,
      image: collection.heroImage,
      primaryCta: { label: "Обсудить проект", href: "/contacts" },
      secondaryCta: { label: "Смотреть продукты", href: "/products" }
    }, depth) +
    `<section class="section"><div class="container split">${sectionHeader("Сценарии", "Где эта коллекция работает лучше всего.", collection.summary)}<div class="grid">${collection.useCases.map((item) => `<div class="feature-box reveal"><h3>${esc(item)}</h3></div>`).join("")}</div></div></section>` +
    `<section class="section section--muted"><div class="container">${sectionHeader("Преимущества", "Спокойная форма с практической логикой.", "Коллекция помогает собрать требования до индивидуальной комплектации.")}<div class="grid grid--3" style="margin-top:40px">${collection.benefits.map((item) => `<article class="feature-box reveal"><h3>${esc(item)}</h3></article>`).join("")}</div></div></section>` +
    `<section class="section"><div class="container">${sectionHeader("Продукты", "Решения внутри направления.", "Можно адаптировать планировку, фасад, материалы и инженерные системы.")}<div class="grid grid--4" style="margin-top:40px">${products.map((product) => card(product, `/products/${product.slug}`, "Продукт", depth)).join("")}</div></div></section>` +
    (articles.length ? `<section class="section section--muted"><div class="container">${sectionHeader("Материалы", "Что полезно изучить перед проектом.", "Практические статьи по близким сценариям.")}<div class="grid grid--2" style="margin-top:40px">${articles.map((article) => card(article, `/blog/${article.slug}`, "Блог", depth)).join("")}</div></div></section>` : "") +
    finalCta(undefined, depth);
  return layout(`/collections/${collection.slug}`, { ...collection.seo, image: collection.heroImage.src }, body, depth);
}

function projectPage(project) {
  const depth = 1;
  const related = data.products.filter((product) => project.relatedProductIds?.includes(product.id));
  const body =
    hero({
      eyebrow: "Проект",
      title: project.title,
      description: project.summary,
      image: project.heroImage,
      primaryCta: { label: "Обсудить похожий проект", href: "/contacts" },
      secondaryCta: { label: "Смотреть продукты", href: "/products" },
      stats: [
        { value: project.location, label: "локация" },
        { value: String(project.year), label: "год" },
        { value: project.specs?.[0]?.value || "по задаче", label: project.specs?.[0]?.label || "формат" }
      ]
    }, depth) +
    `<section class="section"><div class="container split">${sectionHeader("Задача", "Что требовалось решить.", project.challenge)}<div class="feature-box reveal"><p class="eyebrow">Решение</p><h3 style="margin-top:14px">${esc(project.solution)}</h3></div></div></section>` +
    `<section class="section section--muted"><div class="container">${sectionHeader("Галерея", "Фактура, свет и сценарий.", "Кадры показывают, как утилитарная функция становится собранным объектом.")}<div style="margin-top:40px">${gallery(project.gallery, depth)}</div></div></section>` +
    `<section class="section"><div class="container">${sectionHeader("Параметры", "Ключевые характеристики.", "Каждый проект собирается под задачу, участок и эксплуатационный сценарий.")}<div class="grid grid--3" style="margin-top:40px">${project.specs.map((spec) => `<div class="stat-box reveal"><p class="card__meta">${esc(spec.label)}</p><h3 style="margin-top:12px">${esc(spec.value)}</h3></div>`).join("")}</div></div></section>` +
    (related.length ? `<section class="section section--muted"><div class="container">${sectionHeader("Связанные продукты", "Основа для похожего сценария.", "Посмотрите продуктовую страницу, чтобы оценить комплектацию.")}<div class="grid grid--4" style="margin-top:40px">${related.map((product) => card(product, `/products/${product.slug}`, "Продукт", depth)).join("")}</div></div></section>` : "") +
    contactSection(depth);
  return layout(`/projects/${project.slug}`, { ...project.seo, image: project.heroImage.src }, body, depth);
}

function blogPage(article) {
  const depth = 1;
  const category = data.blogCategories.find((item) => item.slug === article.category);
  const relatedProducts = data.products.filter((product) => article.relatedProductIds?.includes(product.id));
  const paragraphs = [
    article.excerpt,
    "В модульной архитектуре сильный результат появляется там, где внешний образ не отделён от функции. Планировка, фасад, инженерия, свет и обслуживание должны обсуждаться одновременно.",
    "Такой подход помогает избежать случайных решений: лишних построек на участке, неудобного движения внутри, непродуманной электрики или фасада, который быстро перестаёт выглядеть убедительно.",
    "На консультации мы переводим идею в конкретные вводные: назначение, сезонность, размеры, условия доставки, требования к инженерии и желаемое впечатление от объекта."
  ];
  const body =
    hero({
      eyebrow: category?.title || "Блог",
      title: article.title,
      description: article.excerpt,
      image: article.coverImage,
      primaryCta: { label: "Обсудить проект", href: "/contacts" },
      secondaryCta: { label: "Смотреть решения", href: "/collections" }
    }, depth) +
    `<article class="section"><div class="container article-body reveal"><div class="meta-row"><span>${esc(article.publishedAt)}</span><span>${esc(article.readingTime)}</span><span>${article.tags.map(esc).join(" · ")}</span></div>${paragraphs.map((p) => `<p style="margin-top:22px">${esc(p)}</p>`).join("")}<h2>Что важно зафиксировать заранее</h2><p>Назначение, режим использования, внутренние зоны, инженерные нагрузки, материалы фасада и условия установки. Чем точнее эти параметры на старте, тем спокойнее проект проходит производство и монтаж.</p></div></article>` +
    (relatedProducts.length ? `<section class="section section--muted"><div class="container">${sectionHeader("Связанные решения", "Продукты по теме статьи.", "Можно перейти к конкретному модулю и посмотреть галерею, характеристики и форму расчёта.")}<div class="grid grid--4" style="margin-top:40px">${relatedProducts.map((product) => card(product, `/products/${product.slug}`, "Продукт", depth)).join("")}</div></div></section>` : "") +
    leadMagnetSection();
  return layout(`/blog/${article.slug}`, { ...article.seo, image: article.coverImage.src }, body, depth);
}

function staticPages() {
  writePage("/", homePage());

  writePage("/products", listingPage(
    "/products",
    { eyebrow: "Продукты", title: "Функция, превращённая в архитектуру.", description: "Выберите направление для участка, отдыха или бизнеса. Планировку, фасад, материалы и инженерную комплектацию можно адаптировать под задачу.", image: { src: "/images/products/spa-bath-bany/spa-bany-s-fronta.webp", alt: "SPA-баня из графитового контейнера с теплой подсветкой" }, primaryCta: { label: "Обсудить проект", href: "/contacts" }, secondaryCta: { label: "Смотреть проекты", href: "/projects" } },
    { eyebrow: "Линейка", title: "Четыре сценария. Один подход.", description: "От организованного хранения и приватной SPA-зоны до коммерческого пространства с витриной.", grid: "grid grid--4" },
    data.products.map((item) => card(item, `/products/${item.slug}`, "Продукт", 0)).join(""),
    statement(1)
  ));

  writePage("/collections", listingPage(
    "/collections",
    { eyebrow: "Коллекции", title: "Архитектурные направления для жизни и бизнеса.", description: "Каждая коллекция задаёт сценарий пространства. Конфигурацию, материалы и инженерные системы можно адаптировать.", image: { src: "/images/products/hozyistvennyi-module/hozblok-obshiy-vid.webp", alt: "Хозяйственный модуль из графитового контейнера с деревянными рейками" }, primaryCta: { label: "Обсудить проект", href: "/contacts" }, secondaryCta: { label: "Смотреть проекты", href: "/projects" } },
    { eyebrow: "Направления", title: "Назначение задаёт форму.", description: "Коллекции помогают выбрать логику пространства и внешний образ.", grid: "grid grid--4" },
    data.collections.map((item) => card(item, `/collections/${item.slug}`, "Коллекция", 0)).join(""),
    audienceSection()
  ));

  writePage("/projects", listingPage(
    "/projects",
    { eyebrow: "Проекты", title: "Практическая задача. Архитектурный результат.", description: "Показываем, как сценарий, конструкция, материалы и свет собираются в цельное пространство.", image: { src: "/images/products/garden-module/sadovyi-modul-s-peredi.webp", alt: "Садовый модуль с дровником и вечерней подсветкой" }, primaryCta: { label: "Обсудить проект", href: "/contacts" }, secondaryCta: { label: "Смотреть коллекции", href: "/collections" } },
    { eyebrow: "Проектные истории", title: "Разные задачи. Единая логика.", description: "В каждом проекте назначение, планировка, инженерия и фасад работают как одно решение.", grid: "grid grid--2" },
    data.projects.map((item) => card(item, `/projects/${item.slug}`, "Проект", 0)).join(""),
    statement(0)
  ));

  writePage("/blog", listingPage(
    "/blog",
    { eyebrow: "Блог", title: "Материалы о модульной архитектуре.", description: "Практические заметки о хранении, SPA, коммерческих пространствах, фасадах и инженерной логике.", image: { src: "/images/products/workshop-flowers-module/cvetochnyi-magazin-vid-vnytri-pervyi-variant.webp", alt: "Интерьер цветочного модуля с растениями" }, primaryCta: { label: "Получить каталог", href: "/catalog" }, secondaryCta: { label: "Смотреть продукты", href: "/products" } },
    { eyebrow: "Статьи", title: "Что стоит продумать до проекта.", description: "Темы, которые помогают сформулировать задачу до консультации.", grid: "grid grid--2" },
    data.blogArticles.map((item) => card(item, `/blog/${item.slug}`, "Блог", 0)).join("")
  ));

  writePage("/about", layout("/about", pageMeta["/about"],
    hero({ eyebrow: "О компании", title: "Пространства из промышленной основы.", description: "Мы верим, что модульное здание может быть не компромиссом, а точной архитектурой: спокойной, функциональной и рассчитанной на долгую жизнь.", image: { src: "/images/products/garden-module/sadovyi-modul-s-boky.webp", alt: "Графитовый модуль Nord Form с деревянными рейками на участке" }, primaryCta: { label: "Обсудить проект", href: "/contacts" }, secondaryCta: { label: "Смотреть проекты", href: "/projects" } }, 0) +
    brandStory() +
    `<section class="section section--muted"><div class="container">${sectionHeader("Принципы", "Даже небольшое здание имеет право на архитектуру.", "Мы работаем с модулем как с архитектурным объектом: внимательно к пропорциям, честно к функции и спокойно к деталям.")}<div class="grid grid--3" style="margin-top:40px">${data.brandBeliefs.map((item) => `<article class="feature-box reveal"><h3>${esc(item.title)}</h3><p class="lead">${esc(item.description)}</p></article>`).join("")}</div></div></section>` +
    statement(1) +
    audienceSection() +
    productionSection() +
    contactSection(0), 0));

  writePage("/production", layout("/production", pageMeta["/production"],
    hero({ eyebrow: "Производство", title: "Инженерия делает архитектуру долговечной.", description: "Мы заранее связываем конструкцию, планировку, инженерные системы, фасад и условия установки.", image: { src: "/images/products/hozyistvennyi-module/hozblok-vid-vnytri.webp", alt: "Внутреннее хранение и материалы хозяйственного модуля" }, primaryCta: { label: "Обсудить проект", href: "/contacts" }, secondaryCta: { label: "Смотреть проекты", href: "/projects" } }, 0) +
    productionSection() +
    leadMagnetSection() +
    contactSection(0), 0));

  writePage("/contacts", layout("/contacts", pageMeta["/contacts"],
    hero({ eyebrow: "Контакты", title: "Начнём с разговора о пространстве.", description: "На первом этапе достаточно знать назначение, место установки и примерный размер. Остальные решения разберём вместе.", image: { src: "/images/products/garden-module/sadovyi-modul-s-boky.webp", alt: "Боковой вид садового модуля из графитового контейнера" }, primaryCta: { label: "Обсудить проект", href: "#contact-form" }, secondaryCta: { label: "Смотреть проекты", href: "/projects" } }, 0) +
    `<div id="contact-form">${contactSection(0)}</div>`, 0));

  writePage("/catalog", layout("/catalog", pageMeta["/catalog"],
    hero({ eyebrow: "PDF каталог", title: "Сравните модульные решения и определите подходящее направление.", description: "Каталог поможет понять различия между форматами, собрать исходные требования и подготовиться к консультации.", image: { src: "/images/products/workshop-flowers-module/cvetochnyi-magazin-vid-cnaruzhi.webp", alt: "Цветочный модуль из контейнера с витриной и теплой подсветкой" }, primaryCta: { label: "Получить каталог", href: "#catalog-form" }, secondaryCta: { label: "Смотреть решения", href: "/collections" } }, 0) +
    `<section id="catalog-form" class="section"><div class="container split">${sectionHeader("Каталог решений", "Первый шаг к своему пространству.", "Укажите контакт — мы отправим каталог с основными направлениями. Если потребуется, поможем выбрать формат под участок или бизнес.")}<div class="form-card reveal">${contactForm("catalog")}</div></div></section>`, 0));

  writePage("/404", layout("/404", { title: "Страница не найдена", description: "Страница NORD FORM не найдена." }, `<section class="section"><div class="container statement reveal"><p class="eyebrow">404</p><h1>Страница не найдена.</h1><p>Возможно, ссылка изменилась. Вернитесь на главную или откройте каталог решений.</p><div class="hero__actions"><a class="button" href="index.html">На главную</a><a class="button button--secondary" href="catalog.html">Каталог</a></div></div></section>`, 0));

  data.products.forEach((item) => writePage(`/products/${item.slug}`, productPage(item)));
  data.collections.forEach((item) => writePage(`/collections/${item.slug}`, collectionPage(item)));
  data.projects.forEach((item) => writePage(`/projects/${item.slug}`, projectPage(item)));
  data.blogArticles.forEach((item) => writePage(`/blog/${item.slug}`, blogPage(item)));
}

function writeDataJs() {
  const dataJs = `window.NORD_FORM_DATA = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(path.join(dist, "js", "data.js"), dataJs, "utf8");
}

function main() {
  cleanDir(dist);
  copyDir(path.join(root, "css"), path.join(dist, "css"));
  copyDir(path.join(root, "js"), path.join(dist, "js"));
  copyDir(path.join(root, "public", "images"), path.join(dist, "images"));
  writeDataJs();
  staticPages();
  console.log(`Static site generated in ${dist}`);
  console.log(`Products: ${data.products.length}`);
  console.log(`Collections: ${data.collections.length}`);
  console.log(`Projects: ${data.projects.length}`);
  console.log(`Blog articles: ${data.blogArticles.length}`);
}

main();
