document.addEventListener('DOMContentLoaded', function () {
  const floatingWindow = document.querySelector('.floating-windows-9oV');
  const allowAllCookieButton = document.getElementById('allow-all-cookie-9oV');
  const rejectAllButton = document.getElementById('reject-all-9oV');
  const cookieSettingsButton = document.getElementById(
    'cookie-settings-text-9oV'
  );
  const modal = document.getElementById('modal-9oV');
  const modalClose = document.getElementById('modal-close-9oV');
  const acceptAllCookiesButton = document.getElementById(
    'accept-all-cookies-9oV'
  );
  const switchCheckboxes = document.querySelectorAll('.switch-9oV');

  const allCookiesAccepted = localStorage.getItem('allCookiesAccepted');
  if (allCookiesAccepted === 'true') {
    switchCheckboxes.forEach(function (checkbox) {
      checkbox.checked = true;
    });
  }

  acceptAllCookiesButton.addEventListener('click', function () {
    switchCheckboxes.forEach(function (checkbox) {
      checkbox.checked = true;
    });

    localStorage.setItem('allCookiesAccepted', 'true');
  });

  const isWindowClosed = localStorage.getItem('windowClosed');
  if (isWindowClosed === 'true') {
    floatingWindow.style.display = 'none';
  }
  if (localStorage.getItem('windowClosed') === null) {
    floatingWindow.style.display = 'block';
  }

  acceptAllCookiesButton.addEventListener('click', function () {
    switchCheckboxes.forEach(function (checkbox) {
      checkbox.checked = true;
    });
    modal.style.display = 'none';
    floatingWindow.style.display = 'none';
    localStorage.setItem('windowClosed', 'true');
  });

  modalClose.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  allowAllCookieButton.addEventListener('click', function () {
    floatingWindow.style.display = 'none';
    localStorage.setItem('windowClosed', 'true');
    modal.style.display = 'none';
  });

  rejectAllButton.addEventListener('click', function () {
    floatingWindow.style.display = 'none';
    localStorage.setItem('windowClosed', 'true');
  });

  cookieSettingsButton.addEventListener('click', function () {
    modal.style.display = 'block';
  });

  const accordions = document.querySelectorAll('.accordion-header-9oV');
  accordions.forEach(function (accordion) {
    const body = accordion.nextElementSibling;
    const icon = accordion.querySelector('.accordion-icon-9oV');

    accordion.addEventListener('click', function () {
      accordions.forEach(function (otherAccordion) {
        if (otherAccordion !== accordion) {
          otherAccordion.nextElementSibling.style.display = 'none';
          otherAccordion.querySelector('.accordion-icon-9oV').innerHTML =
            '&#8744;';
        }
      });

      if (body.style.display === 'none' || body.style.display === '') {
        body.style.display = 'block';
        icon.innerHTML = '&#8743;';
      } else {
        body.style.display = 'none';
        icon.innerHTML = '&#8744;';
      }
    });

    if (body.style.display === 'block') {
      icon.innerHTML = '&#8743;';
    } else {
      icon.innerHTML = '&#8744;';
    }
  });

  const saveCurrentSettingsButton = document.getElementById(
    'save-current-settings-9oV'
  );

  saveCurrentSettingsButton.addEventListener('click', function () {
    modal.style.display = 'none';
    localStorage.setItem('windowClosed', 'true');
    floatingWindow.style.display = 'none';
  });

  acceptAllCookiesButton.addEventListener('click', function () {
    modal.style.display = 'none';
  });
});

const floatingBox = document.querySelector(`.floating-windows-box-9oV`);
const cookieText = document.querySelector(`.cookie-text-9oV`);

if (floatingBox) {
  const computedStyle = window.getComputedStyle(floatingBox);
  if (computedStyle.flexDirection === 'row') {
    cookieText.style.width = '80%';
  } else if (computedStyle.flexDirection === 'column') {
    cookieText.style.width = '100%';
  }
}

var domainElement = document.querySelectorAll('#email_list');
var hostname = window.location.hostname;

domainElement.forEach((elem) => {
  elem.innerHTML = `<a href="mailto:info@${hostname}" target="_blank">info@${hostname}</a>`;
});

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
      item.addEventListener("click", () => {
          faqItems.forEach((otherItem) => {
              if (otherItem !== item) {
                  otherItem.querySelector(".faq-toggle").checked = false;
              }
          });
      });
  });
});
