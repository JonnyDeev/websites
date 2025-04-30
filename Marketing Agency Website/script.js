const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector("#nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

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
