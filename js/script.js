var navToggler = document.querySelector(".navbar-toggler"),
navTogglerIcon = document.querySelector(".navbar-toggler-icon");

navToggler.addEventListener("click", () => {
    navTogglerIcon.classList.toggle("close-icon");
})

//swipper js
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  spaceBetween: 5,

  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true 
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0:{
        slidesPerView : 1
    },
    620: {
        slidesPerView : 2
    },
    768: {
        slidesPerView : 3
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


<<<<<<< HEAD
=======
//dynamic modal 
var allCardItem = document.querySelectorAll(".card-item"),
modalTitle = document.querySelector(".modalTitle"),
modalImg = document.getElementById("modalImg");

allCardItem.forEach((card) => {
  var imgSrc = card.querySelector("#imgSrc"),
  imgCaption = card.querySelector("#imgCaption");

  card.addEventListener('click', () => {
    modalImg.setAttribute("src",imgSrc.src);
    modalTitle.textContent = imgCaption.textContent;
  })
})
>>>>>>> f50420c74f72162e29487248321d67fd4a1c7d62
