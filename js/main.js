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
  mob1Title: `Elevate Your Wellness<br />Experience with VitaVital!`,
  mob1Desc: `Enhance your well-being journey with our tailored vitamin
  plans.`,
  mob1Desc2: `With a dedication that goes beyond the ordinary, we invite you
  to explore the expertise of our team and embark on a journey
  to discover the boundless potential of optimal health and
  vitality. Whether it's maintaining a vibrant lifestyle,
  boosting your immune system, or achieving your fitness goals,
  our team's commitment shines through every product, promising
  an experience that's beyond the norm.`,
  mob2Title: `Leading Wellness Solutions<br />for Your Lifestyle.`,
  mob2Desc: `Say goodbye to health concerns or compromising on well-being.
  Embrace the future of vitality where every vitamin,
  supplement, and wellness solution reflects our dedication to
  providing individuals and families with reliable and
  exceptional options. As we empower you to make the most of
  your health journey, you can trust that our commitment to
  quality, flexibility, and convenience will redefine the way
  you experience wellness.`,
  mob2Desc2: `Experience the smart way to boost your health and vitality.`,
  custTitle: `Customer Reviews`,
  custDesc: `Explore the testimonials from our satisfied customers.`,
  cust1: `VitaVital's products are truly outstanding, elevating our
  wellness journey. Their dedication is impressive.`,
  cust1Name: `Jason Mitchell`,
  cust2: `VitaVital's impact on our health is remarkable, enhancing
  our vitality. Their innovation is outstanding.`,
  cust2Name: `Jacob Reynolds`,
  cust3: `VitaVital's service is exceptional, revolutionizing our
  well-being choices. Their commitment is commendable.`,
  cust3Name: `Olivia Davis`,
  cotactTitle: `Ready to enhance your wellness journey?<br />Get in touch with
  VitaVital`,
  logo2: `VitaVital`,
  mail: `vitavital@mail.com`,
  phone: `+345-737-3455`,
  logo3: `Copyright © VitaVital. All rights reserved.`,
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

const cotactTitle = document.querySelector('.text-contact-title');

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
  cotactTitle,
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
  'cotactTitle',
  'logo2',
  'mail',
  'phone',
  'logo3',
];

textArrParam.forEach((item, index) => {
  item.innerHTML = textData[`${textArrKey[index]}`];
});
