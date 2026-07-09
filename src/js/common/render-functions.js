import { getCategoryClass } from './helpers';
import { refs } from './refs';
import SimpleBar from 'simplebar';
import 'simplebar/dist/simplebar.css';
import templateEventImage from '/img/template_event_image_opt.avif';

let isScrollDone = false;
export function renderCategories(allcategories) {
  const categoryList = [
    {
      _id: 'all',
      name: 'Всі події',
      tags: [],
    },
    ...allcategories,
  ];

  const markup = categoryList
    .map(({ _id, name, tags }, index) => {
      const dynamicClass = getCategoryClass(categoryList.length, index);
      const tagsList = tags.map(tag => `#${tag} `).join('');
      return `<li class="event-category-item ${index === 0 ? 'is-active' : ''} ${dynamicClass}" data-category="${_id}">
    <button type="button" class="event-category-btn">
      <span class="event-category-title">${name}</span>
      <span class="event-category-tags">${tagsList}</span>
    </button>
  </li>`;
    })
    .join('');

  refs.categoriesListEl.innerHTML = markup;
  if (refs.firstCategoryButton) {
    refs.firstCategoryButton.classList.add('categories__btn--active');
  }
  // if (window.innerWidth < 768 && !refs.categoriesListEl.SimpleBar) {
  //   new SimpleBar(refs.categoriesListEl, {
  //     autoHide: false,
  //   });
  // }
}

refs.caregoryListSelect.addEventListener('click', openCategoriesList);
export function openCategoriesList(event) {
  refs.categoriesListOpenSvgBtn.classList.toggle('icon-rotate-rotated');
  refs.categoriesListOpen.classList.toggle('is-hidden');
  if (
    window.innerWidth < 768 &&
    !refs.categoriesListOpen.classList.contains('is-hidden')
  ) {
    setTimeout(() => {
      if (
        !refs.categoriesScroll.hasAttribute('data-simplebar') &&
        !refs.categoriesScroll.SimpleBar
      ) {
        const simpleBarInstance = new SimpleBar(refs.categoriesScroll, {
          autoHide: false,
        });
        refs.categoriesScroll.SimpleBar = simpleBarInstance;
      } else {
        if (refs.categoriesScroll.SimpleBar) {
          refs.categoriesScroll.SimpleBar.recalculate();
        }
      }
    }, 50);
  }
}

export function renderEvents(events) {
  const PLACEHOLDER = templateEventImage;

  const markup = events
    .map(({ _id, name, price, category, image }) => {
      const imageSrc = image || PLACEHOLDER;

      return `<li class="event-item">
        <img
          src="${imageSrc}"
          alt="${name}"
          width="335"
          height="251"
          onerror="this.onerror=null;this.src='${PLACEHOLDER}'"
        />
        <div class="event-info">
          <p class="event-title">${name}</p>
          <p class="event-text">${category.name}</p>
          <p class="event-price">від ${price.value} грн</p>
        </div>
        <button
          type="button"
          class="event-details-btn"
          data-event-id="${_id}"
        >
          Детальніше
        </button>
      </li>`;
    })
    .join('');

  refs.eventsList.insertAdjacentHTML('beforeend', markup);
}
