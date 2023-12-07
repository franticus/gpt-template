document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const nav = document.querySelector('nav');
  const overlay = document.querySelector('.overlay');

  burgerMenu.addEventListener('click', function () {
    nav.classList.toggle('show');
    overlay.classList.toggle('show');
    burgerMenu.classList.toggle('show');
  });

  overlay.addEventListener('click', function () {
    nav.classList.remove('show');
    overlay.classList.remove('show');
    burgerMenu.classList.remove('show');
  });
});