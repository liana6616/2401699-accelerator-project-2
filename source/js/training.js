import Swiper from 'swiper/bundle';
import 'swiper/scss';

new Swiper('#swiper-training', {
  navigation: {
    nextEl: '.training__button-next',
    prevEl: '.training__button-prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 15,
      slidesPerView: 1,
      initialSlide: 2,
    },
    768: {
      spaceBetween: 20,
      slidesPerView: 3,
      initialSlide: 0,
    },
    1440: {
      spaceBetween: 20,
      slidesPerView: 4,
    }
  }
});
