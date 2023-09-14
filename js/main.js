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
  logo: 'TechWatchMart',
  heroTitle: `Discover the Future<br />of Timekeeping at TechWatchMart.`,
  heroDescription: `Immerse yourself in the world of cutting-edge smartwatches, where each timepiece redefines convenience and style.`,
  featuresMainTitle: 'Embark on a Smartwatch Journey with TechWatchMart',
  featuresMainDescription:
    "Step into a realm of innovation and possibilities with TechWatchMart's collection of state-of-the-art smartwatches.",
  featuresList: `<li class="mb-2">
  <strong>Next-Gen Timepieces:</strong> Elevate your wrist game with our latest smartwatches, designed for tech-savvy individuals.
</li>
<li class="mb-2">
  <strong>Exclusive Designs:</strong> Explore a universe of stylish smartwatches, meticulously crafted to suit your fashion-forward lifestyle.
</li>
<li class="mb-2">
  <strong>Intuitive Features:</strong> Every smartwatch is a gateway to convenience, ensuring your everyday experiences are exceptional.
</li>
<li class="mb-2">
  <strong>Personalized Assistance:</strong> Customize your smartwatch experience to match your unique needs, tailored for your digital satisfaction.
</li>`,
  featuresListCol1T: `Top-Tier Smartwatch Collection<br />for Every Tech Enthusiast`,
  featuresListCol1D: `Dive into the world of cutting-edge technology with TechWatchMart's latest collection. Enhance your digital journey with timepieces that perfectly resonate with your lifestyle.`,
  featuresListCol2T: `Exclusive Tech Universe<br />Awaits You`,
  featuresListCol2D: `Experience the ultimate tech selection with our carefully curated smartwatches, adding a touch of sophistication to your everyday life.`,
  featuresListCol3T: `Digital Oasis<br />for Every Adventure`,
  featuresListCol3D: `Elevate your tech journey with our sleek designs and distinctive smartwatch offerings. Let your wrist embrace the magic of innovation.`,
  caseTitle: `Explore Our Smartwatch Creations`,
  caseTitleDesc: `Discover TechWatchMart's Digital Revolution`,
  caseTitleDesc1T: `Cutting-Edge Timepieces`,
  caseTitleDesc1D: `Indulge in the excellence of our smartwatches, meticulously designed to elevate your digital adventure with precision and style.`,
  caseTitleDesc2T: `Smartwatch Selections`,
  caseTitleDesc2D: `Enhance your tech universe with our carefully crafted timepieces, infusing a touch of sophistication into every digital encounter.`,
  caseTitleDesc3T: `Customized Tech Journey`,
  caseTitleDesc3D: `Customize your smartwatch experience with TechWatchMart, ensuring each timepiece aligns with your unique tech vision and preferences.`,
  caseTitleDesc4T: `Digital Comfort Enhancements`,
  caseTitleDesc4D: `Experience the joy of our sleek smartwatch designs, elevating your digital moments to new heights.`,
  mob1Title: `Elevate Your Digital<br />Experience with TechWatchMart!`,
  mob1Desc: `Step into the future of timekeeping with our state-of-the-art smartwatches.`,
  mob1Desc2: `From classic designs to innovative tech features, TechWatchMart is redefining the world of smartwatches. Immerse yourself in a digital world where every moment is convenient and stylish.`,
  mob2Title: `Where Technology Meets<br />Fashion.`,
  mob2Desc: `At TechWatchMart, smartwatches are more than just gadgets. They're about enhancing your digital journey and creating unforgettable tech moments.`,
  mob2Desc2: `Embrace the magic of tech innovation.`,
  custTitle: `Customer Reviews`,
  custDesc: `Listen to our satisfied tech enthusiasts and digital connoisseurs.`,
  cust1: `TechWatchMart's smartwatches are a game changer. Their collection is unmatched, and they transformed my digital experiences into delightful adventures.`,
  cust1Name: `Emily Miller`,
  cust1Prof: `Tech Enthusiast`,
  cust2: `The quality and variety of TechWatchMart's smartwatches are beyond impressive. Every interaction feels like a digital masterpiece.`,
  cust2Name: `Daniel White`,
  cust2Prof: `Digital Connoisseur`,
  cust3: `From classic designs to tech innovations, TechWatchMart has it all. The epitome of digital excellence.`,
  cust3Name: `Michaela Robinson`,
  cust3Prof: `Tech Explorer`,
  contactTitle: `Ready for a Tech Revolution?<br />Join the TechWatchMart Journey`,
  logo2: `TechWatchMart`,
  mail: `contact@techwatchmart.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © TechWatchMart. All rights reserved.`,
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
