var currentDomain = window.location.hostname;

function replaceTextContent(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    node.nodeValue = node.nodeValue.replace(/ambientia\.com/g, currentDomain);
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    for (var i = 0; i < node.childNodes.length; i++) {
      replaceTextContent(node.childNodes[i]);
    }
  }
}

replaceTextContent(document.body);

const cookieBanner = document.getElementById('cookieBanner') || 0;

if (!!cookieBanner) {
  if (
    localStorage.getItem('cookieConsent') !== 'accepted' &&
    localStorage.getItem('cookieConsent') !== 'rejected'
  ) {
    document.getElementById('cookieBanner').style.display = 'block';
  }

  document
    .getElementById('acceptCookies')
    .addEventListener('click', function () {
      localStorage.setItem('cookieConsent', 'accepted');
      document.getElementById('cookieBanner').style.display = 'none';
    });

  document
    .getElementById('rejectCookies')
    .addEventListener('click', function () {
      localStorage.setItem('cookieConsent', 'rejected');
      document.getElementById('cookieBanner').style.display = 'none';
    });
}
