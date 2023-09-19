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

const textData = {
  logo: `SilkenSecret`,
  heroTitle: `Indulge in Elegance with SilkenSecret Lingerie`,
  heroDescription: `SilkenSecret offers a captivating range of exquisite lingerie to elevate your intimate moments.`,
  featuresMainTitle: `Discover the SilkenSecret Difference`,
  featuresMainDescription: `Our team of lingerie enthusiasts is dedicated to enhancing your comfort and style with top-quality lingerie choices.`,
  featuresList: `<li class="mb-2">
    <strong>Luxurious Lingerie Collection:</strong> Explore our opulent lingerie to elevate your look and enrich your intimate experiences.
  </li>
  <li class="mb-2">
    <strong>Intimate Tips & Advice:</strong> Let us provide you with expert guidance and advice to enhance your moments of intimacy with our lingerie.
  </li>
  <li class="mb-2">
    <strong>Accessories for Sensuality:</strong> Find the perfect additions to enhance your intimate moments and complete your lingerie ensemble.
  </li>
  <li class="mb-2">
    <strong>Expert Intimacy Support:</strong> Learn how to create special moments with personalized advice from our experts.
  </li>`,
  featuresListCol1T: `Opulent Lingerie Collection`,
  featuresListCol1D: `SilkenSecret guarantees a wide variety of luxurious lingerie to suit your style and enhance your intimate moments.`,
  featuresListCol2T: `Lingerie Enthusiasts at Your Service`,
  featuresListCol2D: `Our passionate lingerie enthusiasts are dedicated to helping you find the perfect lingerie to elevate your comfort and style.`,
  featuresListCol3T: `Personalized Intimacy Support`,
  featuresListCol3D: `SilkenSecret caters to your specific intimate needs, offering personalized solutions and expert guidance.`,
  caseTitle: `Our Lingerie Collections`,
  caseTitleDesc: `Explore SilkenSecret's Lingerie Selection`,
  caseTitleDesc1T: `Sensual Lace Collection`,
  caseTitleDesc1D: `Discover our range of sensual lace lingerie to enhance your intimate moments with elegance and allure.`,
  caseTitleDesc2T: `Silk and Satin Elegance`,
  caseTitleDesc2D: `Experience the luxurious feel of silk and satin lingerie designed to make your moments of intimacy truly special.`,
  caseTitleDesc3T: `Seductive Accessories`,
  caseTitleDesc3D: `Find seductive accessories that add the perfect finishing touch to your lingerie ensemble and create memorable moments.`,
  caseTitleDesc4T: `Enhance Your Lingerie Experience`,
  caseTitleDesc4D: `Discover accessories that elevate your lingerie ensemble and make your intimate moments even more memorable.`,
  mob1Title: `Elevate Your Intimate Moments<br />with SilkenSecret!`,
  mob1Desc: `SilkenSecret offers a world of sensuality where you can indulge in elegance and create unforgettable intimate experiences.`,
  mob1Desc2: `Join us and let our lingerie enhance your moments of intimacy and elevate your style.`,
  mob2Title: `Where Comfort Meets Sensuality<br />Your Intimate Solutions, Your Way.`,
  mob2Desc: `At SilkenSecret, we believe that everyone deserves luxurious and comfortable lingerie. Let us help you find the perfect pieces.`,
  mob2Desc2: `Elevate your comfort and style during intimate moments with our top-quality lingerie.`,
  custTitle: `Satisfied Customers, Memorable Intimate Moments`,
  custDesc: `Hear what our happy customers have to say about their SilkenSecret lingerie experiences.`,
  cust1: `I'm always amazed by the comfort and elegance of SilkenSecret's lingerie. They've made my intimate moments truly special.`,
  cust1Name: `Sophia Turner`,
  cust1Prof: `Lingerie Lover`,
  cust2: `SilkenSecret made finding the perfect lingerie effortless. It's a game-changer for any romantic occasion.`,
  cust2Name: `Daniel Robinson`,
  cust2Prof: `Romantic Explorer`,
  cust3: `I love recommending SilkenSecret accessories to friends. They add the perfect touch of sensuality to any intimate moment.`,
  cust3Name: `Isabella Martinez`,
  cust3Prof: `Sensuality Maven`,
  contactTitle: `Ready to Elevate Your Intimate Moments? Contact SilkenSecret Today`,
  logo2: `SilkenSecret`,
  mail: `info@silkensecret.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © SilkenSecret. All rights reserved.`,
};

const logo = document.querySelector('.text-logo');
const heroTitle = document.querySelector('.text-hero-title');
const heroDescription = document.querySelector('.text-hero-description');
const featuresMainTitle = document.querySelector('.text-features-main-title');
const featuresMainDescription = document.querySelector(
  '.text-features-main-description'
);
const featuresList = document.querySelector('.text-features-list');

const featuresListCol1T = document.querySelector('.text-features-col1-title');
const featuresListCol1D = document.querySelector('.text-features-col1-desc');
const featuresListCol2T = document.querySelector('.text-features-col2-title');
const featuresListCol2D = document.querySelector('.text-features-col2-desc');
const featuresListCol3T = document.querySelector('.text-features-col3-title');
const featuresListCol3D = document.querySelector('.text-features-col3-desc');

const caseTitle = document.querySelector('.text-case-title');
const caseTitleDesc = document.querySelector('.text-case-title-desc');
const caseTitleDesc1T = document.querySelector('.text-card-1-title');
const caseTitleDesc1D = document.querySelector('.text-card-1-desc');
const caseTitleDesc2T = document.querySelector('.text-card-2-title');
const caseTitleDesc2D = document.querySelector('.text-card-2-desc');
const caseTitleDesc3T = document.querySelector('.text-card-3-title');
const caseTitleDesc3D = document.querySelector('.text-card-3-desc');
const caseTitleDesc4T = document.querySelector('.text-card-4-title');
const caseTitleDesc4D = document.querySelector('.text-card-4-desc');

const mob1Title = document.querySelector('.text-mob-1-title');
const mob1Desc = document.querySelector('.text-mob-1-desc');
const mob1Desc2 = document.querySelector('.text-mob-1-desc-2');
const mob2Title = document.querySelector('.text-mob-2-title');
const mob2Desc = document.querySelector('.text-mob-2-desc');
const mob2Desc2 = document.querySelector('.text-mob-2-desc-2');

const custTitle = document.querySelector('.text-cust-title');
const custDesc = document.querySelector('.text-cust-desc');
const cust1 = document.querySelector('.text-cust-1');
const cust1Name = document.querySelector('.text-cust-1-name');
const cust2 = document.querySelector('.text-cust-2');
const cust2Name = document.querySelector('.text-cust-2-name');
const cust3 = document.querySelector('.text-cust-3');
const cust3Name = document.querySelector('.text-cust-3-name');

const contactTitle = document.querySelector('.text-contact-title');

const logo2 = document.querySelector('.text-logo-2');
const mail = document.querySelector('.text-mail');
const phone = document.querySelector('.text-phone');
const logo3 = document.querySelector('.text-logo-3');

const textArrParam = [
  logo,
  heroTitle,
  heroDescription,
  featuresMainTitle,
  featuresMainDescription,
  featuresList,
  featuresListCol1T,
  featuresListCol1D,
  featuresListCol2T,
  featuresListCol2D,
  featuresListCol3T,
  featuresListCol3D,
  caseTitle,
  caseTitleDesc,
  caseTitleDesc1T,
  caseTitleDesc1D,
  caseTitleDesc2T,
  caseTitleDesc2D,
  caseTitleDesc3T,
  caseTitleDesc3D,
  caseTitleDesc4T,
  caseTitleDesc4D,
  mob1Title,
  mob1Desc,
  mob1Desc2,
  mob2Title,
  mob2Desc,
  mob2Desc2,
  custTitle,
  custDesc,
  cust1,
  cust1Name,
  cust2,
  cust2Name,
  cust3,
  cust3Name,
  contactTitle,
  logo2,
  mail,
  phone,
  logo3,
];
const textArrKey = [
  'logo',
  'heroTitle',
  'heroDescription',
  'featuresMainTitle',
  'featuresMainDescription',
  'featuresList',
  'featuresListCol1T',
  'featuresListCol1D',
  'featuresListCol2T',
  'featuresListCol2D',
  'featuresListCol3T',
  'featuresListCol3D',
  'caseTitle',
  'caseTitleDesc',
  'caseTitleDesc1T',
  'caseTitleDesc1D',
  'caseTitleDesc2T',
  'caseTitleDesc2D',
  'caseTitleDesc3T',
  'caseTitleDesc3D',
  'caseTitleDesc4T',
  'caseTitleDesc4D',
  'mob1Title',
  'mob1Desc',
  'mob1Desc2',
  'mob2Title',
  'mob2Desc',
  'mob2Desc2',
  'custTitle',
  'custDesc',
  'cust1',
  'cust1Name',
  'cust2',
  'cust2Name',
  'cust3',
  'cust3Name',
  'contactTitle',
  'logo2',
  'mail',
  'phone',
  'logo3',
];

textArrParam.forEach((item, index) => {
  item.innerHTML = textData[`${textArrKey[index]}`];
});
