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


