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
  logo: `FastNet`,
  heroTitle: `Experience Blazing Speed with FastNet Internet`,
  heroDescription: `FastNet offers lightning-fast internet connections to supercharge your online experience.`,
  featuresMainTitle: `Discover the FastNet Advantage`,
  featuresMainDescription: `Our team of tech enthusiasts is committed to delivering top-notch internet services that redefine your online world.`,
  featuresList: `<li class="mb-2">
    <strong>High-Speed Internet:</strong> Enjoy blazing-fast internet that keeps you connected without lag or interruptions.
  </li>
  <li class="mb-2">
    <strong>Technical Support & Solutions:</strong> Let us provide you with expert technical support and solutions to enhance your online experience.
  </li>
  <li class="mb-2">
    <strong>Enhanced Connectivity:</strong> Find the perfect internet plan to suit your needs and keep you connected 24/7.
  </li>
  <li class="mb-2">
    <strong>Customer-Centric Approach:</strong> Experience customer-centric services with personalized solutions and expert guidance.
  </li>`,
  featuresListCol1T: `High-Speed Internet`,
  featuresListCol1D: `FastNet guarantees lightning-fast internet to keep you connected without interruption.`,
  featuresListCol2T: `Technical Support Experts`,
  featuresListCol2D: `Our passionate tech experts are dedicated to solving your internet issues and enhancing your online experience.`,
  featuresListCol3T: `Tailored Internet Plans`,
  featuresListCol3D: `FastNet offers internet plans tailored to your needs, ensuring 24/7 connectivity.`,
  caseTitle: `Our Internet Plans`,
  caseTitleDesc: `Explore FastNet's Internet Services`,
  caseTitleDesc1T: `Fiber Optic Internet`,
  caseTitleDesc1D: `Experience the speed of fiber optic internet with FastNet's high-performance connectivity.`,
  caseTitleDesc2T: `Wireless Broadband`,
  caseTitleDesc2D: `Stay connected on the go with FastNet's reliable wireless broadband services.`,
  caseTitleDesc3T: `Home Network Solutions`,
  caseTitleDesc3D: `Discover our home network solutions to optimize your online experience and connectivity.`,
  caseTitleDesc4T: `Smart Home Connectivity`,
  caseTitleDesc4D: `Explore our smart home connectivity solutions to enhance your digital lifestyle and keep every device connected seamlessly.`,
  mob1Title: `Surf the Web at Lightning Speed<br />with FastNet!`,
  mob1Desc: `FastNet offers a world of high-speed internet where you can browse, stream, and game without slowdowns.`,
  mob1Desc2: `Join us and let FastNet redefine your online world with super-fast internet.`,
  mob2Title: `Where Connectivity Meets Convenience<br />Your Internet Solutions, Your Way.`,
  mob2Desc: `At FastNet, we believe that everyone deserves lightning-fast internet. Let us help you choose the perfect plan.`,
  mob2Desc2: `Experience uninterrupted connectivity with FastNet's top-quality internet services.`,
  custTitle: `Satisfied Customers, Streamlined Internet Experience`,
  custDesc: `Hear what our happy customers have to say about their FastNet internet experiences.`,
  cust1: `I'm always amazed by the speed and reliability of FastNet's internet. They've transformed my online experience.`,
  cust1Name: `Emily Smith`,
  cust1Prof: `Tech Enthusiast`,
  cust2: `FastNet made finding the perfect internet plan effortless. It's a game-changer for my online activities.`,
  cust2Name: `John Davis`,
  cust2Prof: `Online Gamer`,
  cust3: `I love recommending FastNet to friends. Their internet plans keep us connected seamlessly.`,
  cust3Name: `Alexandra Johnson`,
  cust3Prof: `Digital Nomad`,
  contactTitle: `Ready to Supercharge Your Online Experience? Contact FastNet Today`,
  logo2: `FastNet`,
  mail: `info@fastnet.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © FastNet. All rights reserved.`,
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
