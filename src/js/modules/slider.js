export const swiper = new Swiper('.article__item-wrap', {
  navigation: {
     nextEl: '.article__btn-right',
     prevEl: '.article__btn-left'
  },
  speed: 500,
  loop: true,
    breakpoints: {
     1200: {
      slidesPerView: 3,
      spaceBetween: 30,
     },
     560: {
      slidesPerView: 1,
     },
     860: {
      slidesPerView: 2,
      spaceBetween: 20,
     },
 }
});

export const swiperAbout = new Swiper('.people__item-wrap', {
  navigation: {
     nextEl: '.people__btn-right',
     prevEl: '.people__btn-left'
  },
  speed: 500,
  loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
       slidesPerView: 3,
       spaceBetween: 30,
      },
 }
});

