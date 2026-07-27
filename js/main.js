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
  let closeMobileMenu = null;

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

    const desktopQuery = window.matchMedia("(min-width: 921px)");
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

  function initModals() {
    const modalElements = Array.from(document.querySelectorAll("[data-modal]"));
    if (!modalElements.length) return;

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

    function openModal(state, opener) {
      if (activeState && activeState !== state) {
        closeModal(activeState, false);
      }
      if (closeMobileMenu) {
        closeMobileMenu(false);
      }

      state.opener = opener;
      if (state.title) {
        state.title.textContent = opener.hasAttribute("data-modal-title")
          ? opener.dataset.modalTitle
          : state.originalTitle;
      }
      setHiddenValue(
        state.requestType,
        opener.hasAttribute("data-request-type") ? opener.dataset.requestType : state.originalRequestType
      );
      setHiddenValue(
        state.product,
        opener.hasAttribute("data-product") ? opener.dataset.product : state.originalProduct
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
        const state = states.find((item) => {
          return item.modal.id === reference || item.modal.getAttribute("data-modal") === reference;
        });
        if (!state) return;

        event.preventDefault();
        openModal(state, opener);
      });
    });
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
    initHeader();
    initSmoothScroll();
    initModals();
    initLightbox();
    window.NordFormForms?.init();
    window.NordFormAnimations?.init();
  });
})();
