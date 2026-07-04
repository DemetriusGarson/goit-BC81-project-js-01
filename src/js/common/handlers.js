import { getCategories, getEvents } from './api';
import { renderCategories, renderEvents } from './render-functions';
import { refs } from './refs';
import { API_ENDPOINTS } from './constans';
import { hideLoader, showLoader } from './helpers';

let currentPage = 1;
let currentCategory = 'all';

export async function initEventList() {
  try {
    showLoader();
    const data = await getCategories();
    renderCategories(data);
    const { events, totalItems } = await getEvents(
      currentPage,
      currentCategory
    );
    renderEvents(events);
    checkEventsLimit(totalItems);
  } catch (error) {
    console.log('error events list', error);
  } finally {
    hideLoader();
  }
}
export async function handleGetEventsByCategory(event) {
  const categoryItem = event.target.closest('.event-category-item');
  if (!categoryItem) return;
  try {
    const categoryClick = categoryItem.dataset.category;
    currentCategory = categoryClick;
    currentPage = 1;
    refs.eventsList.innerHTML = '';
    showLoader();
    const { events, totalItems } = await getEvents(
      currentPage,
      currentCategory
    );
    renderEvents(events);
    checkEventsLimit(totalItems);
  } catch (error) {
    console.log('error during getting events by category', error);
  } finally {
    hideLoader();
  }
}
export async function handleShowMoreBtnClick(event) {
  currentPage += 1;
  try {
    showLoader();
    const { events, totalItems } = await getEvents(
      currentPage,
      currentCategory
    );
    renderEvents(events);
    checkEventsLimit(totalItems);
  } catch (error) {
    console.log('error during getting more events by category', error);
    currentPage -= 1;
  } finally {
    hideLoader();
  }
}
export function checkEventsLimit(totalItems) {
  refs.showMoreBtn.disabled = currentPage * API_ENDPOINTS.LIMIT >= totalItems;
}
export function handleEventDetailsModal(event) {
  const details = event.target.dataset.eventId;
  if (!details) return;
  console.log(details);
}
