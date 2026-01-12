const menuToggle = document.getElementById("menuToggle");
const navLink = document.getElementById("navlink");
menuToggle.addEventListener("click", () => {
  navLink.classList.toggle("active");
});
