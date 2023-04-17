// Карусель для галлереи в описании города
new Swiper("#carousel-about", {
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
    },
  },
  scrollbar: {
    el: 0
  },
  navigation: {
    prevEl: ".carousel-about-prev",
    nextEl: ".carousel-about-next",
  },
});

// Карусель для списка туров
new Swiper("#carousel-tours", {
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
    },
  },
  scrollbar: {
    el: 0
  },
  navigation: {
    prevEl: ".carousel-tours-prev",
    nextEl: ".carousel-tours-next",
  },
});

// Дизайн для select
new MySelectVisual("#js-select", {
  svg_arrow: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="15.5"/><path d="M10 19L16 13L22 19" stroke-linecap="round"/>'
});

// Вызов popup с формой
Array.from(document.querySelectorAll('.js-popup-open')).forEach((link) => {
  link.addEventListener('click', (e)=>{
    e.preventDefault();
    let id = e.target.closest('.js-popup-open').getAttribute('data-popup');
    document.querySelector('body').classList.add('body-hidden');
    document.getElementById(id).classList.remove('popup_hide');
  });
});

// Вызов popup
Array.from(document.querySelectorAll('.js-popup-close')).forEach((link) => {
  link.addEventListener('click', (e)=>{
    e.preventDefault();
    link.closest('.popup').classList.add('popup_hide');
    document.querySelector('body').classList.remove('body-hidden');
  });
});
