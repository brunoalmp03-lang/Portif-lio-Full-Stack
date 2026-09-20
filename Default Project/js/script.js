(function () {
  "use strict";

  var toggle = document.getElementById("nav-toggle");
  var menu = document.getElementById("nav-menu");
  var links = menu.querySelectorAll(".nav-link");

  /* ---------- menu mobile ---------- */

  function setMenu(open) {
    menu.classList.toggle("is-open", open);
    toggle.classList.toggle("is-active", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "Fechar menu de navegação" : "Abrir menu de navegação"
    );
  }

  toggle.addEventListener("click", function () {
    setMenu(!menu.classList.contains("is-open"));
  });

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      setMenu(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
      setMenu(false);
      toggle.focus();
    }
  });

  document.addEventListener("click", function (event) {
    if (
      menu.classList.contains("is-open") &&
      !menu.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      setMenu(false);
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 900) {
      setMenu(false);
    }
  });

  /* ---------- scroll spy (link ativo por seção) ---------- */

  var navMap = {};
  links.forEach(function (link) {
    var href = link.getAttribute("href");
    if (href && href.charAt(0) === "#") {
      navMap[href.slice(1)] = link;
    }
  });

  function setActive(id) {
    links.forEach(function (link) {
      link.classList.toggle("is-active", link === navMap[id]);
    });
  }

  var sections = Array.prototype.slice.call(
    document.querySelectorAll("section[id], footer[id]")
  );

  if ("IntersectionObserver" in window) {
    var spyObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach(function (section) {
      spyObserver.observe(section);
    });
  } else {
    window.addEventListener("scroll", function () {
      var pos = window.scrollY + window.innerHeight / 2;
      var sectionId = null;
      sections.forEach(function (section) {
        if (section.offsetTop <= pos) {
          sectionId = section.id;
        }
      });
      if (sectionId) {
        setActive(sectionId);
      }
    });
  }

  /* ---------- reveals ao rolar ---------- */

  var reveals = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in-view");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );
    reveals.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-in-view");
    });
  }

  /* ---------- ano dinâmico ---------- */

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();