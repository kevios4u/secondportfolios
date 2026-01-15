// SELECT ELEMENTS
const menuToggle = document.getElementById("menuToggle");
const navLink = document.getElementById("navlink");

// TOGGLE FUNCTION
function toggleMenu() {
  const isOpen = navLink.classList.toggle("active");
  menuToggle.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
}

// CLICK TOGGLE
menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

// KEYBOARD ACCESSIBILITY
menuToggle.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleMenu();
  }
});

// CLOSE WHEN CLICKING A LINK
document.querySelectorAll(".nav-link a").forEach(link => {
  link.addEventListener("click", () => {
    navLink.classList.remove("active");
    menuToggle.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// CLOSE WHEN CLICKING OUTSIDE
document.addEventListener("click", (e) => {
  if (!menuToggle.contains(e.target) && !navLink.contains(e.target)) {
    navLink.classList.remove("active");
    menuToggle.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});
