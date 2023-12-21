import { burger } from '../functions/burger';
const burder = document.querySelector(".burger");
const mobileNav = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav__link");
const navLinkDrop = document.querySelectorAll(".dropdown-menu__link ");

burder.addEventListener("click", () => {
  mobileNav.classList.toggle("nav--active");
});

navLink.forEach((el) => {
  el.addEventListener("click", () => {
    mobileNav.classList.remove("nav--active");
    burder.classList.remove("burger--active");
  });
});
navLinkDrop.forEach((el) => {
  el.addEventListener("click", () => {
    mobileNav.classList.remove("nav--active");
    burder.classList.remove("burger--active");
  });
});
