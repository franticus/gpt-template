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
  logo: `PlantPowerPro`,
  heroTitle: `Nurture Your Garden's Potential with PlantPowerPro's Premium Fertilizers`,
  heroDescription: `PlantPowerPro offers a transformative range of fertilizers to cultivate your garden's beauty and vitality.`,
  featuresMainTitle: `Discover the PlantPowerPro Difference`,
  featuresMainDescription: `Our team of gardening experts is dedicated to enhancing your garden's growth with top-quality fertilizer choices.`,
  featuresList: `<li class="mb-2">
  <strong>Diverse Fertilizer Selection:</strong> Explore our wide range of fertilizers to nourish your plants and maximize their potential.
</li>
<li class="mb-2">
  <strong>Gardening Insights:</strong> Let us provide you with expert advice and tips to create a thriving and lush garden.
</li>
<li class="mb-2">
  <strong>Fertilizer Accessories:</strong> Find the perfect additions to optimize your gardening efforts and achieve stunning results.
</li>
<li class="mb-2">
  <strong>Expert Gardening Guidance:</strong> Learn how to cultivate a vibrant garden with personalized advice from our experts.
</li>`,
  featuresListCol1T: `Diverse Fertilizer Collection`,
  featuresListCol1D: `PlantPowerPro guarantees a wide variety of fertilizers to nourish your garden and promote its health and beauty.`,
  featuresListCol2T: `Experienced Gardening Experts`,
  featuresListCol2D: `Our skilled gardening experts are passionate about helping your garden thrive and flourish.`,
  featuresListCol3T: `Personalized Gardening Support`,
  featuresListCol3D: `PlantPowerPro caters to your specific gardening needs, offering personalized solutions and expert guidance.`,
  caseTitle: `Our Fertilizer Collections`,
  caseTitleDesc: `Explore PlantPowerPro's Premium Fertilizer Selection`,
  caseTitleDesc1T: `Organic Plant Nutrients`,
  caseTitleDesc1D: `Discover our range of organic plant nutrients to promote healthy and sustainable gardening.`,
  caseTitleDesc2T: `Specialized Soil Enhancers`,
  caseTitleDesc2D: `Experience soil enhancers designed to optimize your garden's growing conditions and yield.`,
  caseTitleDesc3T: `Blossom Boosters`,
  caseTitleDesc3D: `Find blossom boosters to enhance your flowers' vibrancy and bloom.`,
  mob1Title: `Nurture Your Garden's Potential<br />with PlantPowerPro!`,
  mob1Desc: `PlantPowerPro offers a haven for gardening enthusiasts, where you can cultivate a garden of beauty and vitality.`,
  mob1Desc2: `Join us and let the power of our fertilizers transform your garden into a lush and thriving oasis.`,
  mob2Title: `Where Growth Meets Beauty<br />Your Garden, Your Way.`,
  mob2Desc: `At PlantPowerPro, we believe that every garden deserves personalized care. Let us help you achieve a stunning and vibrant garden.`,
  mob2Desc2: `Transform your garden into a haven of lush greenery and flourishing blooms with our top-tier fertilizer solutions.`,
  custTitle: `Happy Gardeners, Thriving Gardens`,
  custDesc: `Hear what our satisfied customers have to say about their PlantPowerPro gardening experiences.`,
  cust1: `I'm always amazed by the health and vitality my garden achieves with PlantPowerPro's fertilizers. It's transformed my gardening.`,
  cust1Name: `Sarah Anderson`,
  cust1Prof: `Proud Gardener`,
  cust2: `PlantPowerPro made finding the perfect fertilizers effortless. It's a game-changer for any gardener.`,
  cust2Name: `Michael Davis`,
  cust2Prof: `Enthusiastic Gardener`,
  cust3: `I love recommending PlantPowerPro's gardening accessories to friends. It's the perfect way to nurture their gardens.`,
  cust3Name: `Sophie Green`,
  cust3Prof: `Gardening Enthusiast`,
  contactTitle: `Ready to Cultivate Your Garden's Beauty? Contact PlantPowerPro Today`,
  logo2: `PlantPowerPro`,
  mail: `info@plantpowerpro.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © PlantPowerPro. All rights reserved.`,
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
