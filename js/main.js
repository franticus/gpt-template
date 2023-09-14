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
  logo: 'PlayMatrixRental',
  heroTitle: `Experience Gaming Bliss at<br />PlayMatrixRental's Game Disc Library.`,
  heroDescription: `Immerse yourself in a world of gaming excitement and endless choices, curated for gamers.`,
  featuresMainTitle: 'Embark on a Gaming Odyssey with PlayMatrixRental',
  featuresMainDescription:
    "Open the door to a world of gaming possibilities with PlayMatrixRental's exclusive collection.",
  featuresList: `<li class="mb-2">
  <strong>Premium Game Discs:</strong> Elevate your gaming experience with our top-tier game disc rentals, tailored to your gaming preferences.
</li>
<li class="mb-2">
  <strong>Exclusive Titles:</strong> Dive into a universe of gaming excellence with our meticulously curated game titles, carefully selected to captivate your gaming senses.
</li>
<li class="mb-2">
  <strong>Comfortable Gaming Zone:</strong> Each visit is a journey into gaming comfort, ensuring your gaming experience is exceptional.
</li>
<li class="mb-2">
  <strong>Personalized Recommendations:</strong> Customize your gaming journey to match your individual gaming tastes, tailored for your gaming satisfaction.
</li>`,
  featuresListCol1T: `Top-Notch Game Discs<br />for Every Gamer`,
  featuresListCol1D: `Explore the pinnacle of gaming excellence with PlayMatrixRental's latest collection. Enhance your gaming adventure with discs that perfectly match your gaming desires.`,
  featuresListCol2T: `Exclusive Gaming Universe<br />Awaits You`,
  featuresListCol2D: `Experience the ultimate gaming selection with our carefully chosen titles, adding a touch of excitement to every gaming session.`,
  featuresListCol3T: `Gaming Oasis<br />for Every Visit`,
  featuresListCol3D: `Enhance your gaming experience with our comfortable gaming zone and distinctive gaming offerings. Let your gaming senses embrace the thrill.`,
  caseTitle: `Explore Our Game Disc Collection`,
  caseTitleDesc: `Discover PlayMatrixRental's Gaming Expertise`,
  caseTitleDesc1T: `Exquisite Game Discs`,
  caseTitleDesc1D: `Indulge in the excellence of our game disc rentals, meticulously designed to elevate your gaming adventure with precision and expertise.`,
  caseTitleDesc2T: `Gaming Selections`,
  caseTitleDesc2D: `Enhance your gaming universe with our carefully curated titles, infusing a touch of excitement into every gaming experience.`,
  caseTitleDesc3T: `Customized Gaming Journey`,
  caseTitleDesc3D: `Customize your gaming experience with PlayMatrixRental, ensuring each rental satisfies your unique gaming vision and preferences.`,
  caseTitleDesc4T: `Gaming Comfort Enhancements`,
  caseTitleDesc4D: `Experience the joy of our comfortable gaming zone, elevating your gaming moments to new heights.`,
  mob1Title: `Elevate Your Gameplay<br />with PlayMatrixRental!`,
  mob1Desc: `Step into the world of gaming bliss with our premium game disc rentals.`,
  mob1Desc2: `From classic titles to the latest releases, PlayMatrixRental is redefining the art of gaming excellence. Dive into a world where every rental maximizes your gaming experience.`,
  mob2Title: `Where Excitement Meets<br />Gaming Mastery.`,
  mob2Desc: `At PlayMatrixRental, gaming is more than just entertainment. It's about enhancing your gaming journey and creating unforgettable gaming memories.`,
  mob2Desc2: `Embrace the power of gaming expertise.`,
  custTitle: `Player Reviews`,
  custDesc: `Listen to our satisfied gamers and gaming enthusiasts.`,
  cust1: `PlayMatrixRental's game disc rentals are a game changer. Their selection is unmatched, and they transformed my gaming sessions into thrilling adventures.`,
  cust1Name: `Alexandra Turner`,
  cust1Prof: `Gaming Enthusiast`,
  cust2: `The quality and variety of PlayMatrixRental's game disc collection are beyond impressive. Every rental feels like a premium gaming experience.`,
  cust2Name: `Maxwell Garcia`,
  cust2Prof: `Game Aficionado`,
  cust3: `From classic titles to rare gems, PlayMatrixRental has it all. The epitome of gaming excellence.`,
  cust3Name: `Sophia Lee`,
  cust3Prof: `Gamer Extraordinaire`,
  contactTitle: `Ready for an Epic Gaming Experience?<br />Join the PlayMatrixRental Journey`,
  logo2: `PlayMatrixRental`,
  mail: `contact@playmatrixrental.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © PlayMatrixRental. All rights reserved.`,
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
