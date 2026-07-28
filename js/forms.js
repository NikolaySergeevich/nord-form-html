(function () {
  const script = Array.from(document.scripts).find((item) => /(?:^|\/)js\/forms\.js(?:\?|$)/.test(item.src));
  const endpoint = script ? new URL("../send.php", script.src).href : "/send.php";
  const initializedForms = new WeakSet();
  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
  const storagePrefix = "nord-form:";
  const leadSubmittedKey = "nord-form:lead-submitted:v1";

  function normalizeUtm(value) {
    return typeof value === "string" ? value.trim().slice(0, 200) : "";
  }

  function getStoredUtm(key) {
    try {
      return normalizeUtm(window.sessionStorage.getItem(storagePrefix + key));
    } catch (error) {
      return "";
    }
  }

  function storeUtm(key, value) {
    try {
      window.sessionStorage.setItem(storagePrefix + key, value);
    } catch (error) {
      // Storage can be unavailable in private or restricted browser contexts.
    }
  }

  function collectUtm() {
    const values = {};
    let params = null;

    try {
      params = new URLSearchParams(window.location.search);
    } catch (error) {
      params = null;
    }

    utmKeys.forEach((key) => {
      const current = params ? normalizeUtm(params.get(key)) : "";
      if (current) {
        values[key] = current;
        storeUtm(key, current);
        return;
      }

      const stored = getStoredUtm(key);
      if (stored) {
        values[key] = stored;
      }
    });

    return values;
  }

  function markLeadSubmitted(formType) {
    try {
      window.sessionStorage.setItem(leadSubmittedKey, "1");
    } catch (error) {
      // Storage can be unavailable in private or restricted browser contexts.
    }

    document.dispatchEvent(new CustomEvent("nordform:lead-submitted", {
      detail: { formType }
    }));
  }

  function setError(field, message) {
    const wrapper = field.closest(".field");
    const error = wrapper ? wrapper.querySelector(".field__error") : null;
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
    collectUtm();

    document.querySelectorAll("[data-nord-form]").forEach((form) => {
      if (initializedForms.has(form)) return;
      initializedForms.add(form);

      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (!validate(form)) return;

        const submit = form.querySelector("[type='submit']");
        const status = form.querySelector(".form__status");
        const type = form.getAttribute("data-nord-form");
        const formData = new FormData(form);
        const lead = {};
        formData.forEach((value, key) => {
          lead[key] = String(value).trim();
        });
        Object.assign(lead, collectUtm(), {
          formType: type,
          page: window.location.href,
          submittedAt: new Date().toISOString()
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

          markLeadSubmitted(type);
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
