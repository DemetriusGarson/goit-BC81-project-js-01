import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const BASE_URL = 'https://events-store.b.goit.study/api';

const modal = document.querySelector('.booking-modal');
const closeBtn = document.querySelector('.booking-modal_close-btn');
const form = document.querySelector('.booking-modal_form');
const submitBtn = document.querySelector('.booking-modal_submit-btn');
const submitText = submitBtn.querySelector('.booking-modal_submit-text');

let currentEventId = null;

export function openBookingModal(eventId) {
  currentEventId = eventId;
  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  document.addEventListener('keydown', handleEscKeyPress);
  closeBtn.addEventListener('click', handleModalCloseBtnClick);
  modal.addEventListener('click', handleBackDropClick);
  form.addEventListener('submit', handleFormSubmit);
}

export function closeBookingModal() {
  modal.classList.remove('is-open');
  document.body.style.overflow = '';
  form.reset();
  clearErrors();
  currentEventId = null;

  document.removeEventListener('keydown', handleEscKeyPress);
  closeBtn.removeEventListener('click', handleModalCloseBtnClick);
  modal.removeEventListener('click', handleBackDropClick);
  form.removeEventListener('submit', handleFormSubmit);
}

// ===================== ЗАКРИТТЯ МОДАЛКИ =====================
function handleEscKeyPress(event) {
  if (event.code === 'Escape') {
    closeBookingModal();
  }
}

function handleModalCloseBtnClick() {
  closeBookingModal();
}

function handleBackDropClick(event) {
  if (!event.target.closest('.booking-modal_window')) {
    closeBookingModal();
  }
}
