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
  logo: `AlarmGuardian`,
  heroTitle: `Secure Your Peace of Mind with AlarmGuardian Security Systems`,
  heroDescription: `AlarmGuardian offers state-of-the-art security solutions to protect your home and loved ones.`,
  featuresMainTitle: `Discover the AlarmGuardian Advantage`,
  featuresMainDescription: `Our dedicated team of security experts is committed to safeguarding your property and providing peace of mind.`,
  featuresList: `<li class="mb-2">
  <strong>Advanced Security Systems:</strong> Explore our cutting-edge security systems for enhanced protection.
</li>
<li class="mb-2">
  <strong>Security Insights:</strong> Let us provide you with expert guidance and insights to ensure your safety and security.
</li>
<li class="mb-2">
  <strong>Security Accessories:</strong> Find the perfect accessories to complement your security system.
</li>
<li class="mb-2">
  <strong>Expert Security Guidance:</strong> Learn how to optimize your home security with personalized advice from our experts.
</li>`,
  featuresListCol1T: `High-Tech Security Systems`,
  featuresListCol1D: `AlarmGuardian guarantees cutting-edge security systems for your peace of mind.`,
  featuresListCol2T: `Experienced Security Experts`,
  featuresListCol2D: `Our skilled security experts are passionate about enhancing your safety and security.`,
  featuresListCol3T: `Personalized Security Support`,
  featuresListCol3D: `AlarmGuardian caters to your specific security needs, offering personalized solutions and expert guidance.`,
  caseTitle: `Our Security Solutions`,
  caseTitleDesc: `Explore AlarmGuardian's Premium Security Systems`,
  caseTitleDesc1T: `Home Security Systems`,
  caseTitleDesc1D: `Discover our range of home security systems for ultimate protection.`,
  caseTitleDesc2T: `Business Security Systems`,
  caseTitleDesc2D: `Secure your business with our advanced security systems designed for commercial spaces.`,
  caseTitleDesc3T: `Smart Security Accessories`,
  caseTitleDesc3D: `Explore our collection of security accessories to enhance your overall safety.`,
  mob1Title: `Upgrade Your Security<br />with AlarmGuardian!`,
  mob1Desc: `AlarmGuardian offers a haven for security-conscious individuals, where you can elevate your safety and peace of mind.`,
  mob1Desc2: `Join us and let the quality and performance of our security systems protect what matters most to you.`,
  mob2Title: `Where Safety Meets Excellence<br />Your Protection, Your Way.`,
  mob2Desc: `At AlarmGuardian, we believe that every property deserves personalized security. Let us help you achieve your unique safety goals.`,
  mob2Desc2: `Transform your surroundings into a secure and worry-free environment with our top-tier security solutions.`,
  custTitle: `Customer Success Stories`,
  custDesc: `Hear what our satisfied customers have to say about their AlarmGuardian security experiences.`,
  cust1: `I'm always amazed by the security and peace of mind I get with AlarmGuardian's systems. It's transformed my sense of safety.`,
  cust1Name: `Alexandra Smith`,
  cust1Prof: `Security Enthusiast`,
  cust2: `AlarmGuardian made securing my property effortless. It's a game-changer for any homeowner.`,
  cust2Name: `Michael Johnson`,
  cust2Prof: `Homeowner`,
  cust3: `I love recommending AlarmGuardian's security accessories to friends. It's the perfect way to enhance their peace of mind.`,
  cust3Name: `Ella Brown`,
  cust3Prof: `Security Advocate`,
  contactTitle: `Ready to Secure Your Peace of Mind? Contact AlarmGuardian Today`,
  logo2: `AlarmGuardian`,
  mail: `info@alarmguardian.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © AlarmGuardian. All rights reserved.`,
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
