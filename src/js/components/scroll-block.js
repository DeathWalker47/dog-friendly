import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


// const tl = gsap.timeline();

// tl.to('.cours-article--two', {y:'-100%'})
// tl.fromTo('.cours-article--three', {y:'-100%'}, {y:'-200%'})

// ScrollTrigger.create({
//   animation: tl,
//   trigger: '.free-cours__items',
//   start: 'top top',
//   end: 'bottom',
//   scrub: true,
//   pin: true,
//   // pinSpacing:false,
//   markers: true,

// })

// tl.to('.cours-article--two', {
//   scrollTrigger: {
//     trigger:'.free-cours__items',
//     start:'top top',
//     // end: 'top',
//     pin: true,
//     pinSpacing:false,
//     scrub: true,
//     // markers: true,
//   },
//   y:' -100%',
// })

// tl.to('.cours-article--three', {
//   scrollTrigger: {
//     trigger:'.free-cours__items',
//     start:'center center',
//     // end: 'top',
//     pin: true,
//     pinSpacing:false,
//     scrub: true,
//     markers: true,
//   },
//   y:' -200%',
// },1)
