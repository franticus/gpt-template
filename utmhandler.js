// const utmTargetValue = 'все игры';  --- сюда вставляется значение utm по которому будет срабатывать скрипт.

// const targetLink = 'https://sitenew2023.com/3tgV26T9' --- сюда вставляется ссылка без utm меток, на которую заменятся все ссылки на сайте при совпадении целевого utm. и к ней добавятся все остальные utm теги (https:// + targetLink +?utm);

document.addEventListener('DOMContentLoaded', function () {
  let utm = '';
  let remainingUtm = '';

  // --- сюда вставляются необходимые значения.----------

  const utmTargetValue = 'все игры';
  const targetLink = 'https://sitenew2023.com/3tgV26T9';

  // ----------------------------------------------------

  function getUtmTermValue() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('utm_term');
  }

  const utmTermValue = encodeURIComponent(getUtmTermValue());
  console.log('utmTermValue:', utmTermValue);

  const partiallyDecodedString = decodeURIComponent(utmTermValue);
  const fullyDecodedString = decodeURIComponent(partiallyDecodedString);

  console.log('isUtmTargetValue:', fullyDecodedString);

  const isUtmTargetTrue = utmTargetValue === fullyDecodedString;
  console.log('isUtmTargetTrue:', isUtmTargetTrue);

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

    if (utm) {
      if (isUtmTargetTrue) {
        links[i].setAttribute('href', `${targetLink}?${remainingUtm}`);
      } else {
        links[i].setAttribute(
          'href',
          originalHref + (originalHref.includes('?') ? '&' : '?') + utm
        );
      }
    }
  }
});
