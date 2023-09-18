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
  logo: 'IntelliWeigh',
  heroTitle: `Elevate Your Health Journey with Precision<br />at IntelliWeigh Smart Scale Emporium.`,
  heroDescription: `IntelliWeigh offers a cutting-edge range of smart scales and health monitoring solutions to empower your wellness.`,
  featuresMainTitle: 'Discover the IntelliWeigh Advantage',
  featuresMainDescription:
    'Our dedicated team of health experts is committed to enhancing your well-being through intelligent technology.',
  featuresList: `<li class="mb-2">
  <strong>Precision Weight Tracking:</strong> Explore our advanced smart scales for accurate weight monitoring and insights.
</li>
<li class="mb-2">
  <strong>Health Data Insights:</strong> Let us provide you with in-depth health metrics to support your fitness goals.
</li>
<li class="mb-2">
  <strong>Wellness Accessories:</strong> Find the perfect accessories to complement your health and fitness routines.
</li>
<li class="mb-2">
  <strong>Expert Health Guidance:</strong> Learn how to optimize your well-being with personalized advice from our experts.
</li>`,
  featuresListCol1T: `High-Tech Sensors`,
  featuresListCol1D: `IntelliWeigh guarantees state-of-the-art sensors and technology for precise health monitoring.`,
  featuresListCol2T: `Experienced Health Advisors`,
  featuresListCol2D: `Our skilled health advisors are passionate about helping you achieve your wellness goals.`,
  featuresListCol3T: `Personalized Wellness Support`,
  featuresListCol3D: `IntelliWeigh caters to your specific health needs, offering personalized solutions and expert guidance.`,
  caseTitle: `Our Smart Scale Collection`,
  caseTitleDesc: `Explore IntelliWeigh's Innovative Smart Scales`,
  caseTitleDesc1T: `Body Composition Analysis`,
  caseTitleDesc1D: `Discover our smart scales that provide comprehensive body composition insights for a healthier you.`,
  caseTitleDesc2T: `Fitness Tracking`,
  caseTitleDesc2D: `Experience advanced fitness tracking features to monitor your progress and achieve your goals.`,
  caseTitleDesc3T: `Connected Wellness`,
  caseTitleDesc3D: `Find smart scales that seamlessly integrate with your favorite health apps and devices for a holistic approach.`,
  caseTitleDesc4T: `Wellness Accessories`,
  caseTitleDesc4D: `Explore our collection of wellness accessories to enhance your health and fitness journey.`,
  mob1Title: `Elevate Your Health<br />with IntelliWeigh!`,
  mob1Desc: `IntelliWeigh offers a haven for health enthusiasts, where you can take control of your wellness journey with precision.`,
  mob1Desc2: `Join us and let the intelligence and accuracy of our smart scales empower your health.`,
  mob2Title: `Where Health Meets Intelligence<br />Your Wellness, Your Way.`,
  mob2Desc: `At IntelliWeigh, we believe that health should be personalized. Let us help you achieve your unique wellness goals.`,
  mob2Desc2: `Transform your health routines into smart and effective practices with our innovative health solutions.`,
  custTitle: `Customer Success Stories`,
  custDesc: `Hear what our satisfied customers have to say about their IntelliWeigh experiences.`,
  cust1: `I'm always amazed by the accuracy and insights provided by IntelliWeigh's smart scales. They've transformed my health journey.`,
  cust1Name: `Sarah Roberts`,
  cust1Prof: `Fitness Enthusiast`,
  cust2: `IntelliWeigh made tracking my health progress effortless with their intuitive app. It's a game-changer.`,
  cust2Name: `David Johnson`,
  cust2Prof: `Health Enthusiast`,
  cust3: `I love recommending IntelliWeigh's wellness accessories to friends. It's the perfect way to level up their health and fitness.`,
  cust3Name: `Jessica Lee`,
  cust3Prof: `Wellness Advocate`,
  contactTitle: `Ready to Elevate Your Health? Contact IntelliWeigh Today`,
  logo2: `IntelliWeigh`,
  mail: `info@intelliweigh.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © IntelliWeigh. All rights reserved.`,
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
