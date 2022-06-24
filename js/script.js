window.addEventListener("scroll", () => {
  let navbar = document.querySelector("nav");
  let windowPosition = window.scrollY > 0;
  let logo = document.getElementById("logo");
  navbar.classList.toggle("scrolling-active", windowPosition);
  logo.classList.toggle("nav-scroll-clr-change", windowPosition);
});

