import { burger } from "../functions/burger";
import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";

const burder = document.querySelector(".burger");
const mobileNav = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav__link");
const navLinkMob = document.querySelector(".nav__item--contact");
const navLinkDrop = document.querySelectorAll(".dropdown-menu__link ");
const navLinlMobile = document.querySelectorAll(".nav__link-mobile");

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
    if (!el.classList.contains("nav__link-mobile")) {
      mobileNav.classList.remove("nav--active");
      burder.classList.remove("burger--active");
      enableScroll();
    }
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

// navLinlMobile.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     e.preventDefault();
//     const self = e.currentTarget;
//     const content = self.nextElementSibling;
//     document.querySelectorAll(".nav__link-mobile").forEach((el) => {
//       el.classList.remove("nav__link-mobile--open");
//       el.nextElementSibling.style.maxHeight = null;
//     });

//     self.classList.toggle("nav__link-mobile--open");

//     if (self.classList.contains("nav__link-mobile--open")) {
//       content.style.maxHeight = content.scrollHeight + "px";
//     } else {
//       content.style.maxHeight = null;
//     }
//   });
// });

navLinlMobile.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const self = e.currentTarget;
    const content = self.nextElementSibling;

    self.classList.toggle("nav__link-mobile--open");

    if (self.classList.contains("nav__link-mobile--open")) {
      self.setAttribute("aria-expanded", true);
      content.setAttribute("aria-hidden", false);
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      self.setAttribute("aria-expanded", false);
      content.setAttribute("aria-hidden", true);
      content.style.maxHeight = null;
    }
  });
});
