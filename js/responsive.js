let burger = document.getElementById("burger");
let navbar = document.getElementById("main-nav");
let menu = document.getElementById("nav-list");
let nav_btns = document.querySelector(".btnContainer");
let resp_logo = document.getElementsByClassName("resp-logo")[0];

burger.addEventListener("click", () => {
  navbar.classList.toggle("main-nav-resp");
  menu.classList.toggle("visible");
  nav_btns.classList.toggle("visible");
  resp_logo.classList.toggle("ds-none");
});
