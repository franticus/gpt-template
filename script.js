document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  burger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
  });

  navLinks.addEventListener('click', function () {
    navLinks.classList.remove('active');
    burger.classList.remove('toggle');
  });
});
