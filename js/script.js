const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    nextButton: '.city__left-btn',
    nextButton: '.swiper-button-prev',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    // navigation: {
        // enable:true,
        // nextButton: '.city__left-btn',
        // nextButton: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });