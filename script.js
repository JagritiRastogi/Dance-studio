const menuToggle = document.querySelector(".navbar-container input[type='checkbox']");
const navMenu = document.querySelector(".dance-items");

menuToggle.addEventListener("change", () => {
  if (menuToggle.checked) {
    navMenu.classList.add("active");
  } else {
    navMenu.classList.remove("active");
}
});

