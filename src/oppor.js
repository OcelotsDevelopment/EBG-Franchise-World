// Replace your current import with this:
import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';
import 'swiper/css';

// Remove the modules array from your config
const swiper = new Swiper('.mySwiper', {
  // loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});