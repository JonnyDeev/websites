const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector("#nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

function menuBtnHandler() {
  console.log("test");
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");

  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
}

menuBtn.addEventListener("click", menuBtnHandler);

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
