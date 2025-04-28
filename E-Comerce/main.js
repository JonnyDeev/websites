const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector("#nav-links");
const menuBtnIcon = document.querySelector("i");
const searchBtn = document.querySelector("#nav-search");
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: "1000",
};

const swiper = new Swiper('.swiper',{
  loop:true,
} )
ScrollReveal().reveal('.header__image img', {
  ...scrollRevealOption,
  origin: 'right'
});
ScrollReveal().reveal('.header__content div', {
  duration: 1000,
  delay: 300
});
ScrollReveal().reveal('.header__content h1', {
  ...scrollRevealOption,
  delay: 700
});
ScrollReveal().reveal('.header__content p', {
  ...scrollRevealOption,
  delay: 1000
});
ScrollReveal().reveal('.deals__card', {
  ...scrollRevealOption,
  interval: 300
});

ScrollReveal().reveal('.about__image img', {
  ...scrollRevealOption,
  origin: 'right'
});
ScrollReveal().reveal('.about__card', {
  duration: 1000,
  interval:300,
  delay: 300
});

function handleMenuBtn() {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
}

function handleNavLinks() {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
}
function handleSearchBtn() {
  searchBtn.classList.toggle("open");
}

menuBtn.addEventListener("click", handleMenuBtn);

navLinks.addEventListener("click", handleNavLinks);

searchBtn.addEventListener("click", handleSearchBtn);
