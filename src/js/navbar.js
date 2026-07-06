const menu = document.getElementById('navbar-menu');
const openBtn = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-menu');
const navList = menu.querySelector('.nav-list');
const mobileOrderBtn = menu.querySelector('.mobile-menu-btn');
const headerOrderBtn = document.querySelector('.header .consultation-btn');
const eventSection = document.getElementById('event-list');

function closeMenu() {
  menu.classList.add('is-hidden');
  document.body.style.overflow = '';
}

openBtn.addEventListener('click', function () {
  menu.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', closeMenu);
navList.addEventListener('click', closeMenu);

mobileOrderBtn.addEventListener('click', function () {
  closeMenu();
  if (eventSection) {
    eventSection.scrollIntoView({ behavior: 'smooth' });
  }
});

if (headerOrderBtn) {
  headerOrderBtn.addEventListener('click', function () {
    if (eventSection) {
      eventSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeMenu();
  }
});
