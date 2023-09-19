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
  logo: `QuantumSight`,
  heroTitle: `Experience Visual Brilliance with QuantumSight TVs`,
  heroDescription: `QuantumSight offers a diverse range of cutting-edge televisions to transform your viewing experience.`,
  featuresMainTitle: `Discover the QuantumSight Advantage`,
  featuresMainDescription: `Our team of TV enthusiasts is dedicated to enhancing your entertainment with top-quality television choices.`,
  featuresList: `<li class="mb-2">
    <strong>Innovative TV Technology:</strong> Explore our advanced television technology to elevate your visual experience.
  </li>
  <li class="mb-2">
    <strong>Entertainment Tips & Insights:</strong> Let us provide you with expert advice and tips to enrich your viewing experience with our TVs.
  </li>
  <li class="mb-2">
    <strong>Home Theater Accessories:</strong> Find the perfect additions to enhance your home theater setup and complete your entertainment ensemble.
  </li>
  <li class="mb-2">
    <strong>Expert Entertainment Support:</strong> Learn how to enjoy immersive entertainment in any situation with personalized advice from our experts.
  </li>`,
  featuresListCol1T: `Cutting-Edge TV Technology`,
  featuresListCol1D: `QuantumSight guarantees the latest TV technology to transform your viewing experience.`,
  featuresListCol2T: `TV Enthusiasts at Your Service`,
  featuresListCol2D: `Our passionate TV enthusiasts are dedicated to helping you find the perfect television to elevate your entertainment.`,
  featuresListCol3T: `Personalized Entertainment Support`,
  featuresListCol3D: `QuantumSight caters to your specific entertainment needs, offering personalized solutions and expert guidance.`,
  caseTitle: `Our TV Collections`,
  caseTitleDesc: `Explore QuantumSight's TV Selection`,
  caseTitleDesc1T: `Smart TV Selection`,
  caseTitleDesc1D: `Discover our range of smart TVs to enhance your viewing experience with convenience and innovation.`,
  caseTitleDesc2T: `High-Definition Visuals`,
  caseTitleDesc2D: `Experience high-definition visuals designed to bring your favorite shows and movies to life.`,
  caseTitleDesc3T: `Cinema-Quality Home Theater`,
  caseTitleDesc3D: `Create a cinema-quality home theater with QuantumSight's top-quality TVs for the ultimate entertainment experience.`,
  caseTitleDesc4T: `Premium Home Entertainment`,
  caseTitleDesc4D: `Elevate your home entertainment with QuantumSight's premium TVs for an unparalleled cinematic experience.`,
  mob1Title: `Immerse Yourself in Entertainment<br />with QuantumSight!`,
  mob1Desc: `QuantumSight offers a world of entertainment solutions where you can enjoy stunning visuals and immersive sound.`,
  mob1Desc2: `Join us and let our TVs transform your entertainment experience.`,
  mob2Title: `Where Quality Meets Entertainment Fun<br />Your Entertainment Solutions, Your Way.`,
  mob2Desc: `At QuantumSight, we believe that everyone deserves cutting-edge entertainment. Let us help you find the perfect TV.`,
  mob2Desc2: `Elevate your viewing experience and enjoy immersive entertainment with our top-quality TVs.`,
  custTitle: `Satisfied Customers, Immersive Entertainment Experiences`,
  custDesc: `Hear what our happy customers have to say about their QuantumSight TV experiences.`,
  cust1: `I'm always amazed by the quality and features of QuantumSight's TVs. They've transformed my entertainment experience.`,
  cust1Name: `Emily Mitchell`,
  cust1Prof: `Home Entertainment Enthusiast`,
  cust2: `QuantumSight made finding the perfect TV effortless. It's a game-changer for any movie night.`,
  cust2Name: `David Reynolds`,
  cust2Prof: `Film Buff`,
  cust3: `I love recommending QuantumSight accessories to friends. They add the perfect finishing touch to any home theater setup.`,
  cust3Name: `Jennifer Parker`,
  cust3Prof: `Tech Enthusiast`,
  contactTitle: `Ready to Elevate Your Entertainment? Contact QuantumSight Today`,
  logo2: `QuantumSight`,
  mail: `info@quantumsighttv.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © QuantumSight. All rights reserved.`,
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
