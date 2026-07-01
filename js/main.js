(function () {
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

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape" || !menu.classList.contains("is-open")) return;
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    });
  }

  function initSmoothScroll() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    initSmoothScroll();
    window.NordFormForms?.init();
    window.NordFormAnimations?.init();
  });
})();
