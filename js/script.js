window.addEventListener("scroll", () => {
  let navbar = document.querySelector("nav");
  let windowPosition = window.scrollY > 0;
  let logo = document.getElementById("logo");
  let resp_logo = document.getElementsByClassName("logo")[0];
  navbar.classList.toggle("scrolling-active", windowPosition);
  logo.classList.toggle("nav-scroll-clr-change", windowPosition);
  resp_logo.classList.toggle("nav-scroll-clr-change", windowPosition);
});
