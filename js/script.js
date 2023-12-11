document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const navList = document.querySelector('.nav-list');

  burgerMenu.addEventListener('click', function () {
      navList.classList.toggle('active');
  });

  document.addEventListener('click', function (event) {
      if (!navList.contains(event.target) && event.target !== burgerMenu) {
          navList.classList.remove('active');
      }
  });
});