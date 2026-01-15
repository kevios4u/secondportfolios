
const menuToggle = document.getElementById("menuToggle");
const navLink = document.getElementById("navlink");
menuToggle.addEventListener("click", () => {
  navLink.classList.toggle("active");
});
/* 
document.querySelectorAll(".nav-link a").forEach(link => {
  link.addEventListener("click", () => {
    navLink.classList.remove("active");
  });
});
*/