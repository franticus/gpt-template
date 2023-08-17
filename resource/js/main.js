const checkCookiesMss = () => {
  const cookieDate = localStorage.getItem('cookie-1NX8VIWQd--cookieDate');
  const cookieNotification = document.getElementById('cookie-1NX8VIWQd');
  const cookieBtn = cookieNotification.querySelector('.cookie_accept');

  if (!cookieDate || +cookieDate + 31536000000 < Date.now()) {
    cookieNotification.classList.add('show');
  }

  cookieBtn.addEventListener('click', function () {
    localStorage.setItem('cookie-1NX8VIWQd--cookieDate', Date.now());
    cookieNotification.classList.remove('show');
  });
}
checkCookiesMss();
