const leftBtn = document.getElementById("left-btn");
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  // navigation: {
  //     nextButton: '.city__left-btn',
  //     nextButton: '.swiper-button-prev',
  // },
  // Navigation arrows
  navigation: {
    nextEl: ".city__right-btn",
    prevEl: ".city__left-btn",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
