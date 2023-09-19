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
  logo: `SolarGaze`,
  heroTitle: `Discover a Brighter World with SolarGaze Sunglasses`,
  heroDescription: `SolarGaze offers a stunning selection of sunglasses to elevate your style and protect your eyes.`,
  featuresMainTitle: `Experience the SolarGaze Difference`,
  featuresMainDescription: `Our team of eyewear experts is dedicated to enhancing your vision with top-notch sunglass choices.`,
  featuresList: `<li class="mb-2">
    <strong>Stylish Sunglass Collection:</strong> Explore our wide range of sunglasses to elevate your look and shield your eyes from the sun.
  </li>
  <li class="mb-2">
    <strong>Eye Protection Insights:</strong> Let us provide you with expert advice and tips to keep your eyes safe and stylish with our sunglasses.
  </li>
  <li class="mb-2">
    <strong>Sunglass Accessories:</strong> Find the perfect additions to enhance your sunglass performance and complete your fashionable ensemble.
  </li>
  <li class="mb-2">
    <strong>Expert Vision Support:</strong> Learn how to enjoy clear vision and sun protection in any situation with personalized advice from our experts.
  </li>`,
  featuresListCol1T: `Fashionable Sunglass Collection`,
  featuresListCol1D: `SolarGaze guarantees a wide variety of sunglasses to suit your style and protect your eyes from the sun's rays.`,
  featuresListCol2T: `Experienced Eyewear Enthusiasts`,
  featuresListCol2D: `Our skilled eyewear enthusiasts are passionate about helping you find the perfect sunglasses to elevate your look.`,
  featuresListCol3T: `Personalized Vision Support`,
  featuresListCol3D: `SolarGaze caters to your specific eyewear needs, offering personalized solutions and expert guidance.`,
  caseTitle: `Our Sunglass Collections`,
  caseTitleDesc: `Explore SolarGaze's Sunglass Selection`,
  caseTitleDesc1T: `Modern Fashion Sunglasses`,
  caseTitleDesc1D: `Discover our range of modern fashion sunglasses to elevate your style and protect your eyes with flair.`,
  caseTitleDesc2T: `High-Performance Eye Protection`,
  caseTitleDesc2D: `Experience high-performance eye protection solutions designed to keep your vision clear and fashionable.`,
  caseTitleDesc3T: `Sun-Savvy Sunglasses`,
  caseTitleDesc3D: `Find sun-savvy sunglasses that provide style and eye safety while enjoying the great outdoors.`,
  mob1Title: `See the World Brighter<br />with SolarGaze!`,
  mob1Desc: `SolarGaze offers a world of eyewear solutions where you can see clearly and look stylish.`,
  mob1Desc2: `Join us and let our sunglasses enhance your vision and elevate your style.`,
  mob2Title: `Where Style Meets Eye Safety<br />Your Sunglass Solutions, Your Way.`,
  mob2Desc: `At SolarGaze, we believe that everyone deserves clear vision and fashionable eyewear. Let us help you find the perfect sunglasses.`,
  mob2Desc2: `Transform your look and protect your eyes with our top-quality sunglass solutions.`,
  custTitle: `Satisfied Customers, Stylish Vision`,
  custDesc: `Hear what our happy customers have to say about their SolarGaze sunglass experiences.`,
  cust1: `I'm always amazed by the style and clarity SolarGaze sunglasses provide. They've elevated my fashion game.`,
  cust1Name: `Sophia Roberts`,
  cust1Prof: `Fashion Blogger`,
  cust2: `SolarGaze made finding the perfect sunglasses effortless. It's a game-changer for any sunny day.`,
  cust2Name: `James Turner`,
  cust2Prof: `Outdoor Enthusiast`,
  cust3: `I love recommending SolarGaze sunglass accessories to friends. They add the perfect finishing touch to any look.`,
  cust3Name: `Emily Walker`,
  cust3Prof: `Style Influencer`,
  contactTitle: `Ready to Enhance Your Vision? Contact SolarGaze Today`,
  logo2: `SolarGaze`,
  mail: `info@solarGaze.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © SolarGaze. All rights reserved.`,
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
