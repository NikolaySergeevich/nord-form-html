(function () {
  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderSectionHeader({ eyebrow, title, description }) {
    return `<div class="section-header reveal">${eyebrow ? `<p class="eyebrow">${escapeHtml(eyebrow)}</p>` : ""}<h2>${escapeHtml(title)}</h2>${description ? `<p class="lead">${escapeHtml(description)}</p>` : ""}</div>`;
  }

  function renderCard(item, href, label) {
    const image = item.heroImage || item.coverImage;
    return `<article class="card reveal"><a href="${href}"><div class="card__image"><img src="${image.src}" alt="${escapeHtml(image.alt)}" loading="lazy"></div><div class="card__content"><p class="card__eyebrow">${escapeHtml(label)}</p><h3 class="card__title">${escapeHtml(item.title)}</h3><p class="card__description">${escapeHtml(item.summary || item.excerpt || item.subtitle || "")}</p><span class="card__link">Подробнее</span></div></a></article>`;
  }

  function renderFAQ(items) {
    return `<div class="faq">${items.map((item) => `<article class="faq__item"><button class="faq__button" type="button" aria-expanded="false">${escapeHtml(item.question)}<span>+</span></button><div class="faq__panel"><div class="faq__content"><p>${escapeHtml(item.answer)}</p></div></div></article>`).join("")}</div>`;
  }

  window.NordFormTemplates = {
    escapeHtml,
    renderHeader: function () { return ""; },
    renderFooter: function () { return ""; },
    renderHero: function () { return ""; },
    renderSectionHeader,
    renderCollectionCard: function (item, href) { return renderCard(item, href, "Коллекция"); },
    renderProductCard: function (item, href) { return renderCard(item, href, "Продукт"); },
    renderProjectCard: function (item, href) { return renderCard(item, href, "Проект"); },
    renderArticleCard: function (item, href) { return renderCard(item, href, "Блог"); },
    renderFAQ,
    renderContactSection: function () { return ""; },
    renderFinalCTA: function () { return ""; },
    renderPdfLeadMagnet: function () { return ""; },
    renderImageGallery: function () { return ""; },
    renderProcessSection: function () { return ""; },
    renderBrandStory: function () { return ""; },
    renderBrandValues: function () { return ""; },
    renderBrandBeliefs: function () { return ""; },
    renderAudienceSection: function () { return ""; }
  };
})();
