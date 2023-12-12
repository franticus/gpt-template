document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.testimonial-slider');
  const slides = document.querySelectorAll('.testimonial-slide');
  let currentSlide = 0;

  document.querySelector('.next-button').addEventListener('click', function () {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    updateSlider();
  });

  document.querySelector('.prev-button').addEventListener('click', function () {
    if (currentSlide > 0) {
      currentSlide--;
    } else {
      currentSlide = slides.length - 1;
    }
    updateSlider();
  });

  function updateSlider() {
    const newTransformValue = -currentSlide * 100 + '%';
    slider.style.transform = 'translateX(' + newTransformValue + ')';
  }
});
