"use strict";

//*********sticky navbar */

let mm = gsap.matchMedia();

mm.add("(max-width: 1000px)", () => {
  gsap.to(".navbar", {
    background: "rgb(1,10,20)",

    height: "75px",

    scrollTrigger: {
      trigger: ".header",
      start: "bottom 89%",
      end: "bottom 90%",
      scrub: 1,
    },
  });
});

mm.add("(min-width: 1001px)", () => {
  gsap.to(".navbar", {
    background: "rgb(1,10,20)",

    height: "95px",

    scrollTrigger: {
      trigger: ".header",
      start: "bottom 89%",
      end: "bottom 90%",
      scrub: 1,
    },
  });
});

gsap.to(".main", {
  backgroundColor: "rgb(12 14 43)",
  // backgroundImage: "radial-gradient(#01010126 6px, transparent 6px",
  // backgroundSize: "11px 11px",
  scrollTrigger: {
    trigger: ".header",
    start: "bottom 40%",
    end: "bottom 60%",
    // markers: true,

    scrub: 5,
  },
});

gsap.to(".cursorblur", {
  background: "#00000073",
  scrollTrigger: {
    trigger: ".header",
    start: "bottom 80%",
    end: "bottom 40%",

    scrub: 1,
  },
});

//***************loading screen */
gsap.fromTo(
  ".loading--screen",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    display: "none",
    duration: 0.5,
    delay: 2,
    ease: "power4",
  }
);

//
gsap.from(".navbar", {
  opacity: 0,
  duration: 1,
  y: -10,
  delay: 2,
});

gsap.from(".header--title", {
  opacity: 0,
  y: -15,
  duration: 0.7,
  stagger: 0.33,
  ease: "power2",
  delay: 2,
});

gsap.from(".navbar__list", {
  opacity: 0,
  y: -10,
  duration: 0.7,
  stagger: 0.13,
  // ease: "power2",
  delay: 2,
});

//**cursor */
const cursor = document.querySelector(".cursor");
const cursorblur = document.querySelector(".cursorblur");

document.addEventListener("pointermove", function (e) {
  // gsap.to(cursor, {
  //   x: e.x + 20,
  //   y: e.y + 20,
  //   delay: 0,
  // });
  gsap.to(cursorblur, {
    x: e.x - cursorblur.getBoundingClientRect().height / 2,
    y: e.y - cursorblur.getBoundingClientRect().height / 2,
  });
});

//open and close toggle function

const btnOpen = document.querySelector(".btn--open");
const btnClose = document.querySelector(".btn--close");

const menu = document.querySelector(".menu");

const opentl = gsap.timeline();

btnOpen.addEventListener("click", function () {
  gsap.to(menu, {
    height: "100vh",
    duration: 1.5,
    background: "#0B0D1B",
    ease: "power4",
  });

  gsap.fromTo(
    ".menu__links",
    {
      opacity: 0,
      y: 0,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
    }
  );

  gsap.from(".menu__logo", {
    delay: 0.9,
    opacity: 0,
    duration: 0.2,
  });

  // gsap.to(cursor, {
  //   zIndex: "500",
  //   scale: 0.7,
  //   // mixBlendMode: "difference",
  // });
});

const closetl = gsap.timeline();

btnClose.addEventListener("click", function () {
  closetl.to(menu, {
    height: "0%",
    duration: 1,
    background: "#0B0D1B",

    ease: "power4",
    delay: 0.2,
  });
  gsap.to(".menu__links", {
    opacity: 0,
    y: 0,
    duration: 0.3,
    stagger: 0.1,
  });

  // gsap.to(cursor, {
  //   zIndex: "100",
  //   scale: 1,
  //   // mixBlendMode: "normal",
  // });

  gsap.to(".dropdown__contents", {
    height: "0px",
    opacity: 0,
    duration: 1,
  });
});

// dropdown hover

// const dropper = document.querySelector(".dropper");
// const hidders = document.querySelectorAll(".hidder");

// dropper.addEventListener("pointerenter", function () {
//   gsap.to(".dropdown__contents", {
//     height: "40vh",
//     opacity: 1,
//     duration: 1,
//   });
// });

// hidders.forEach(function (hidder) {
//   hidder.addEventListener("pointerenter", function () {
//     gsap.to(".dropdown__contents", {
//       height: "0px",
//       opacity: 0,
//       duration: 1,
//     });
//   });
// });

///swiper js testimonail
let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 15000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1000,
  grabCursor: true,
  lazyLoading: true,
  centeredSlides: true,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 24,

  breakpoints: {
    1024: {
      slidesPerView: 1.5,
      centeredSlides: true,
      spaceBetween: 40,
    },
  },
});
