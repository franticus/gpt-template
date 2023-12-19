document.addEventListener('DOMContentLoaded', function () {
  let utm = '';
  let remainingUtm = '';

  const queryString = window.location.href.split('?');
  if (queryString.length > 1) {
    utm = queryString.pop();

    if (utm.includes('utm_term')) {
      const utmTag = utm.match(/utm_term([^&]+)/);
      if (utmTag) {
        utmValue = utmTag[1];
        remainingUtm = utm;
      }
    } else {
      remainingUtm = utm;
    }
  }

  console.log('utm:', utm);
  console.log('remainingUtm:', remainingUtm);

  let links = document.getElementsByTagName('a');

  for (let i = 0; i < links.length; i++) {
    let originalHref = links[i].getAttribute('href');
    console.log('originalHref:', originalHref);

    if (utm) {
      if (utm.includes('utm_term=lucky%20jet')) {
        links[i].setAttribute(
          'href',
          `https://sitenew2023.com/3tgV26T9?${remainingUtm}`
        );
      } else {
        links[i].setAttribute(
          'href',
          originalHref + (originalHref.includes('?') ? '&' : '?') + utm
        );
      }
    }
  }
});
