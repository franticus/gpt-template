const burger = document.querySelector('.burger');
const modal = document.querySelector('.modal--mobmenu');
const modalCloseBurger = document.querySelector('.modal__close__burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger-active');
  modal.classList.toggle('modal--visible');
});

modalCloseBurger.addEventListener('click', () => {
  burger.classList.toggle('burger-active');
  modal.classList.toggle('modal--visible');
});

document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', () => {
    modal.classList.remove('modal--visible');
  });
});

