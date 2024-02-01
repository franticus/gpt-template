document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.sdkuhkbd');
  const menu = document.querySelector('.nncbcvx');
  menuButton.addEventListener('click', function () {
    menu.classList.toggle('show');

    if (menu.classList.contains('show')) {
      document.body.style.overflow = 'hidden';
      overlay.style.display = 'block';
    } else {
      document.body.style.overflow = 'auto';
      overlay.style.display = 'none';
    }
  });

  document.addEventListener('click', function (event) {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
      menu.classList.remove('show');
      overlay.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});
