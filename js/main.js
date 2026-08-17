(function () {
  const focusableSelector = [
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled]):not([type='hidden'])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "[tabindex]:not([tabindex='-1'])"
  ].join(",");
  const scrollLocks = new Set();
  const layers = [];
  const contactPhone = "+375336919815";
  const contactPhoneDisplay = "+375 33 691-98-15";
  const telegramDraft = "Здравствуйте! Хочу обсудить проект Nord Form.";
  const telegramUrl = `https://t.me/NikGichik?text=${encodeURIComponent(telegramDraft)}`;
  const exitOfferKey = "nord-form:exit-offer:v1";
  const leadSubmittedKey = "nord-form:lead-submitted:v1";
  const mainScript = Array.from(document.scripts).find((script) => {
    return /(?:^|\/)js\/main\.js(?:\?|$)/.test(script.src);
  });
  const telegramIconUrl = mainScript
    ? new URL("../images/icon/free-icon-telegram.webp", mainScript.src).href
    : "images/icon/free-icon-telegram.webp";
  let closeMobileMenu = null;

  function createPhoneIcon() {
    const icon = document.createElement("span");
    icon.className = "contact-icon contact-icon--phone";
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = `
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.59a1 1 0 0 1-.25 1.02l-2.2 2.18Z"></path>
      </svg>
    `;
    return icon;
  }

  function createTelegramIcon() {
    const image = document.createElement("img");
    image.className = "contact-icon contact-icon--telegram";
    image.src = telegramIconUrl;
    image.width = 512;
    image.height = 512;
    image.alt = "";
    image.setAttribute("aria-hidden", "true");
    return image;
  }

  function createContactAction(type) {
    const link = document.createElement("a");
    const desktopLabel = document.createElement("span");
    const mobileLabel = document.createElement("span");

    link.className = `contact-action contact-action--${type}`;
    link.dataset.contactAction = type;
    desktopLabel.className = "contact-action__desktop-label";
    mobileLabel.className = "contact-action__mobile-label";

    if (type === "phone") {
      link.href = `tel:${contactPhone}`;
      link.setAttribute("aria-label", `Позвонить по номеру ${contactPhoneDisplay}`);
      link.title = `Позвонить: ${contactPhoneDisplay}`;
      desktopLabel.textContent = contactPhoneDisplay;
      mobileLabel.textContent = "Позвонить";
      link.append(createPhoneIcon(), desktopLabel, mobileLabel);
      return link;
    }

    link.href = telegramUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", "Написать @NikGichik в Telegram");
    link.title = "Написать в Telegram";
    desktopLabel.textContent = "Telegram";
    mobileLabel.textContent = "Telegram";
    link.append(createTelegramIcon(), desktopLabel, mobileLabel);
    return link;
  }

  function createExitOfferModal() {
    const modal = document.createElement("div");
    modal.className = "modal exit-offer";
    modal.id = "exit-offer-modal";
    modal.dataset.modal = "";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="modal__dialog exit-offer__dialog" role="dialog" aria-modal="true" aria-labelledby="exit-offer-title" aria-describedby="exit-offer-description" tabindex="-1">
        <button class="modal__close" type="button" data-modal-close aria-label="Закрыть окно">×</button>
        <div class="modal__header">
          <p class="eyebrow">Перед уходом</p>
          <h2 class="mt-sm" id="exit-offer-title" data-modal-title>Остались вопросы?</h2>
          <p class="lead mt-md" id="exit-offer-description">Оставьте номер — мы перезвоним, уточним задачу и предложим следующий шаг.</p>
        </div>
        <form class="form exit-offer__form mt-lg" data-nord-form="exit-intent" novalidate>
          <input type="hidden" name="request_type" value="Заявка при выходе">
          <input type="hidden" name="product" value="Общая консультация">
          <div class="honeypot" aria-hidden="true"><label for="exit-offer-website">Сайт</label><input id="exit-offer-website" name="website" tabindex="-1" autocomplete="off"></div>
          <div class="field"><label for="exit-offer-name">Имя</label><input id="exit-offer-name" name="name" autocomplete="name" placeholder="Как к вам обращаться" data-required><p class="field__error"></p></div>
          <div class="field"><label for="exit-offer-phone">Телефон</label><input id="exit-offer-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="+375" data-required><p class="field__error"></p></div>
          <button class="button" type="submit">Оставить заявку</button>
          <p class="form__status" role="status" aria-live="polite"></p>
        </form>
        <p class="exit-offer__alternative">Или свяжитесь с нами сразу:</p>
        <div class="exit-offer__quick-links"></div>
        <button class="exit-offer__continue" type="button" data-modal-close>Продолжить просмотр</button>
      </div>
    `;

    const quickLinks = modal.querySelector(".exit-offer__quick-links");
    const phone = createContactAction("phone");
    const telegram = createContactAction("telegram");
    phone.classList.add("exit-offer__quick-link");
    telegram.classList.add("exit-offer__quick-link");
    quickLinks.append(phone, telegram);
    return modal;
  }

  function initGlobalContactUi() {
    if (document.querySelector("[data-global-contact-ui]")) return null;

    const footerLegal = document.querySelector(".footer-legal");
    if (footerLegal && !footerLegal.querySelector(".footer-contact")) {
      const contact = document.createElement("p");
      const label = document.createElement("span");
      const phone = document.createElement("a");
      const separator = document.createElement("span");
      const telegram = document.createElement("a");

      contact.className = "footer-contact";
      label.textContent = "Связаться:";
      phone.href = `tel:${contactPhone}`;
      phone.dataset.contactAction = "phone";
      phone.textContent = contactPhoneDisplay;
      phone.setAttribute("aria-label", `Позвонить по номеру ${contactPhoneDisplay}`);
      phone.title = `Позвонить: ${contactPhoneDisplay}`;
      separator.className = "footer-contact__separator";
      separator.setAttribute("aria-hidden", "true");
      separator.textContent = "·";
      telegram.className = "footer-contact__telegram";
      telegram.href = telegramUrl;
      telegram.target = "_blank";
      telegram.rel = "noopener noreferrer";
      telegram.dataset.contactAction = "telegram";
      telegram.setAttribute("aria-label", "Написать @NikGichik в Telegram");
      telegram.title = "Написать в Telegram";
      telegram.append(createTelegramIcon(), document.createTextNode("Telegram"));
      contact.append(label, phone, separator, telegram);
      footerLegal.append(contact);
    }

    const dock = document.createElement("nav");
    dock.className = "contact-dock";
    dock.dataset.globalContactUi = "";
    dock.setAttribute("aria-label", "Быстрая связь");
    dock.append(createContactAction("phone"), createContactAction("telegram"));

    const backToTop = document.createElement("button");
    backToTop.className = "back-to-top";
    backToTop.type = "button";
    backToTop.tabIndex = -1;
    backToTop.setAttribute("aria-label", "Вернуться наверх");
    backToTop.setAttribute("aria-hidden", "true");
    backToTop.innerHTML = '<span aria-hidden="true">↑</span>';

    const exitOffer = createExitOfferModal();
    document.body.append(dock, backToTop, exitOffer);
    return { backToTop, exitOffer };
  }

  function updateScrollLock(owner, locked) {
    if (locked) {
      scrollLocks.add(owner);
    } else {
      scrollLocks.delete(owner);
    }
    document.body.classList.toggle("is-scroll-locked", scrollLocks.size > 0);
  }

  function removeLayer(owner) {
    for (let index = layers.length - 1; index >= 0; index -= 1) {
      if (layers[index].owner === owner) {
        layers.splice(index, 1);
      }
    }
    updateScrollLock(owner, false);
  }

  function addLayer(owner, close) {
    removeLayer(owner);
    layers.push({ owner, close });
    updateScrollLock(owner, true);
  }

  function isTopLayer(owner) {
    return layers.length > 0 && layers[layers.length - 1].owner === owner;
  }

  function getFocusable(container) {
    return Array.from(container.querySelectorAll(focusableSelector)).filter((element) => {
      return !element.hasAttribute("hidden")
        && element.getAttribute("aria-hidden") !== "true"
        && element.getClientRects().length > 0;
    });
  }

  function trapFocus(event, container, fallback) {
    if (event.key !== "Tab") return;

    const focusable = getFocusable(container);
    if (!focusable.length) {
      event.preventDefault();
      fallback.focus();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && (active === first || !container.contains(active))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function focusLayer(container, target, isOpen) {
    const applyFocus = () => {
      if (isOpen() && !container.contains(document.activeElement)) {
        target.focus({ preventScroll: true });
      }
    };

    applyFocus();
    window.requestAnimationFrame(applyFocus);
    window.setTimeout(applyFocus, 0);
    window.setTimeout(applyFocus, 260);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !layers.length) return;
    event.preventDefault();
    layers[layers.length - 1].close();
  });

  function initHeader() {
    const header = document.querySelector(".site-header");
    const toggle = document.querySelector(".mobile-toggle");
    const menu = document.querySelector(".mobile-menu");

    function updateHeader() {
      if (!header) return;
      const scrolled = window.scrollY > 20;
      header.classList.toggle("header--scrolled", scrolled);
      header.classList.toggle("is-scrolled", scrolled);
    }

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    if (!toggle || !menu) return;

    if (!menu.id) {
      menu.id = "nord-form-mobile-menu";
    }
    toggle.setAttribute("aria-controls", menu.id);

    function updateToggle(open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
    }

    function setMenu(open, restoreFocus) {
      menu.classList.toggle("is-open", open);
      updateToggle(open);

      if (open) {
        addLayer(menu, () => setMenu(false, true));
      } else {
        removeLayer(menu);
        if (restoreFocus) {
          toggle.focus();
        }
      }
    }

    closeMobileMenu = (restoreFocus) => setMenu(false, Boolean(restoreFocus));

    toggle.addEventListener("click", () => {
      setMenu(!menu.classList.contains("is-open"), false);
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenu(false, false));
    });

    const desktopQuery = window.matchMedia("(min-width: 1101px)");
    const closeOnDesktop = (event) => {
      if (event.matches && menu.classList.contains("is-open")) {
        setMenu(false, false);
      }
    };
    if (typeof desktopQuery.addEventListener === "function") {
      desktopQuery.addEventListener("change", closeOnDesktop);
    } else {
      desktopQuery.addListener(closeOnDesktop);
    }

    if (menu.classList.contains("is-open")) {
      setMenu(true, false);
    } else {
      updateToggle(false);
    }
  }

  function initSmoothScroll() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        if (link.hasAttribute("data-modal-open")) return;

        const selector = link.getAttribute("href");
        if (!selector || selector === "#") return;

        let target;
        try {
          target = document.querySelector(selector);
        } catch (error) {
          return;
        }
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      });
    });
  }

  function initCatalogDownloads() {
    document.addEventListener("click", (event) => {
      const link = event.target.closest?.("[data-catalog-download]");
      if (!link) return;

      const payload = {
        catalog_name: "NORD FORM catalog",
        source: link.dataset.catalogSource || (link.closest(".site-header") ? "header" : "site_catalog_link"),
        file_type: "pdf"
      };

      if (typeof window.gtag === "function") {
        window.gtag("event", "catalog_download", payload);
      } else if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push({ event: "catalog_download", ...payload });
      }

      document.dispatchEvent(new CustomEvent("nordform:catalog-download", { detail: payload }));
    });
  }

  function initBackToTop(button) {
    if (!button) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let visible = false;

    function updateButton() {
      const shouldShow = window.scrollY > Math.max(520, window.innerHeight * 0.85);
      if (shouldShow === visible) return;

      visible = shouldShow;
      button.classList.toggle("is-visible", visible);
      button.tabIndex = visible ? 0 : -1;
      button.setAttribute("aria-hidden", String(!visible));
    }

    button.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
    updateButton();
    window.addEventListener("scroll", updateButton, { passive: true });
    window.addEventListener("resize", updateButton);
  }

  function initModals() {
    const modalElements = Array.from(document.querySelectorAll("[data-modal]"));
    if (!modalElements.length) {
      return {
        open() {
          return false;
        },
        isOpen() {
          return false;
        }
      };
    }

    let activeState = null;
    const states = modalElements.map((modal, index) => {
      const dialog = modal.querySelector("[role='dialog']") || modal.querySelector(".modal__dialog") || modal;
      const title = modal.querySelector("[data-modal-title]");
      const requestType = modal.querySelector("input[type='hidden'][name='request_type']");
      const product = modal.querySelector("input[type='hidden'][name='product']");
      const state = {
        modal,
        dialog,
        title,
        requestType,
        product,
        originalTitle: title ? title.textContent : "",
        originalRequestType: requestType ? requestType.value : "",
        originalProduct: product ? product.value : "",
        opener: null,
        open: false
      };

      if (!dialog.hasAttribute("tabindex")) {
        dialog.setAttribute("tabindex", "-1");
      }
      if (!dialog.hasAttribute("role")) {
        dialog.setAttribute("role", "dialog");
      }
      dialog.setAttribute("aria-modal", "true");

      if (title) {
        if (!title.id) {
          title.id = `nord-form-modal-title-${index + 1}`;
        }
        if (!dialog.hasAttribute("aria-labelledby")) {
          dialog.setAttribute("aria-labelledby", title.id);
        }
      }

      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      modal.setAttribute("inert", "");

      return state;
    });

    function setHiddenValue(field, value) {
      if (!field) return;
      field.value = value;
      field.defaultValue = value;
    }

    function findState(reference) {
      const normalized = String(reference || "").replace(/^#/, "");
      return states.find((item) => {
        return item.modal.id === normalized || item.modal.getAttribute("data-modal") === normalized;
      });
    }

    function closeModal(state, restoreFocus) {
      if (!state.open) return;

      const wasTopLayer = isTopLayer(state.modal);
      state.open = false;
      state.modal.classList.remove("is-open");
      state.modal.setAttribute("aria-hidden", "true");
      state.modal.setAttribute("inert", "");
      removeLayer(state.modal);

      if (activeState === state) {
        activeState = null;
      }
      if (restoreFocus !== false && wasTopLayer && state.opener && document.contains(state.opener)) {
        state.opener.focus();
      }
    }

    function openModal(state, opener, options = {}) {
      if (activeState && activeState !== state) {
        closeModal(activeState, false);
      }
      if (closeMobileMenu) {
        closeMobileMenu(false);
      }

      const safeOpener = opener && typeof opener.hasAttribute === "function" ? opener : null;
      state.opener = safeOpener;
      if (state.title) {
        state.title.textContent = options.title
          || (safeOpener && safeOpener.hasAttribute("data-modal-title")
            ? safeOpener.dataset.modalTitle
            : state.originalTitle);
      }
      setHiddenValue(
        state.requestType,
        options.requestType
          || (safeOpener && safeOpener.hasAttribute("data-request-type")
            ? safeOpener.dataset.requestType
            : state.originalRequestType)
      );
      setHiddenValue(
        state.product,
        options.product
          || (safeOpener && safeOpener.hasAttribute("data-product")
            ? safeOpener.dataset.product
            : state.originalProduct)
      );

      state.open = true;
      activeState = state;
      state.modal.removeAttribute("inert");
      state.modal.setAttribute("aria-hidden", "false");
      state.modal.classList.add("is-open");
      addLayer(state.modal, () => closeModal(state, true));

      const focusable = getFocusable(state.modal);
      focusLayer(state.modal, focusable[0] || state.dialog, () => state.open);
    }

    states.forEach((state) => {
      state.modal.querySelectorAll("[data-modal-close]").forEach((button) => {
        button.addEventListener("click", () => closeModal(state, true));
      });

      state.modal.addEventListener("click", (event) => {
        if (event.target === state.modal) {
          closeModal(state, true);
        }
      });

      document.addEventListener("keydown", (event) => {
        if (state.open && isTopLayer(state.modal)) {
          trapFocus(event, state.modal, state.dialog);
        }
      });
    });

    document.querySelectorAll("[data-modal-open]").forEach((opener) => {
      opener.addEventListener("click", (event) => {
        const reference = (opener.getAttribute("data-modal-open") || "").replace(/^#/, "");
        const state = findState(reference);
        if (!state) return;

        event.preventDefault();
        openModal(state, opener);
      });
    });

    return {
      open(reference, options = {}) {
        const state = findState(reference);
        if (!state) return false;

        const activeElement = document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;
        openModal(state, options.opener || activeElement, options);
        return true;
      },
      isOpen(reference) {
        if (!reference) return Boolean(activeState && activeState.open);
        const state = findState(reference);
        return Boolean(state && state.open);
      }
    };
  }

  function initExitOffer(modalApi) {
    if (!modalApi) return;

    let shown = false;
    let timeReady = false;
    let engaged = window.scrollY > 120;
    let footerInView = false;
    let footerTimer = null;
    const startedAt = Date.now();
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const compactViewport = window.matchMedia("(max-width: 760px)").matches;
    const offerDelay = finePointer ? 12000 : 25000;

    function readFlag(key) {
      try {
        return window.sessionStorage.getItem(key) === "1";
      } catch (error) {
        return false;
      }
    }

    function writeFlag(key) {
      try {
        window.sessionStorage.setItem(key, "1");
      } catch (error) {
        // Storage can be unavailable in private or restricted browser contexts.
      }
    }

    function clearFooterTimer() {
      if (!footerTimer) return;
      window.clearTimeout(footerTimer);
      footerTimer = null;
    }

    function markComplete() {
      shown = true;
      clearFooterTimer();
      writeFlag(exitOfferKey);
    }

    shown = readFlag(exitOfferKey) || readFlag(leadSubmittedKey);

    function isTimeReady() {
      return timeReady || Date.now() - startedAt >= offerDelay;
    }

    function canOpen(bypassDelay) {
      if (shown || readFlag(leadSubmittedKey)) return false;
      if (!bypassDelay && (!isTimeReady() || (!engaged && Date.now() - startedAt < 30000))) return false;
      if (document.visibilityState !== "visible" || layers.length > 0) return false;

      const active = document.activeElement;
      if (active && active.matches?.("input, textarea, select, [contenteditable='true']")) {
        return false;
      }
      return true;
    }

    function showOffer(source, bypassDelay = false) {
      if (!canOpen(bypassDelay)) return false;

      const opened = modalApi.open("exit-offer-modal", {
        requestType: "Заявка при выходе",
        product: `Общая консультация · ${source}`
      });
      if (!opened) return false;

      markComplete();
      return true;
    }

    function scheduleFooterOffer() {
      if (
        shown ||
        !compactViewport ||
        !footerInView ||
        !isTimeReady() ||
        !engaged ||
        footerTimer
      ) {
        return;
      }

      footerTimer = window.setTimeout(() => {
        footerTimer = null;
        if (footerInView) showOffer("мобильный просмотр");
      }, 1400);
    }

    window.setTimeout(() => {
      timeReady = true;
      scheduleFooterOffer();
    }, offerDelay);

    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) engaged = true;
      scheduleFooterOffer();
    }, { passive: true });

    document.addEventListener("pointerdown", (event) => {
      if (event.target.closest?.("[data-contact-action]")) {
        markComplete();
        return;
      }
      engaged = true;
    }, { passive: true });

    document.addEventListener("keydown", () => {
      engaged = true;
    }, { passive: true });

    document.addEventListener("nordform:lead-submitted", () => {
      markComplete();
    });

    if (finePointer) {
      document.documentElement.addEventListener("mouseleave", (event) => {
        if (event.relatedTarget === null && event.clientY <= 0) {
          showOffer("попытка ухода");
        }
      });
    }

    const footer = document.querySelector(".site-footer");
    if (footer && compactViewport && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        footerInView = entries.some((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.45);
        if (footerInView) {
          scheduleFooterOffer();
        } else {
          clearFooterTimer();
        }
      }, { threshold: [0, 0.45, 0.75] });
      observer.observe(footer);
    }

    window.NordFormContact = {
      phone: contactPhone,
      telegramUrl,
      openExitOffer() {
        return showOffer("ручное открытие", true);
      }
    };
  }

  function initLightbox() {
    const triggers = Array.from(document.querySelectorAll("[data-lightbox]"));
    if (!triggers.length) return;

    const lightbox = document.createElement("div");
    const dialog = document.createElement("div");
    const close = document.createElement("button");
    const image = document.createElement("img");
    const caption = document.createElement("p");
    let opener = null;
    let open = false;

    lightbox.className = "lightbox";
    lightbox.setAttribute("aria-hidden", "true");
    lightbox.setAttribute("inert", "");

    dialog.className = "lightbox__dialog";
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute("aria-label", "Просмотр изображения");
    dialog.setAttribute("tabindex", "-1");

    close.className = "lightbox__close";
    close.type = "button";
    close.setAttribute("aria-label", "Закрыть изображение");
    close.textContent = "×";

    image.className = "lightbox__image";
    image.decoding = "async";
    image.style.objectFit = "contain";

    caption.className = "lightbox__caption";

    dialog.append(close, image, caption);
    lightbox.append(dialog);
    document.body.append(lightbox);

    function closeLightbox(restoreFocus) {
      if (!open) return;

      const wasTopLayer = isTopLayer(lightbox);
      open = false;
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      lightbox.setAttribute("inert", "");
      removeLayer(lightbox);

      if (restoreFocus !== false && wasTopLayer && opener && document.contains(opener)) {
        opener.focus();
      }
    }

    function openLightbox(trigger) {
      const nestedImage = trigger.querySelector("img");
      const source = trigger.dataset.imageSrc
        || (nestedImage ? nestedImage.currentSrc || nestedImage.src : "")
        || trigger.getAttribute("href");
      if (!source) return;

      if (closeMobileMenu) {
        closeMobileMenu(false);
      }

      opener = trigger;
      image.src = source;
      image.alt = trigger.dataset.imageAlt || (nestedImage ? nestedImage.alt : "");
      caption.textContent = trigger.dataset.imageCaption || "";
      caption.hidden = !caption.textContent;

      open = true;
      lightbox.removeAttribute("inert");
      lightbox.setAttribute("aria-hidden", "false");
      lightbox.classList.add("is-open");
      addLayer(lightbox, () => closeLightbox(true));

      focusLayer(lightbox, close, () => open);
    }

    close.addEventListener("click", () => closeLightbox(true));
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        closeLightbox(true);
      }
    });
    document.addEventListener("keydown", (event) => {
      if (open && isTopLayer(lightbox)) {
        trapFocus(event, lightbox, dialog);
      }
    });

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        openLightbox(trigger);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const contactUi = initGlobalContactUi();
    initHeader();
    initSmoothScroll();
    initCatalogDownloads();
    initBackToTop(contactUi?.backToTop);
    const modalApi = initModals();
    initExitOffer(modalApi);
    initLightbox();
    window.NordFormForms?.init();
    window.NordFormAnimations?.init();
  });
})();
