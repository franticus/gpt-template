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
  logo: 'BlossomBoutique',
  heroTitle: `Discover the Beauty of Nature<br />at BlossomBoutique Flower Shop.`,
  heroDescription: `BlossomBoutique offers a stunning collection of flowers and floral arrangements to brighten your day.`,
  featuresMainTitle: 'Experience What BlossomBoutique Offers',
  featuresMainDescription:
    'Our dedicated team of florists is committed to bringing the beauty of nature into your life.',
  featuresList: `<li class="mb-2">
  <strong>Exquisite Flower Selection:</strong> Explore our wide range of flowers, from classic roses to unique and exotic blooms.
</li>
<li class="mb-2">
  <strong>Custom Floral Arrangements:</strong> Let us create a personalized floral masterpiece for your special occasions.
</li>
<li class="mb-2">
  <strong>Floral Gifts & Decor:</strong> Find the perfect floral gifts and decorations to add a touch of elegance to any event.
</li>
<li class="mb-2">
  <strong>Expert Floral Care Tips:</strong> Learn how to care for your flowers to keep them fresh and vibrant for longer.
</li>`,
  featuresListCol1T: `Fresh Blooms Daily`,
  featuresListCol1D: `BlossomBoutique ensures a daily supply of fresh and vibrant flowers for our customers.`,
  featuresListCol2T: `Talented Florists`,
  featuresListCol2D: `Our skilled florists are passionate about creating stunning floral arrangements for every occasion.`,
  featuresListCol3T: `Personalized Service`,
  featuresListCol3D: `BlossomBoutique caters to your specific needs, offering personalized floral solutions and expert advice.`,
  caseTitle: `Our Floral Selection`,
  caseTitleDesc: `Explore BlossomBoutique's Diverse Floral Offerings`,
  caseTitleDesc1T: `Classic Roses`,
  caseTitleDesc1D: `Discover the timeless beauty of classic roses in various colors and arrangements.`,
  caseTitleDesc2T: `Exotic Blooms`,
  caseTitleDesc2D: `Experience the allure of exotic flowers from around the world, carefully curated for your enjoyment.`,
  caseTitleDesc3T: `Special Occasion Flowers`,
  caseTitleDesc3D: `Find the perfect flowers to celebrate life's special moments with style and grace.`,
  caseTitleDesc4T: `Floral Decor & Gifts`,
  caseTitleDesc4D: `Explore our collection of floral decorations and thoughtful gift options that make any occasion memorable.`,
  mob1Title: `Experience Nature's Beauty<br />at BlossomBoutique!`,
  mob1Desc: `BlossomBoutique offers a haven for flower enthusiasts, where you can immerse yourself in the beauty of nature.`,
  mob1Desc2: `Join us and let the fragrance and colors of our flowers brighten your day.`,
  mob2Title: `Where Flowers Speak<br />the Language of Love.`,
  mob2Desc: `At BlossomBoutique, we believe that flowers convey emotions and sentiments. Let us help you express your feelings.`,
  mob2Desc2: `Transform your moments into floral memories with our exquisite selections.`,
  custTitle: `Customer Testimonials`,
  custDesc: `Hear what our satisfied customers have to say about BlossomBoutique.`,
  cust1: `I'm always amazed by the freshness and beauty of the flowers at BlossomBoutique. Their arrangements are a work of art.`,
  cust1Name: `Linda Roberts`,
  cust1Prof: `Flower Enthusiast`,
  cust2: `BlossomBoutique made my wedding day truly special with their stunning floral arrangements. It was a dream come true.`,
  cust2Name: `David Johnson`,
  cust2Prof: `Happy Groom`,
  cust3: `I love sending BlossomBoutique's floral gifts to my loved ones. It's the perfect way to brighten someone's day.`,
  cust3Name: `Sophia Miller`,
  cust3Prof: `Thoughtful Sender`,
  contactTitle: `Ready to Embrace the Beauty of Blooms? Contact BlossomBoutique Today`,
  logo2: `BlossomBoutique`,
  mail: `info@blossomboutique.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © BlossomBoutique. All rights reserved.`,
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
