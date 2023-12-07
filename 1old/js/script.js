const cookieBanner = document.getElementById('cookieBanner') || 0;

if (!!cookieBanner) {
  if (
    localStorage.getItem('cookieConsent') !== 'accepted' &&
    localStorage.getItem('cookieConsent') !== 'rejected'
  ) {
    document.getElementById('cookieBanner').style.display = 'block';
  }

  document
    .getElementById('acceptCookies')
    .addEventListener('click', function () {
      localStorage.setItem('cookieConsent', 'accepted');
      document.getElementById('cookieBanner').style.display = 'none';
    });

  document
    .getElementById('rejectCookies')
    .addEventListener('click', function () {
      localStorage.setItem('cookieConsent', 'rejected');
      document.getElementById('cookieBanner').style.display = 'none';
    });
}
