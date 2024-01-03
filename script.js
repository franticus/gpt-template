document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.sdlkfnnsdf');
  const menu = document.querySelector('.sdfbskdfblshdfb');

  menuButton.addEventListener('click', function () {
    menu.classList.toggle('show');

    if (menu.classList.contains('show')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });

  document.addEventListener('click', function (event) {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
      menu.classList.remove('show');

      document.body.style.overflow = 'auto';
    }
  });
});
