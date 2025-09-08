// Set default language to Vietnamese when page loads
document.addEventListener('DOMContentLoaded', function() {
  setLanguage('vi');
});

function setLanguage(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.innerHTML = el.getAttribute("data-" + lang);
  });
}