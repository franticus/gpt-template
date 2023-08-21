$(document).ready(function () {
  if ($('.headBox .row').hasClass('flex-column')) {
    $('.logtip--box').css('justify-content', 'center');
    $('.headBox h3').css('text-align', 'center');
  }

  let myHeightStyle = $('.about-us-img').prop('naturalHeight');
  let myWidthStyle = $('.about-us-img').prop('naturalWidth');

  if (myHeightStyle == myWidthStyle) {
    if (myWidthStyle > 600) {
      $('.about-us-img').css({ width: '50%' });
    }
  }
  if (myHeightStyle > myWidthStyle) {
    if (myHeightStyle < 2000 && myHeightStyle > 700) {
      $('.about-us-img').css({ width: '25%' });
    }
    if (myHeightStyle < 700 && myHeightStyle > 500) {
      $('.about-us-img"').css({ width: '50%' });
    }
  }
  if (myHeightStyle < myWidthStyle) {
    if (myWidthStyle < 600) {
      $('.about-us-img').css({ width: '500px' });
    }
  }
});

const hashLinks = document.querySelectorAll('a[href^="#"]');

hashLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const targetId = this.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Длительность анимации в миллисекундах

      let start = null;
      window.requestAnimationFrame(step);

      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(
          0,
          easeInOutCubic(progress, startPosition, distance, duration)
        );
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      }
    }
  });
});

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}
