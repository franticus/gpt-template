const modalBtn = document.querySelector('.necessary_button');
const heroBtn = document.querySelector('.hero_button');
const modalCloseTest = document.querySelector('.modal__close__test');
const modalTest = document.querySelector('.modal--test');
const modalOverlay = document.querySelector('.modal__overlay__test');

modalBtn.addEventListener('click', () => {
  modalTest.classList.add('modal--visible');
});

heroBtn.addEventListener('click', () => {
  modalTest.classList.add('modal--visible');
});

modalCloseTest.addEventListener('click', () => {
  modalTest.classList.remove('modal--visible');
});

modalOverlay.addEventListener('click', () => {
  modalTest.classList.remove('modal--visible');
});
