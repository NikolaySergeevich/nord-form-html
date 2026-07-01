(function () {
  function getLeads() {
    try {
      return JSON.parse(localStorage.getItem("nordFormLeads") || "[]");
    } catch (error) {
      return [];
    }
  }

  function saveLead(lead) {
    const leads = getLeads();
    leads.push({
      ...lead,
      createdAt: new Date().toISOString(),
      page: window.location.pathname
    });
    localStorage.setItem("nordFormLeads", JSON.stringify(leads));
  }

  function setError(field, message) {
    const error = field.closest(".field").querySelector(".field__error");
    field.setAttribute("aria-invalid", message ? "true" : "false");
    if (error) error.textContent = message || "";
  }

  function validate(form) {
    let valid = true;
    form.querySelectorAll("[data-required]").forEach((field) => {
      const value = field.value.trim();
      if (!value) {
        setError(field, "Заполните поле");
        valid = false;
        return;
      }
      if (field.name === "phone" && value.replace(/\D/g, "").length < 7) {
        setError(field, "Укажите телефон минимум из 7 цифр");
        valid = false;
        return;
      }
      setError(field, "");
    });
    return valid;
  }

  function initForms() {
    document.querySelectorAll("[data-nord-form]").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!validate(form)) return;

        const submit = form.querySelector("[type='submit']");
        const status = form.querySelector(".form__status");
        const type = form.getAttribute("data-nord-form");
        const formData = new FormData(form);
        const lead = { type };
        formData.forEach((value, key) => {
          lead[key] = String(value).trim();
        });

        if (submit) {
          submit.disabled = true;
          submit.dataset.originalText = submit.textContent;
          submit.textContent = "Отправляем";
        }

        window.setTimeout(() => {
          saveLead(lead);
          form.reset();
          if (status) {
            status.textContent =
              type === "catalog"
                ? "Спасибо! Каталог готов к скачиванию. Мы также свяжемся с вами для уточнения задачи."
                : "Спасибо! Заявка принята. В ближайшее время свяжемся с вами.";
          }
          if (submit) {
            submit.disabled = false;
            submit.textContent = submit.dataset.originalText || "Отправить";
          }
        }, 450);
      });
    });
  }

  window.NordFormForms = { init: initForms };
})();
