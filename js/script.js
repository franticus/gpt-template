document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const mobileMenu = document.querySelector('.mobile-menu');

  burgerMenu.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
  });

  mobileMenuOverlay.addEventListener('click', function () {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
  });

  const mobileMenuLinks = mobileMenu.querySelectorAll('a');

  mobileMenuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('active');
      mobileMenuOverlay.classList.remove('active');
    });
  });
});