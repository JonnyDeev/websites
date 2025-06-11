const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector("#nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const contact_btn = document.querySelector("#contact-btn");
const form = document.querySelector("#contact-form");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#closeModal");

function menuBtnHandler() {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");

  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
}

menuBtn.addEventListener("click", menuBtnHandler);

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

lightGallery(document.getElementById("gallery"), {
  plugins: [lgZoom, lgThumbnail],
  speed: 400,
  download: false,
  zoom: true,
  actualSize: true,
  thumbnail: true,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

contact_btn.addEventListener("click", () => {
  const section = document.querySelector("#contact");
  if (section) {
    section.scrollIntoView();
  }
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("test");
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  const res = await fetch("https://jerca-backend.onrender.com/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  form.reset();
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  console.log("test");
  modal.close();
});
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".section__hero-content", {
  ...scrollRevealOption,
  delay: 300,
});

ScrollReveal().reveal(".section__services-header", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".section__projects-header", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".section__projects-gallery", {
  ...scrollRevealOption,
  interval: 300,
});
ScrollReveal().reveal(".section__testimonials-header", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".section__contact-header", {
  ...scrollRevealOption,
  delay: 300,
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.open) {
    modal.close();
  }
});
