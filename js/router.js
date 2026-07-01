(function () {
  function initHeader() {
    const header = document.querySelector(".site-header");
    const toggle = document.querySelector(".mobile-toggle");
    const menu = document.querySelector(".mobile-menu");

    function updateHeader() {
      if (header) header.classList.toggle("is-scrolled", window.scrollY > 20);
    }

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        const open = !menu.classList.contains("is-open");
        menu.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", String(open));
      });

      menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          menu.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }
  }

  function initFAQ() {
    document.querySelectorAll(".faq__button").forEach((button) => {
      button.addEventListener("click", () => {
        const item = button.closest(".faq__item");
        const open = !item.classList.contains("is-open");
        item.classList.toggle("is-open", open);
        button.setAttribute("aria-expanded", String(open));
      });
    });
  }

  window.NordFormRouter = { initHeader, initFAQ };
})();
