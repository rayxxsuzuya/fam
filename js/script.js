const watchSlider = new Swiper('.watch__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 20,
  centeredSlides: true,
  centeredSlidesBounds: true,

  pagination: {
    el: '.watch__pagination',
    clickable: true,
  },

  breakpoints: {
    600: {
      spaceBetween: 40,
      centeredSlides: false,
      centeredSlidesBounds: false,
    }
  }
});


const headerMenu = document.querySelector('.header__menu');

const headerMobileMenu = document.querySelector('.header-mobile');

const headerMobileClose = document.querySelector('.header-mobile__close');

headerMenu.addEventListener('click', () => {
  headerMobileMenu.classList.toggle('active');
})

headerMobileClose.addEventListener('click', () => {
  headerMobileMenu.classList.remove('active');
})

if (window.innerWidth <= 600) {
  // Получаем все элементы с классом watch__item
const watchItems = document.querySelectorAll('.watch__item');

// Добавляем обработчик события клика на каждый элемент
watchItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Добавляем класс active к элементу
    item.classList.add('active');
  });
});

// Получаем все элементы с классом watch__close
const watchClose = document.querySelectorAll('.watch__close');

// Добавляем обработчик события клика на каждый элемент
watchClose.forEach((close) => {
  close.addEventListener('click', (event) => {
    event.stopPropagation();
    // Убираем класс active у родителя элемента watch__close
    close.closest('.watch__item').classList.remove('active');
  });
});
}