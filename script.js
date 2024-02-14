document.addEventListener('DOMContentLoaded', function () {
  const body = document.querySelector('body');
  const burger = document.querySelector('.QxwGxutbRo');
  const navLinks = document.querySelector('.RTRcmzcmHk');

  burger.addEventListener('click', function () {
    if (navLinks.classList.contains('active')) {
      body.style.overflow = 'visible';
    } else {
      body.style.overflow = 'hidden';
    }
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
  });

  navLinks.addEventListener('click', function () {
    navLinks.classList.remove('active');
    body.style.overflow = 'visible';
    burger.classList.remove('toggle');
  });
});
