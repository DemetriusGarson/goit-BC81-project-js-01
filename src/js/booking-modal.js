import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const BASE_URL = 'https://events-store.b.goit.study/api';

const modal = document.querySelector('.booking-modal');
const closeBtn = document.querySelector('.booking-modal_close-btn');
const form = document.querySelector('.booking-modal_form');
const submitBtn = document.querySelector('.booking-modal_submit-btn');
const submitText = submitBtn.querySelector('.booking-modal_submit-text');
const nameInput = form.querySelector('[name="name"]');
const phoneInput = form.querySelector('[name="phone"]');
const commentInput = form.querySelector('[name="comment"]');

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

function validateForm() {
  const errors = {};

  const name = nameInput.value.trim();
  if (!name) {
    errors.name = "Введіть ваше ім'я";
  } else if (name.length < 2 || name.length > 48) {
    errors.name = "Ім'я має бути від 2 до 48 символів";
  }

  const phone = phoneInput.value.trim().replace(/\D/g, '');
  if (!phone) {
    errors.phone = 'Введіть номер телефону';
  } else if (!/^[0-9]{12}$/.test(phone)) {
    errors.phone = 'Телефон має містити рівно 12 цифр, напр. 380961234568';
  }

  const comment = commentInput.value.trim();
  if (!comment) {
    errors.comment = 'Введіть коментар';
  } else if (comment.length > 256) {
    errors.comment = 'Коментар занадто довгий (максимум 256 символів)';
  }

  return errors;
}

const fieldInputs = {
  name: nameInput,
  phone: phoneInput,
  comment: commentInput,
};

function showErrors(errors) {
  clearErrors();
  if (errors.name) {
    nameInput.classList.add('is-error');
    nameError.textContent = errors.name;
    nameError.classList.add('is-visible');
  }

  if (errors.phone) {
    phoneInput.classList.add('is-error');
    phoneError.textContent = errors.phone;
    phoneError.classList.add('is-visible');
  }

  if (errors.comment) {
    commentInput.classList.add('is-error');
    commentError.textContent = errors.comment;
    commentError.classList.add('is-visible');
  }
}

function clearErrors() {
  nameInput.classList.remove('is-error');
  phoneInput.classList.remove('is-error');
  commentInput.classList.remove('is-error');

  nameError.textContent = '';
  phoneError.textContent = '';
  commentError.textContent = '';

  nameError.classList.remove('is-visible');
  phoneError.classList.remove('is-visible');
  commentError.classList.remove('is-visible');
}

async function handleFormSubmit(event) {
  event.preventDefault();

  const errors = validateForm();

  if (Object.keys(errors).length > 0) {
    showErrors(errors);
    return;
  }

  clearErrors();

  const payload = {
    name: nameInput.value.trim(),
    phone: phoneInput.value.trim().replace(/\D/g, ''),
    eventId: currentEventId,
    comment: commentInput.value.trim(),
  };

  setLoading(true);

  try {
    const response = await axios.post(`${BASE_URL}/orders`, payload);

    const { eventName, orderNum } = response.data;

    iziToast.success({
      message: `Дякуємо! Ви замовили івент до ${eventName}, ваше замовлення №${orderNum}. Очікуйте на зворотній зв'язок.`,
      position: 'topRight',
      timeout: 6000,
    });

    closeBookingModal();
  } catch (error) {
    const status = error.response?.status;
    let message = 'Сталася помилка під час відправки заявки. Спробуйте ще раз.';

    if (status === 404) {
      message = 'Цю подію більше не знайдено. Спробуйте оновити сторінку.';
    } else if (status === 400) {
      message = 'Перевірте правильність введених даних.';
    }

    iziToast.error({
      message,
      position: 'topRight',
      timeout: 6000,
    });
  } finally {
    setLoading(false);
  }
}

function setLoading(isLoading) {
  submitBtn.disabled = isLoading;
}
