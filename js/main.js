document.addEventListener('DOMContentLoaded', function () {
  const burgerMenuIcon = document.querySelector('.burger-menu-icon');
  const navListContainer = document.querySelector('.nav-list-container');
  const overlay = document.querySelector('.overlay');

  burgerMenuIcon.addEventListener('click', function () {
    navListContainer.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  });

  overlay.addEventListener('click', function () {
    navListContainer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});
