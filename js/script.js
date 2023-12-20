document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.querySelector('.over-starlighttt-lay');
  const navList = document.querySelector('.nav-starlighttt-list');
  const burgerMenu = document.querySelector('.burger-starlighttt-menu');

  burgerMenu.addEventListener('click', function () {
    overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
    navList.classList.toggle('active');
  });

  document.addEventListener('click', function (event) {
    if (!navList.contains(event.target) && event.target !== burgerMenu) {
      overlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
      navList.classList.remove('active');
    }
  });
});
