document.querySelectorAll('.scroll-link').forEach(link => {
  modal.classList.remove('modal--visible');
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const targetRect = targetElement.getBoundingClientRect();
      const targetOffsetTop = window.pageYOffset + targetRect.top;
      const windowHeight = window.innerHeight;
 
      const scrollTo = Math.max(
        0,
        targetOffsetTop - windowHeight / 2 + targetRect.height / 2
      );

      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
      });
    }
  });
});
