const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link a");

function setMenuState(isOpen) {
  if (!menuToggle || !navMenu) {
    return;
  }

  menuToggle.classList.toggle("open", isOpen);
  navMenu.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
}

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    setMenuState(!navMenu.classList.contains("open"));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  });
}
