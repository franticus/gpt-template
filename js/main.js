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
  logo: `SwimGear`,
  heroTitle: `Dive into Crystal-Clear Waters with SwimGear's Swimwear`,
  heroDescription: `SwimGear offers a diverse range of swimwear and accessories to elevate your aquatic adventures.`,
  featuresMainTitle: `Experience the SwimGear Difference`,
  featuresMainDescription: `Our team of water enthusiasts is dedicated to enhancing your swimming experience with top-quality gear choices.`,
  featuresList: `<li class="mb-2">
    <strong>Stylish Swimwear Collection:</strong> Explore our wide range of swimwear to elevate your look and enhance your water adventures.
  </li>
  <li class="mb-2">
    <strong>Aquatic Tips & Insights:</strong> Let us provide you with expert advice and tips to keep your swimming experience safe and stylish with our swim gear.
  </li>
  <li class="mb-2">
    <strong>Swimming Accessories:</strong> Find the perfect additions to enhance your swimming performance and complete your aquatic ensemble.
  </li>
  <li class="mb-2">
    <strong>Expert Water Support:</strong> Learn how to enjoy clear waters and aquatic fun in any situation with personalized advice from our experts.
  </li>`,
  featuresListCol1T: `Fashionable Swimwear Collection`,
  featuresListCol1D: `SwimGear guarantees a wide variety of swimwear to suit your style and enhance your aquatic adventures.`,
  featuresListCol2T: `Experienced Water Enthusiasts`,
  featuresListCol2D: `Our skilled water enthusiasts are passionate about helping you find the perfect swim gear to elevate your aquatic look.`,
  featuresListCol3T: `Personalized Water Support`,
  featuresListCol3D: `SwimGear caters to your specific aquatic needs, offering personalized solutions and expert guidance.`,
  caseTitle: `Our Swim Gear Collections`,
  caseTitleDesc: `Explore SwimGear's Aquatic Selection`,
  caseTitleDesc1T: `Contemporary Swimwear`,
  caseTitleDesc1D: `Discover our range of contemporary swimwear to elevate your style and enhance your aquatic adventures with flair.`,
  caseTitleDesc2T: `High-Performance Water Gear`,
  caseTitleDesc2D: `Experience high-performance water gear designed to keep your swimming experience clear and fashionable.`,
  caseTitleDesc3T: `Adventure-Ready Swim Gear`,
  caseTitleDesc3D: `Find adventure-ready swim gear that provides style and safety while enjoying the best aquatic experiences.`,
  caseTitleDesc4T: `Exploration-Ready Swim Gear`,
  caseTitleDesc4D: `Discover exploration-ready swim gear that offers both style and safety for your aquatic adventures.`,
  caseTitleDesc3T: `Adventure-Ready Swim Gear`,
  caseTitleDesc3D: `Find adventure-ready swim gear that provides style and safety while enjoying the best aquatic experiences.`,
  mob1Title: `Dive into the World of Aquatic Fun<br />with SwimGear!`,
  mob1Desc: `SwimGear offers a world of water solutions where you can swim confidently and look stylish.`,
  mob1Desc2: `Join us and let our swim gear enhance your aquatic adventures and elevate your style.`,
  mob2Title: `Where Style Meets Water Fun<br />Your Aquatic Solutions, Your Way.`,
  mob2Desc: `At SwimGear, we believe that everyone deserves clear waters and fashionable swimwear. Let us help you find the perfect gear.`,
  mob2Desc2: `Elevate your aquatic look and enjoy safe and stylish water experiences with our top-quality gear.`,
  custTitle: `Satisfied Customers, Stylish Aquatic Adventures`,
  custDesc: `Hear what our happy customers have to say about their SwimGear experiences.`,
  cust1: `I'm always amazed by the style and functionality of SwimGear's swimwear. They've elevated my aquatic adventures.`,
  cust1Name: `Sophia Turner`,
  cust1Prof: `Water Enthusiast`,
  cust2: `SwimGear made finding the perfect swim gear effortless. It's a game-changer for any water activity.`,
  cust2Name: `Daniel Robinson`,
  cust2Prof: `Beach Explorer`,
  cust3: `I love recommending SwimGear accessories to friends. They add the perfect finishing touch to any aquatic look.`,
  cust3Name: `Isabella Martinez`,
  cust3Prof: `Style Maven`,
  contactTitle: `Ready to Dive into Stylish Aquatic Adventures? Contact SwimGear Today`,
  logo2: `SwimGear`,
  mail: `info@swimgear.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © SwimGear. All rights reserved.`,
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
