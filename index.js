const hamburger = document.querySelector(".menu");
const header = document.querySelector("header");

hamburger.addEventListener("click", function () {
  document.querySelector("header").classList.toggle("menu-click");
  document.querySelector("ul").classList.toggle("menu-click");
});
