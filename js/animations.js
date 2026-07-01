(function () {
  function initReveal() {
    const motionItems = document.querySelectorAll(".reveal-stagger, [data-reveal-stagger]");
    motionItems.forEach((group) => {
      const children = group.querySelectorAll(".reveal, .reveal-up, .reveal-fade, .reveal-scale");
      children.forEach((child, index) => {
        child.style.setProperty("--reveal-delay", `${Math.min(index * 75, 300)}ms`);
      });
    });

    const items = document.querySelectorAll(".reveal, .reveal-up, .reveal-fade, .reveal-scale");
    if (!items.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.14 }
    );

    items.forEach((item) => observer.observe(item));
  }

  function initFAQ() {
    document.querySelectorAll(".faq__button").forEach((button) => {
      button.addEventListener("click", () => {
        const item = button.closest(".faq__item");
        const open = !item.classList.contains("is-open");
        item.classList.toggle("is-open", open);
        button.setAttribute("aria-expanded", String(open));
      });

      button.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        button.click();
      });
    });
  }

  window.NordFormAnimations = {
    init: function () {
      initReveal();
      initFAQ();
    }
  };
})();
