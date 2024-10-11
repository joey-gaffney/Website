// Set current year in footer
const year = document.getElementById("current-year");
year.textContent = new Date().getFullYear();

// Toggle mobile menu
const toggleMenu = document.getElementById("toggle-menu");
const navLinks = document.getElementById("nav-links");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  navLinks.classList.toggle("show");
});
