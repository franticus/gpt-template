document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.navbar-menu-button');
  const menu = document.querySelector('.navbar-menu');

  menuButton.addEventListener('click', function () {
    menu.classList.toggle('show');
  });

  // Close the menu when clicking outside
  document.addEventListener('click', function (event) {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
      menu.classList.remove('show');
    }
  });
});
