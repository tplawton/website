function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.3,
});