import { burger } from "../functions/burger";
import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";

const burder = document.querySelector(".burger");
const mobileNav = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav__link");
const navLinkMob = document.querySelector(".nav__item--contact");
const navLinkDrop = document.querySelectorAll(".dropdown-menu__link ");

burder.addEventListener("click", () => {
  mobileNav.classList.toggle("nav--active");
  if (burder.classList.contains("burger--active")) {
    disableScroll();
  } else {
    enableScroll();
  }
});

navLink.forEach((el) => {
  el.addEventListener("click", () => {
    mobileNav.classList.remove("nav--active");
    burder.classList.remove("burger--active");
    enableScroll();
  });
});
navLinkDrop.forEach((el) => {
  el.addEventListener("click", () => {
    mobileNav.classList.remove("nav--active");
    burder.classList.remove("burger--active");
    enableScroll();
  });
});

navLinkMob.addEventListener("click", () => {
  mobileNav.classList.remove("nav--active");
  burder.classList.remove("burger--active");
  enableScroll();
});
