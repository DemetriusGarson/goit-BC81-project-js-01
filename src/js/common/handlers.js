import { getCategories, getEvents } from './api';
import { renderCategories, renderEvents } from './render-functions';
import { refs } from './refs';
import { API_ENDPOINTS } from './constans';

let currentPage = 1;
let currentCategory = 'all';

export async function initEventList() {
  try {
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
  }
}
export async function handleGetEventsByCategory(event) {
  const categoryItem = event.target.closest('.event-category-item');

  if (!categoryItem) return;
  const categoryClick = categoryItem.dataset.category;

  currentCategory = categoryClick;
  currentPage = 1;
  refs.eventsList.innerHTML = '';
  const { events, totalItems } = await getEvents(currentPage, currentCategory);
  renderEvents(events);
  checkEventsLimit(totalItems);
}
export async function handleShowMoreBtnClick(event) {
  currentPage += 1;
  const { events, totalItems } = await getEvents(currentPage, currentCategory);
  renderEvents(events);
  checkEventsLimit(totalItems);
}
export function checkEventsLimit(totalItems) {
  refs.showMoreBtn.disabled = currentPage * API_ENDPOINTS.LIMIT >= totalItems;
}
