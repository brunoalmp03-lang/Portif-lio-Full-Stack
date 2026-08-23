(function () {
  "use strict";

  var toggle = document.getElementById("nav-toggle");
  var menu = document.getElementById("nav-menu");

  function closeMenu() {
    menu.classList.remove("is-open");
    toggle.classList.remove("is-active");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu de navegação");
  }

  toggle.addEventListener("click", function () {
    var isOpen = menu.classList.toggle("is-open");
    toggle.classList.toggle("is-active", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
    );
  });

  menu.querySelectorAll(".nav__link").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
      closeMenu();
      toggle.focus();
    }
  });

  document.addEventListener("click", function (event) {
    if (
      menu.classList.contains("is-open") &&
      !menu.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      closeMenu();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 900) {
      closeMenu();
    }
  });

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
