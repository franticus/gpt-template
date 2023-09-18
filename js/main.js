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
  logo: `ChandelierWorld`,
  heroTitle: `Illuminate Your Life with ChandelierWorld's Elegant Lighting`,
  heroDescription: `ChandelierWorld offers a stunning selection of chandeliers to brighten your home with sophistication and style.`,
  featuresMainTitle: `Discover the ChandelierWorld Experience`,
  featuresMainDescription: `Our team of lighting experts is dedicated to enhancing your living spaces with exquisite chandelier designs.`,
  featuresList: `<li class="mb-2">
  <strong>Elegant Chandelier Selection:</strong> Explore our exquisite range of chandeliers for a touch of luxury in your home.
</li>
<li class="mb-2">
  <strong>Lighting Insights:</strong> Let us provide you with expert lighting advice and insights to create the perfect ambiance.
</li>
<li class="mb-2">
  <strong>Chandelier Accessories:</strong> Find the perfect accessories to complement your lighting fixtures.
</li>
<li class="mb-2">
  <strong>Expert Lighting Guidance:</strong> Learn how to illuminate your spaces with personalized advice from our experts.
</li>`,
  featuresListCol1T: `Exquisite Chandeliers`,
  featuresListCol1D: `ChandelierWorld guarantees exquisite chandelier designs to elevate your home's elegance.`,
  featuresListCol2T: `Experienced Lighting Experts`,
  featuresListCol2D: `Our skilled lighting experts are passionate about creating the perfect ambiance for your home.`,
  featuresListCol3T: `Personalized Lighting Support`,
  featuresListCol3D: `ChandelierWorld caters to your specific lighting needs, offering personalized solutions and expert guidance.`,
  caseTitle: `Our Lighting Collections`,
  caseTitleDesc: `Explore ChandelierWorld's Premium Lighting Fixtures`,
  caseTitleDesc1T: `Crystal Chandeliers`,
  caseTitleDesc1D: `Discover our range of crystal chandeliers for a touch of timeless elegance.`,
  caseTitleDesc2T: `Modern Lighting Designs`,
  caseTitleDesc2D: `Experience modern lighting fixtures designed to enhance your contemporary living spaces.`,
  caseTitleDesc3T: `Vintage Chandeliers`,
  caseTitleDesc3D: `Find vintage chandeliers to add a touch of nostalgia and charm to your home.`,
  mob1Title: `Brighten Your Space<br />with ChandelierWorld!`,
  mob1Desc: `ChandelierWorld offers a haven for lighting enthusiasts, where you can transform your home with exquisite chandelier designs.`,
  mob1Desc2: `Join us and let the beauty and elegance of our chandeliers illuminate your life.`,
  mob2Title: `Where Elegance Meets Illumination<br />Your Home, Your Style.`,
  mob2Desc: `At ChandelierWorld, we believe that every room deserves personalized lighting. Let us help you achieve your unique ambiance goals.`,
  mob2Desc2: `Transform your living spaces into inviting and stylish havens with our top-tier lighting solutions.`,
  custTitle: `Customer Success Stories`,
  custDesc: `Hear what our satisfied customers have to say about their ChandelierWorld lighting experiences.`,
  cust1: `I'm always amazed by the elegance and warmth I get with ChandelierWorld's chandeliers. It's transformed my home.`,
  cust1Name: `Sophia Anderson`,
  cust1Prof: `Interior Design Enthusiast`,
  cust2: `ChandelierWorld made choosing the right lighting effortless. It's a game-changer for any homeowner.`,
  cust2Name: `William Davis`,
  cust2Prof: `Homeowner`,
  cust3: `I love recommending ChandelierWorld's lighting accessories to friends. It's the perfect way to enhance their living spaces.`,
  cust3Name: `Olivia White`,
  cust3Prof: `Lighting Advocate`,
  contactTitle: `Ready to Illuminate Your Life? Contact ChandelierWorld Today`,
  logo2: `ChandelierWorld`,
  mail: `info@chandelierworld.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © ChandelierWorld. All rights reserved.`,
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
