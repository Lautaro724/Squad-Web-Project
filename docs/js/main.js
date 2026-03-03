document.documentElement.style.scrollBehavior = "smooth";
//AÑO AUTOMATICO FOOTER//
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if(year){
    year.textContent = new Date().getFullYear();
  }
});

// ANIM SECCIONES //
document.addEventListener("DOMContentLoaded", () => {

  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("section-visible");
      }
    });
  }, {
    threshold: 0.15
  });

  sections.forEach(section => {
    observer.observe(section);
  });

});

// ANIM HERO INTRO A LA WEB //
document.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector(".hero__content");
  if (!heroContent) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        heroContent.classList.add("is-visible");
        obs.disconnect();
      }
    });
  }, { threshold: 0.2 });

  obs.observe(heroContent);
});

//ANIM SCROLL EN CARDS//
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => {
  observer.observe(card);
});


// MENÚ HAMBURGUESA (mobile) //
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.getElementById("mobileNav");
  if (!toggle || !mobileNav) return;

  const backdrop = mobileNav.querySelector(".mobile-nav__backdrop");
  const links = mobileNav.querySelectorAll("a");

  const openMenu = () => {
    mobileNav.classList.add("is-open");
    document.body.classList.add("nav-open");
    toggle.setAttribute("aria-expanded", "true");
    mobileNav.setAttribute("aria-hidden", "false");
  };

  const closeMenu = () => {
    mobileNav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("aria-hidden", "true");
  };

  toggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
  });

  if (backdrop) backdrop.addEventListener("click", closeMenu);

  links.forEach((a) => a.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // Si pasan a desktop, cerramos por las dudas
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMenu();
  });
});


