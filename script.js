// Navigation Menu Toggle

const menuToggle = document.querySelector(".hamburger-lines");
const navMenu = document.querySelector(".dance-items");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active"); // Add/Remove 'active' class to show/hide menu
});
