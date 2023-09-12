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
  logo: 'VitaVital',
  heroTitle: `VitaVital Nutritional Solutions<br />for Health and Wellness.`,
  heroDescription: `VitaVital offers comprehensive nutritional solutions for individuals
  and businesses.`,
  featuresMainTitle: 'Welcome to VitaVital',
  featuresMainDescription:
    "Elevating your health with VitaVital's premium vitamin solutions.",
  featuresList: `<li class="mb-2">
  <strong>Enhanced Wellness:</strong> Discover a diverse range of
  vitamin plans and supplements, tailored to your health and
  well-being.
</li>
<li class="mb-2">
  <strong>Effortless Health:</strong> Experience the utmost
  convenience as we deliver top-quality vitamins and carefully
  crafted wellness solutions right to your doorstep, saving you
  time and effort.
</li>
<li class="mb-2">
  <strong>Premium Nutrition:</strong> We prioritize quality in
  every product. Our vitamins are meticulously crafted, ensuring
  that each supplement is a testament to reliability and
  effectiveness.
</li>
<li class="mb-2">
  <strong>Personalized Guidance:</strong> Tailor your vitamin
  regimen to your needs. Our intuitive platform allows you to
  customize supplements and preferences, providing a personalized
  health experience.
</li>`,
  featuresListCol1T: `Vital Wellness<br />Solutions`,
  featuresListCol1D: `Elevate your health with VitaVital's premium vitamin
solutions, ensuring your well-being and vitality. Experience
the convenience of staying healthy without compromise.`,
  featuresListCol2T: `Enriching Health<br />Experiences`,
  featuresListCol2D: `Immerse yourself in a world of enriching health experiences as
VitaVital provides you with a curated range of vitamin
supplements and wellness features. Discover the perfect blend
of convenience and well-being, and embark on a journey towards
enhanced health.`,
  featuresListCol3T: `Tailored Nutrition<br />for Every Individual`,
  featuresListCol3D: `Customize your health experience with VitaVital's tailored
vitamin plans designed to match every individual's wellness
preferences. Whether it's daily vitamins, special supplements,
or personalized guidance, our versatile options cater to your
unique health needs.`,
  caseTitle: `Discover Our Product Lineup`,
  caseTitleDesc: `Unveiling VitaVital's Wellness Solutions`,
  caseTitleDesc1T: `Essential Supplements`,
  caseTitleDesc1D: `Boost Your Vitality Naturally`,
  caseTitleDesc2T: `Personalized Wellness`,
  caseTitleDesc2D: `Tailored Solutions for Your Well-Being`,
  caseTitleDesc3T: `Wellness Companion App`,
  caseTitleDesc3D: `App Features for Health Enthusiasts`,
  caseTitleDesc4T: `Tailored Wellness Plans`,
  caseTitleDesc4D: `Custom Solutions for Your Wellness Goals`,
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
];

textArrParam.forEach((item, index) => {
  item.innerHTML = textData[`${textArrKey[index]}`];
});
