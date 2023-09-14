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
  logo: 'EliteTuxShop',
  heroTitle: `Elevate Your Style<br />with EliteTuxShop Smokings.`,
  heroDescription: `Immerse yourself in the world of exquisite formalwear, where every occasion is a masterpiece of elegance.`,
  featuresMainTitle: 'Discover the Elegance of EliteTuxShop',
  featuresMainDescription:
    "Experience the epitome of sophistication with EliteTuxShop's collection of premium tuxedos and formalwear.",
  featuresList: `<li class="mb-2">
  <strong>Premium Tuxedos:</strong> Elevate your style with our latest tuxedo designs, tailored for connoisseurs of elegance.
</li>
<li class="mb-2">
  <strong>Unique Designs:</strong> Explore a range of stylish formalwear, meticulously crafted to suit your special occasions.
</li>
<li class="mb-2">
  <strong>Impeccable Fit:</strong> Every tuxedo is tailored for a perfect look, ensuring your events are exceptional.
</li>
<li class="mb-2">
  <strong>Customized Elegance:</strong> Personalize your formalwear to match your unique preferences, tailored for your style satisfaction.
</li>`,
  featuresListCol1T: `Elegant Attire Collection<br />for Every Occasion`,
  featuresListCol1D: `Step into the world of formal elegance with EliteTuxShop's latest collection. Enhance your special events with tuxedos that perfectly resonate with your style.`,
  featuresListCol2T: `Exclusive Formalwear Selection<br />Awaits You`,
  featuresListCol2D: `Experience the ultimate formal attire selection with our carefully curated lineup, adding a touch of sophistication to your every event.`,
  featuresListCol3T: `Style Paradise<br />for Every Celebration`,
  featuresListCol3D: `Elevate your style journey with our sleek designs and distinctive formalwear offerings. Let every event embrace the joy of elegance.`,
  caseTitle: `Explore Our Formalwear Creations`,
  caseTitleDesc: `Discover EliteTuxShop's Elegance Revolution`,
  caseTitleDesc1T: `High-End Tuxedos`,
  caseTitleDesc1D: `Indulge in the excellence of our tuxedos, meticulously designed to elevate your special occasions with precision and style.`,
  caseTitleDesc2T: `Formal Attire Selections`,
  caseTitleDesc2D: `Enhance your style universe with our carefully crafted formal attire, infusing a touch of sophistication into every event.`,
  caseTitleDesc3T: `Customized Style Journey`,
  caseTitleDesc3D: `Customize your formalwear experience with EliteTuxShop, ensuring each outfit aligns with your unique style vision and preferences.`,
  caseTitleDesc4T: `Elegance Enhancements`,
  caseTitleDesc4D: `Experience the joy of our sleek formalwear designs, elevating your special moments to new heights.`,
  mob1Title: `Elevate Your Style<br />Experience with EliteTuxShop!`,
  mob1Desc: `Step into the world of exquisite formalwear with EliteTuxShop.`,
  mob1Desc2: `From classic designs to high-end features, EliteTuxShop is redefining the world of elegance. Immerse yourself in a world where every occasion is a masterpiece.`,
  mob2Title: `Where Elegance Meets<br />Sophistication.`,
  mob2Desc: `At EliteTuxShop, formal attire is more than just clothing. It's about enhancing your special events and creating unforgettable moments of style.`,
  mob2Desc2: `Embrace the joy of elegance.`,
  custTitle: `Customer Reviews`,
  custDesc: `Listen to our satisfied patrons and style enthusiasts.`,
  cust1: `EliteTuxShop's formalwear is a game changer. Their collection is unmatched, and they transformed my special occasions into elegant celebrations.`,
  cust1Name: `Natalie Foster`,
  cust1Prof: `Elegance Enthusiast`,
  cust2: `The quality and variety of EliteTuxShop's formal attire are beyond impressive. Every event feels like a stylish masterpiece.`,
  cust2Name: `William Roberts`,
  cust2Prof: `Style Connoisseur`,
  cust3: `From classic designs to high-end features, EliteTuxShop has it all. The epitome of formal elegance.`,
  cust3Name: `Sophie Anderson`,
  cust3Prof: `Event Stylist`,
  contactTitle: `Ready for an Elegance Revolution?<br />Join the EliteTuxShop Journey`,
  logo2: `EliteTuxShop`,
  mail: `contact@elitetuxshop.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © EliteTuxShop. All rights reserved.`,
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
