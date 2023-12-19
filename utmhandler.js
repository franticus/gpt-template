document.addEventListener('DOMContentLoaded', function () {
  let utm = '';
  let remainingUtm = ''; // Оставшиеся utm теги без utm_term

  // Получаем utm, если он существует
  const queryString = window.location.href.split('?');
  if (queryString.length > 1) {
    utm = queryString.pop(); // получаем последнюю часть запроса после "?"

    // Проверяем, есть ли тег utm_term
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

  // Получаем все элементы <a> на странице
  let links = document.getElementsByTagName('a');

  // Проходим по каждой ссылке и добавляем utm, если он существует
  for (let i = 0; i < links.length; i++) {
    let originalHref = links[i].getAttribute('href');
    console.log('originalHref:', originalHref);

    // Проверяем, есть ли utm
    if (utm) {
      if (utm.includes('utm_term=jetx')) {
        links[i].setAttribute('href', `https://black.com?${remainingUtm}`);
      } else {
        // Иначе добавляем utm как обычно
        links[i].setAttribute(
          'href',
          originalHref + (originalHref.includes('?') ? '&' : '?') + utm
        );
      }
    }

    // Добавляем обработчик события для отладочного вывода
    links[i].addEventListener('click', function () {
      console.log('Clicked link with utm:', this.href);
      // Если вы хотите перенаправить пользователя по новому URL, используйте window.location:
      // window.location = this.href;
    });
  }
});
