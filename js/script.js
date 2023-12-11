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

document.addEventListener('DOMContentLoaded', function () {
  const cookieConsent = document.getElementById('cookieConsent');
  const acceptButton = document.getElementById('acceptButton');
  const rejectButton = document.getElementById('rejectButton');

  const hasAcceptedCookies = localStorage.getItem('cookieConsent') === 'true';

  if (!hasAcceptedCookies) {
    cookieConsent.style.display = 'block';
  }

  acceptButton.addEventListener('click', function () {
    localStorage.setItem('cookieConsent', 'true');
    cookieConsent.style.display = 'none';
  });

  rejectButton.addEventListener('click', function () {
    localStorage.setItem('cookieConsent', 'false');
    cookieConsent.style.display = 'none';
  });
});
