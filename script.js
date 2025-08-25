    function setLanguage(lang) {
      document.querySelectorAll("[data-en]").forEach(el => {
        el.innerHTML = el.getAttribute("data-" + lang);
      });
    }