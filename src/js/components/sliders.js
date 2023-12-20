import Swiper from 'swiper/bundle';

const swiperTopSlider = new Swiper('.top-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 900,
  loop: true,
  pagination: {
    el: '.top-slider-pagination',
    type: 'bullets',
    clickable:true,
  },

});
const swiperNewEvent = new Swiper('.new-event', {
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    nextEl: '.new-event-next',
    prevEl: '.new-event-prev',
  },
});

const swiperObjectives = new Swiper('.objectives-slider', {
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    nextEl: '.objectives-slider-next',
    prevEl: '.objectives-slider-prev',
  },
});

const swiperLiveDogSlider = new Swiper('.life-dog-slider', {
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    nextEl: '.life-dog-next',
    prevEl: '.life-dog-prev',
  },
});

const swiperExerience = new Swiper('.experience-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1000,
  navigation: {
    nextEl: '.experience-next',
    prevEl: '.experience-prev',
  },
});
