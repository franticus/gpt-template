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
  logo: 'RampMasterPro',
  heroTitle: `Elevate Your Ride<br />with RampMasterPro Skateboards.`,
  heroDescription: `Immerse yourself in the world of extreme skateboarding, where every trick is a masterpiece of skill.`,
  featuresMainTitle: 'Discover the Thrill of RampMasterPro',
  featuresMainDescription:
    "Experience the epitome of skateboarding with RampMasterPro's collection of premium skateboards and gear.",
  featuresList: `<li class="mb-2">
  <strong>Premium Skateboards:</strong> Elevate your ride with our latest skateboard designs, tailored for skateboarding enthusiasts.
</li>
<li class="mb-2">
  <strong>Unique Designs:</strong> Explore a range of stylish skate gear, meticulously crafted to suit your skateboarding style.
</li>
<li class="mb-2">
  <strong>Pro-Level Performance:</strong> Every skateboard is built for ultimate performance, ensuring your tricks are exceptional.
</li>
<li class="mb-2">
  <strong>Customized Gear:</strong> Personalize your skateboarding experience to match your unique preferences, tailored for your skateboarding satisfaction.
</li>`,
  featuresListCol1T: `Skateboard Collection<br />for Every Rider`,
  featuresListCol1D: `Step into the world of skateboarding excellence with RampMasterPro's latest collection. Enhance your tricks with skateboards that perfectly resonate with your style.`,
  featuresListCol2T: `Exclusive Skate Gear Selection<br />Awaits You`,
  featuresListCol2D: `Experience the ultimate skate gear selection with our carefully curated lineup, adding a touch of style to your every ride.`,
  featuresListCol3T: `Skateboard Paradise<br />for Every Rider`,
  featuresListCol3D: `Elevate your skateboarding journey with our sleek designs and distinctive gear offerings. Let every trick embrace the joy of skateboarding.`,
  caseTitle: `Explore Our Skateboarding Creations`,
  caseTitleDesc: `Discover RampMasterPro's Skateboarding Revolution`,
  caseTitleDesc1T: `Pro-Level Skateboards`,
  caseTitleDesc1D: `Indulge in the excellence of our skateboards, meticulously designed to elevate your skateboarding with precision and style.`,
  caseTitleDesc2T: `Skate Gear Selections`,
  caseTitleDesc2D: `Enhance your skateboarding universe with our carefully crafted gear, infusing a touch of style into every ride.`,
  caseTitleDesc3T: `Customized Skate Experience`,
  caseTitleDesc3D: `Customize your skateboarding experience with RampMasterPro, ensuring each ride aligns with your unique style vision and preferences.`,
  caseTitleDesc4T: `Extreme Skateboarding Thrills`,
  caseTitleDesc4D: `Experience the joy of our sleek skateboard designs, elevating your tricks to new heights.`,
  mob1Title: `Elevate Your Ride<br />Experience with RampMasterPro!`,
  mob1Desc: `Step into the world of extreme skateboarding with RampMasterPro.`,
  mob1Desc2: `From classic designs to high-performance gear, RampMasterPro is redefining the world of skateboarding. Immerse yourself in a world where every trick is a masterpiece.`,
  mob2Title: `Where Style Meets<br />Skateboarding Thrills.`,
  mob2Desc: `At RampMasterPro, skateboarding is more than just a sport. It's about enhancing your tricks and creating unforgettable moments of skill.`,
  mob2Desc2: `Embrace the thrill of skateboarding.`,
  custTitle: `Rider Reviews`,
  custDesc: `Listen to our satisfied riders and skateboarding enthusiasts.`,
  cust1: `RampMasterPro's skateboards are a game changer. Their collection is unmatched, and they transformed my skateboarding into extreme fun.`,
  cust1Name: `Samantha Turner`,
  cust1Prof: `Skateboard Enthusiast`,
  cust2: `The quality and variety of RampMasterPro's skate gear are beyond impressive. Every trick feels like a stylish masterpiece.`,
  cust2Name: `Jake Smith`,
  cust2Prof: `Skateboarding Pro`,
  cust3: `From classic designs to high-performance gear, RampMasterPro has it all. The epitome of skateboarding excellence.`,
  cust3Name: `Alexandra Parker`,
  cust3Prof: `Extreme Sports Enthusiast`,
  contactTitle: `Ready for a Skateboarding Revolution?<br />Join the RampMasterPro Journey`,
  logo2: `RampMasterPro`,
  mail: `contact@rampmasterpro.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © RampMasterPro. All rights reserved.`,
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
