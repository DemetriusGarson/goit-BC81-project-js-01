import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const feedbackSwiperElement = document.querySelector('.feedback-swiper');

const MOBILE_WIDTH_PX = 375;
const TABLET_WIDTH_PX = 768;
const DESKTOP_WIDTH_PX = 1440;

const swiperOptions = {
  spaceBetween: 32,
  breakpoints: {
    [MOBILE_WIDTH_PX]: {
      slidesPerView: 1,
    },
    [TABLET_WIDTH_PX]: {
      slidesPerView: 2,
    },
    [DESKTOP_WIDTH_PX]: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.feedback-pagination',
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.feedback-next',
    prevEl: '.feedback-prev',
  },
  modules: [Navigation, Pagination],
};

export const feedbackSwiper = new Swiper(feedbackSwiperElement, swiperOptions);
