var navToggler = document.querySelector(".navbar-toggler"),
navTogglerIcon = document.querySelector(".navbar-toggler-icon");

navToggler.addEventListener("click", () => {
    navTogglerIcon.classList.toggle("close-icon");
})

//swipper js
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  spaceBetween: 5,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true 
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    autoplay: {
    delay: 3000,          // প্রতি ৩ সেকেন্ডে স্লাইড পরিবর্তন হবে
    disableOnInteraction: false, // ইউজার ক্লিক করার পরেও autoplay চলবে
  },
  breakpoints: {
    0:{
        slidesPerView : 1
    },
    620: {
        slidesPerView : 2
    },
    1024: {
        slidesPerView : 4
    },
  }

});

// Mouse hover এ autoplay pause
const swiperEl = document.querySelector('.swiper');

swiperEl.addEventListener('mouseenter', () => {
  swiper.autoplay.stop();  // autoplay stop on hover
});

// Mouse leave এ autoplay resume
swiperEl.addEventListener('mouseleave', () => {
  swiper.autoplay.start(); // autoplay start on mouse out
});

//swipper js

