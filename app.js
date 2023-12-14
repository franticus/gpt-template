document.addEventListener('DOMContentLoaded', function () {
  var jet = document.getElementById('jet');
  var board = document.getElementById('board');
  var pointsElement = document.getElementById('points');

  var moveLeft = function () {
    var left = parseInt(window.getComputedStyle(jet).getPropertyValue('left'));
    if (left > 0) {
      jet.style.left = left - 10 + 'px';
    }
  };

  var moveRight = function () {
    var left = parseInt(window.getComputedStyle(jet).getPropertyValue('left'));
    if (left <= 460) {
      jet.style.left = left + 10 + 'px';
    }
  };

  var fireBullet = function () {
    var left = parseInt(window.getComputedStyle(jet).getPropertyValue('left'));
    var bullet = document.createElement('div');
    bullet.classList.add('bullets');
    board.appendChild(bullet);

    var movebullet = setInterval(() => {
      var rocks = document.getElementsByClassName('rocks');

      for (var i = 0; i < rocks.length; i++) {
        var rock = rocks[i];
        if (rock != undefined) {
          var rockbound = rock.getBoundingClientRect();
          var bulletbound = bullet.getBoundingClientRect();

          if (
            bulletbound.left >= rockbound.left &&
            bulletbound.right <= rockbound.right &&
            bulletbound.top <= rockbound.top &&
            bulletbound.bottom <= rockbound.bottom
          ) {
            rock.parentElement.removeChild(rock);
            pointsElement.innerHTML = parseInt(pointsElement.innerHTML) + 1;
          }
        }
      }

      var bulletbottom = parseInt(
        window.getComputedStyle(bullet).getPropertyValue('bottom')
      );

      if (bulletbottom >= 500) {
        clearInterval(movebullet);
        bullet.parentElement.removeChild(bullet);
      }

      bullet.style.left = left + 'px';
      bullet.style.bottom = bulletbottom + 3 + 'px';
    });
  };

  // Add event listeners for keyboard events
  window.addEventListener('keydown', function (e) {
    switch (e.key) {
      case 'ArrowLeft':
        moveLeft();
        break;
      case 'ArrowRight':
        moveRight();
        break;
      case 'ArrowUp':
      case ' ': // Space key
        fireBullet();
        break;
      default:
        break;
    }
  });

  // Add event listeners for button clicks
  document.querySelector('.left').addEventListener('click', moveLeft);
  document.querySelector('.right').addEventListener('click', moveRight);
  document.querySelector('.fire').addEventListener('click', fireBullet);

  var generaterocks = setInterval(() => {
    var rock = document.createElement('div');
    rock.classList.add('rocks');
    var rockleft = parseInt(
      window.getComputedStyle(rock).getPropertyValue('left')
    );
    rock.style.left = Math.floor(Math.random() * 450) + 'px';
    board.appendChild(rock);
  }, 1000);

  var moverocks = setInterval(() => {
    var rocks = document.getElementsByClassName('rocks');

    if (rocks != undefined) {
      for (var i = 0; i < rocks.length; i++) {
        var rock = rocks[i];
        var rocktop = parseInt(
          window.getComputedStyle(rock).getPropertyValue('top')
        );

        if (rocktop >= 475) {
          alert('Game Over');
          clearInterval(moverocks);
          window.location.reload();
        }

        rock.style.top = rocktop + 25 + 'px';
      }
    }
  }, 450);
});
