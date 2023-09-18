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
  logo: `SneakPeakSports`,
  heroTitle: `Elevate Your Style with SneakPeakSports' Trendy Sneaker Collection`,
  heroDescription: `SneakPeakSports offers a diverse range of sneakers to boost your fashion game and performance.`,
  featuresMainTitle: `Discover the SneakPeakSports Difference`,
  featuresMainDescription: `Our team of sneaker enthusiasts is committed to elevating your shoe game with top-notch footwear choices.`,
  featuresList: `<li class="mb-2">
    <strong>Diverse Sneaker Selection:</strong> Explore our wide range of sneakers to enhance your style and athletic performance.
  </li>
  <li class="mb-2">
    <strong>Fashion Insights:</strong> Let us provide you with expert fashion advice and tips to step up your sneaker game.
  </li>
  <li class="mb-2">
    <strong>Sneaker Accessories:</strong> Find the perfect additions to complete your sneaker collection and achieve a stylish look.
  </li>
  <li class="mb-2">
    <strong>Expert Shoe Guidance:</strong> Learn how to make a fashion statement and excel in your favorite sports with personalized advice from our experts.
  </li>`,
  featuresListCol1T: `Diverse Sneaker Collection`,
  featuresListCol1D: `SneakPeakSports guarantees a wide variety of sneakers to complement your style and boost your performance.`,
  featuresListCol2T: `Experienced Sneaker Enthusiasts`,
  featuresListCol2D: `Our skilled sneaker enthusiasts are passionate about helping you find the perfect pair to express yourself.`,
  featuresListCol3T: `Personalized Shoe Support`,
  featuresListCol3D: `SneakPeakSports caters to your specific footwear needs, offering personalized solutions and expert guidance.`,
  caseTitle: `Our Sneaker Collections`,
  caseTitleDesc: `Explore SneakPeakSports' Trendy Sneaker Selection`,
  caseTitleDesc1T: `Fashion Forward Sneakers`,
  caseTitleDesc1D: `Discover our range of fashion-forward sneakers to elevate your style and make a statement.`,
  caseTitleDesc2T: `Performance Athletic Footwear`,
  caseTitleDesc2D: `Experience athletic footwear designed to enhance your sports performance and comfort.`,
  caseTitleDesc3T: `Casual Sneaker Collection`,
  caseTitleDesc3D: `Find casual sneakers that combine style and comfort for everyday wear.`,
  mob1Title: `Step Up Your Style Game<br />with SneakPeakSports!`,
  mob1Desc: `SneakPeakSports offers a world of trendy sneakers, where you can express your unique style and athletic prowess.`,
  mob1Desc2: `Join us and let the fashion and performance of our sneakers elevate your everyday look.`,
  mob2Title: `Where Style Meets Performance<br />Your Sneaker Collection, Your Way.`,
  mob2Desc: `At SneakPeakSports, we believe that every sneaker enthusiast deserves personalized advice. Let us help you find the perfect pair.`,
  mob2Desc2: `Transform your shoe collection into a statement of style and comfort with our top-quality footwear solutions.`,
  custTitle: `Happy Sneakerheads, Stylish Feet`,
  custDesc: `Hear what our satisfied customers have to say about their SneakPeakSports sneaker experiences.`,
  cust1: `I'm always amazed by the style and comfort SneakPeakSports' sneakers provide. It's transformed my fashion game.`,
  cust1Name: `Olivia Taylor`,
  cust1Prof: `Fashion Enthusiast`,
  cust2: `SneakPeakSports made finding the perfect sneakers effortless. It's a game-changer for any sneakerhead.`,
  cust2Name: `Daniel Jackson`,
  cust2Prof: `Sneaker Collector`,
  cust3: `I love recommending SneakPeakSports' shoe accessories to friends. It's the perfect way to complete their sneaker collection.`,
  cust3Name: `Emily White`,
  cust3Prof: `Style Influencer`,
  contactTitle: `Ready to Elevate Your Sneaker Game? Contact SneakPeakSports Today`,
  logo2: `SneakPeakSports`,
  mail: `info@sneakpeaksports.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © SneakPeakSports. All rights reserved.`,
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
