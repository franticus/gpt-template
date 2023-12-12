document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navList = document.querySelector('.nav-list');
    const overlay = document.querySelector('.overlay');
  
    burgerMenu.addEventListener('click', function () {
      navList.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });
  
    document.addEventListener('click', function (event) {
      if (!navList.contains(event.target) && event.target !== burgerMenu) {
        navList.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    });
  });