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
  // breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 2,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  //   // when window width is >= 640px
  //   640: {
  //     slidesPerView: 4,
  //     spaceBetween: 40
  //   }
  // }

});
const swiperNewEvent = new Swiper('.new-event', {
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    nextEl: '.new-event-next',
    prevEl: '.new-event-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    998: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    // 1200: {
    //   slidesPerView: 3,
    //   spaceBetween: 40
    // }
  }
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
