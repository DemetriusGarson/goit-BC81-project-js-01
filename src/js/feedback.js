import axios from 'axios';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import 'css-star-rating/css/star-rating.css';

const feedbackSwiperElement = document.querySelector('.feedback-swiper'); //todo: move to refs.js

const MOBILE_WIDTH_PX = 375;
const TABLET_WIDTH_PX = 768;
const DESKTOP_WIDTH_PX = 1440;

const API_ENDPOINT_FEEDBACKS = '/feedbacks'; //todo: move to obj in constans.js

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

async function getFeedbacks(limit = 10, page = 1) {
  //todo: move to api.js
  const params = {
    limit,
    page,
  };

  const config = {
    params,
  };

  const { data } = await axios.get(API_ENDPOINT_FEEDBACKS, config);
  return data;
}

const { feedbacks } = await getFeedbacks(); //todo: move to some js file in /common. init() of some sort in handlers
console.log(feedbacks);
