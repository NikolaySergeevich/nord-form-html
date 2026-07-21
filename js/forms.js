(function () {
  const script = Array.from(document.scripts).find((item) => /(?:^|\/)js\/forms\.js(?:\?|$)/.test(item.src));
  const endpoint = script ? new URL("../send.php", script.src).href : "/send.php";

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
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (!validate(form)) return;

        const submit = form.querySelector("[type='submit']");
        const status = form.querySelector(".form__status");
        const type = form.getAttribute("data-nord-form");
        const formData = new FormData(form);
        const lead = {
          formType: type,
          page: window.location.href
        };
        formData.forEach((value, key) => {
          lead[key] = String(value).trim();
        });

        if (submit) {
          submit.disabled = true;
          submit.dataset.originalText = submit.textContent;
          submit.textContent = "Отправляем";
        }

        if (status) {
          status.textContent = "";
        }

        try {
          const response = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(lead)
          });
          const result = await response.json().catch(() => ({}));

          if (!response.ok || !result.ok) {
            throw new Error(result.message || "Не удалось отправить заявку.");
          }

          form.reset();
          if (status) {
            status.textContent = "Спасибо! Мы получили вашу заявку. В ближайшее время свяжемся с вами для обсуждения проекта.";
          }
        } catch (error) {
          if (status) {
            status.textContent = error.message || "Не удалось отправить заявку. Попробуйте ещё раз или свяжитесь с нами по телефону.";
          }
        } finally {
          if (submit) {
            submit.disabled = false;
            submit.textContent = submit.dataset.originalText || "Отправить";
          }
        }
      });
    });
  }

  window.NordFormForms = { init: initForms };
})();
