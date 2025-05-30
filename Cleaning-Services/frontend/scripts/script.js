const mobileMenu = document.getElementById("mobile-menu");
const mobileNavbar = document.getElementById("mobile-navbar");

mobileMenu.addEventListener("click", () => {
    mobileNavbar.classList.toggle("hidden");
});
