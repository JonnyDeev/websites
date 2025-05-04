const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector("#nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

const scrollRevealOptions = {
  distance: "50px",
  duration: 1500,
  origin: "bottom",
}

function handleMenuBtn() {
  console.log("test");
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
}

menuBtn.addEventListener("click", handleMenuBtn);

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});


ScrollReveal().reveal('.header__content h1', {...scrollRevealOptions})
ScrollReveal().reveal('.section__description ', {...scrollRevealOptions, delay: 500})
ScrollReveal().reveal('.header__btns', {...scrollRevealOptions,  delay: 600})
ScrollReveal().reveal('.service__card', {...scrollRevealOptions,  interval: 700})
ScrollReveal().reveal('.service__btn', {...scrollRevealOptions,  interval: 800})
ScrollReveal().reveal('.about__container .section__header', {...scrollRevealOptions})
ScrollReveal().reveal('.about__list li', {...scrollRevealOptions, delay: 500, interval: 500})