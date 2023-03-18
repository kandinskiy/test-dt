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

Array.from(document.querySelectorAll('.popup-open')).forEach((link) => {
  link.addEventListener('click', (e)=>{
    e.preventDefault();
    let id = e.target.closest('.popup-open').getAttribute('data-popup'),
        popup = document.getElementById(id).innerHTML;
    document.querySelector('body').classList.add('body-hidden');
    document.getElementById('popup').classList.remove('popup_hide');
    document.getElementById('popup').querySelector('.popup__content').insertAdjacentHTML('beforeend', popup);
  });
});

Array.from(document.querySelectorAll('.popup__close')).forEach((link) => {
  link.addEventListener('click', (e)=>{
    e.preventDefault();
    document.getElementById('popup').querySelector('.popup__content').innerHTML = '';
    document.getElementById('popup').classList.add('popup_hide');
    document.querySelector('body').classList.remove('body-hidden');
  });
});