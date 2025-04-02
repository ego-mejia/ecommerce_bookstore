console.log("El archivo burgerMenu.js se ha cargado correctamente");

// ----------- TOGGLE BURGER MENU

// Obtaining DOM elements
const burgerIcon = document.getElementById("burger-menu-icon");
const menuSection = document.querySelector(".burger-menu");

// Toggle
burgerIcon.addEventListener("click", (e) => {
  e.stopPropagation(); // Avoid event propagation (click).
  menuSection.classList.toggle("active");
});

// Close menu when clicked outside
document.addEventListener("click", (e) => {
  if (!menuSection.contains(e.target) && !burgerIcon.contains(e.target)) {
    menuSection.classList.remove("active");
  }
});

// ----------- CLOSE MENU CLICKING ON X
document
  .querySelectorAll(".burger-menu__close-window-button")
  .forEach((icon) => {
    icon.addEventListener("click", () => {
      menuSection.classList.remove("active");
    });
  });
