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
  logo: 'FitPulseGym',
  heroTitle: `Transform Your Fitness Journey with Precision<br />at FitPulseGym Equipment Emporium.`,
  heroDescription: `FitPulseGym offers an innovative range of gym equipment and training solutions to supercharge your workouts.`,
  featuresMainTitle: 'Discover the FitPulseGym Advantage',
  featuresMainDescription:
    'Our dedicated team of fitness experts is committed to enhancing your well-being through cutting-edge equipment.',
  featuresList: `<li class="mb-2">
  <strong>Precision Training Gear:</strong> Explore our advanced gym equipment for effective workouts and results.
</li>
<li class="mb-2">
  <strong>Workout Data Insights:</strong> Let us provide you with in-depth training metrics to maximize your fitness goals.
</li>
<li class="mb-2">
  <strong>Fitness Accessories:</strong> Find the perfect accessories to complement your workout routines.
</li>
<li class="mb-2">
  <strong>Expert Fitness Guidance:</strong> Learn how to optimize your fitness journey with personalized advice from our trainers.
</li>`,
  featuresListCol1T: `High-Performance Gear`,
  featuresListCol1D: `FitPulseGym guarantees top-notch gym equipment and technology for effective training.`,
  featuresListCol2T: `Experienced Trainers`,
  featuresListCol2D: `Our skilled fitness trainers are passionate about helping you achieve your fitness goals.`,
  featuresListCol3T: `Personalized Workout Support`,
  featuresListCol3D: `FitPulseGym caters to your specific fitness needs, offering personalized solutions and expert guidance.`,
  caseTitle: `Our Fitness Equipment Collection`,
  caseTitleDesc: `Explore FitPulseGym's Cutting-Edge Fitness Equipment`,
  caseTitleDesc1T: `Strength Training Machines`,
  caseTitleDesc1D: `Discover our range of strength training machines for building muscle and endurance.`,
  caseTitleDesc2T: `Cardiovascular Equipment`,
  caseTitleDesc2D: `Experience advanced cardio equipment to improve your stamina and heart health.`,
  caseTitleDesc3T: `Connected Fitness`,
  caseTitleDesc3D: `Find fitness gear that seamlessly integrates with your favorite fitness apps and devices for a holistic approach.`,
  caseTitleDesc4T: `Workout Accessories`,
  caseTitleDesc4D: `Explore our collection of workout accessories to enhance your training sessions.`,
  mob1Title: `Elevate Your Fitness<br />with FitPulseGym!`,
  mob1Desc: `FitPulseGym offers a haven for fitness enthusiasts, where you can supercharge your fitness journey with precision equipment.`,
  mob1Desc2: `Join us and let the precision and effectiveness of our gym gear take your fitness to the next level.`,
  mob2Title: `Where Fitness Meets Excellence<br />Your Health, Your Way.`,
  mob2Desc: `At FitPulseGym, we believe that fitness should be personalized. Let us help you achieve your unique fitness goals.`,
  mob2Desc2: `Transform your workouts into efficient and effective routines with our cutting-edge fitness solutions.`,
  custTitle: `Customer Success Stories`,
  custDesc: `Hear what our satisfied customers have to say about their FitPulseGym experiences.`,
  cust1: `I'm always amazed by the performance and results achieved with FitPulseGym's fitness equipment. It's transformed my fitness journey.`,
  cust1Name: `Sophie Mitchell`,
  cust1Prof: `Fitness Enthusiast`,
  cust2: `FitPulseGym made tracking my workout progress effortless with their intuitive fitness app. It's a game-changer.`,
  cust2Name: `Alex Davis`,
  cust2Prof: `Health Enthusiast`,
  cust3: `I love recommending FitPulseGym's workout accessories to friends. It's the perfect way to enhance their fitness routines.`,
  cust3Name: `Toma Reynolds`,
  cust3Prof: `Fitness Advocate`,
  contactTitle: `Ready to Elevate Your Fitness? Contact FitPulseGym Today`,
  logo2: `FitPulseGym`,
  mail: `info@fitpulsegym.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © FitPulseGym. All rights reserved.`,
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
