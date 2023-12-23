import 'simplebar';
import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true,
  easing: 'linear',
});

if(document.querySelector('.map-select')) {
  const defaultSelect = () => {
    const element = document.querySelector(".default");
    const elementTwo = document.querySelector(".default-two");
    const choices = new Choices(element, {
      searchEnabled: false,
    });
    const choicesTwo = new Choices(elementTwo, {
      searchEnabled: false,
    });
  };
  defaultSelect();

}
