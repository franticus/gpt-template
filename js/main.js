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
  logo: 'PuzzleMasters',
  heroTitle: `Unlock Your Mind with<br />PuzzleMasters Challenges.`,
  heroDescription: `PuzzleMasters offers an intriguing assortment of brain teasers, carefully curated for the curious and puzzle enthusiasts.`,
  featuresMainTitle: 'Dive into the World of PuzzleMasters',
  featuresMainDescription:
    "Challenge your intellect with PuzzleMasters' mind-bending puzzle collections.",
  featuresList: `<li class="mb-2">
  <strong>Exceptional Puzzle Choices:</strong> Stimulate your mind with our exceptional puzzle games, tailored to your level.
</li>
<li class="mb-2">
  <strong>Engaging Challenges:</strong> Experience the perfect blend of fun and mental exercise with our meticulously crafted puzzles.
</li>
<li class="mb-2">
  <strong>Innovative Designs:</strong> Each puzzle showcases creativity and craftsmanship, ensuring your gaming stands out.
</li>
<li class="mb-2">
  <strong>Customized Solutions:</strong> Find puzzles that cater to your unique interests, customized for your leisure.
</li>`,
  featuresListCol1T: `Puzzle Excellence<br />for Every Mind`,
  featuresListCol1D: `Explore the essence of mental stimulation with PuzzleMasters' latest collections. Challenge your intellect with puzzles that match your passion.`,
  featuresListCol2T: `Indulge in Cognitive<br />Entertainment`,
  featuresListCol2D: `Experience the ultimate thrill of brain teasers and puzzles. Elevate your mental prowess with premium games.`,
  featuresListCol3T: `Distinctive Puzzle Designs<br />for Every Challenge`,
  featuresListCol3D: `Enhance your puzzle-solving skills with our distinctive puzzle designs. Let your gaming reflect your passion for challenges.`,
  caseTitle: `Explore Our Puzzle Catalog`,
  caseTitleDesc: `Unveiling PuzzleMasters' Collections`,
  caseTitleDesc1T: `Elegant Puzzle Sets`,
  caseTitleDesc1D: `Indulge in the complexity of our elegant puzzle sets, designed to stimulate your mind with style and sophistication.`,
  caseTitleDesc2T: `Cognitive Challenge Enhancements`,
  caseTitleDesc2D: `Enhance your gaming experiences with our cognitive challenge enhancements, adding a touch of intrigue to every puzzle.`,
  caseTitleDesc3T: `Customized Puzzle Solutions`,
  caseTitleDesc3D: `Customize your puzzle adventures with PuzzleMasters, ensuring each puzzle is tailored to your unique interests and preferences.`,
  caseTitleDesc4T: `Exquisite Brain Teasers`,
  caseTitleDesc4D: `Experience the thrill of our brain teaser collection, elevating your mental agility to new heights.`,
  mob1Title: `Expand Your Mind<br />with PuzzleMasters!`,
  mob1Desc: `Step into the world of cognitive exploration with our intriguing puzzle collections.`,
  mob1Desc2: `From solo challenges to group gaming, PuzzleMasters is redefining the art of puzzles. Dive into a world where every game is a symbol of mental agility.`,
  mob2Title: `Where Entertainment Meets<br />Cognitive Excellence.`,
  mob2Desc: `At PuzzleMasters, puzzles are more than just games. They're about stimulating your mind and enhancing your problem-solving abilities.`,
  mob2Desc2: `Embrace the power of innovative puzzle designs.`,
  custTitle: `Customer Testimonials`,
  custDesc: `Hear from our satisfied puzzle enthusiasts and mental athletes.`,
  cust1: `PuzzleMasters' puzzles are a game changer. Their complexity is unmatched, and they make my leisure truly intriguing.`,
  cust1Name: `Eleanor Smith`,
  cust1Prof: `Puzzle Enthusiast`,
  cust2: `The quality and design of PuzzleMasters' puzzles are beyond impressive. Every challenge feels like a mental adventure.`,
  cust2Name: `William Turner`,
  cust2Prof: `Mental Athlete`,
  cust3: `From solo adventures to group brain teasers, PuzzleMasters has it all. The epitome of cognitive entertainment.`,
  cust3Name: `Mia Mitchell`,
  cust3Prof: `Puzzle Connoisseur`,
  contactTitle: `Ready for a Cognitive Challenge?<br />Join the PuzzleMasters Experience`,
  logo2: `PuzzleMasters`,
  mail: `contact@puzzlemasters.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © PuzzleMasters. All rights reserved.`,
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
