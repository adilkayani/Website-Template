let burger = document.getElementById("burger");
let navbar = document.getElementById("main-nav");
let menu = document.getElementById("nav-list");
let nav_btns = document.querySelector(".btnContainer");

burger.addEventListener("click", () => {
  navbar.classList.toggle("main-nav-resp");
  menu.classList.toggle("visible");
  nav_btns.classList.toggle("visible");
});
