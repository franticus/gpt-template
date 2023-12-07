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

  nav.addEventListener('click', function () {
    nav.classList.remove('show');
    overlay.classList.remove('show');
    burgerMenu.classList.remove('show');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = this.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);

      var offset = 300;
      var targetOffset = targetElement.getBoundingClientRect().top + window.scrollY;
      var centerScrollPosition = targetOffset - window.innerHeight / 2 + offset;

      window.scrollTo({
        top: centerScrollPosition,
        behavior: 'smooth',
      });
    });
  });
});