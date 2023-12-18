document.addEventListener('DOMContentLoaded', function () {
  let utm = '';

  const queryString = window.location.href.split('?');
  if (queryString.length > 1) {
    utm = queryString.pop();
  }

  console.log('utm:', utm);

  let links = document.getElementsByTagName('a');

  for (let i = 0; i < links.length; i++) {
    let originalHref = links[i].getAttribute('href');
    console.log('originalHref:', originalHref);

    if (utm) {
      links[i].setAttribute(
        'href',
        originalHref + (originalHref.includes('?') ? '&' : '?') + utm
      );
    }

    links[i].addEventListener('click', function () {
      console.log('Clicked link with utm:', this.href);
      // window.location = this.href;
    });
  }
});
