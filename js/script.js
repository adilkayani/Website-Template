window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  let windowPosition = window.scrollY > 0;
  let logo = document.getElementById("logo");
  header.classList.toggle("scrolling-active", windowPosition);
  logo.classList.toggle("nav-scroll-clr-change", windowPosition);
});
