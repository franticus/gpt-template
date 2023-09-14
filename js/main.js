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
  logo: 'SushiSerenity',
  heroTitle: `Savor Culinary Delights at<br />SushiSerenity's Gourmet Haven.`,
  heroDescription: `Indulge in a world of gastronomic bliss with a delectable array of sushi creations, meticulously crafted for food enthusiasts.`,
  featuresMainTitle: 'Embark on a Culinary Journey with SushiSerenity',
  featuresMainDescription:
    "Open the door to a realm of culinary possibilities with SushiSerenity's exquisite menu.",
  featuresList: `<li class="mb-2">
  <strong>Premium Sushi Selection:</strong> Elevate your dining experience with our top-tier sushi creations, tailored to your palate.
</li>
<li class="mb-2">
  <strong>Exclusive Flavors:</strong> Dive into a universe of culinary excellence with our meticulously crafted sushi recipes, carefully prepared to tantalize your taste buds.
</li>
<li class="mb-2">
  <strong>Elegant Dining Ambiance:</strong> Every visit is a journey into culinary comfort, ensuring your dining experience is exceptional.
</li>
<li class="mb-2">
  <strong>Personalized Recommendations:</strong> Customize your dining journey to match your individual taste preferences, tailored for your culinary satisfaction.
</li>`,
  featuresListCol1T: `Top-Notch Sushi Selection<br />for Every Foodie`,
  featuresListCol1D: `Explore the pinnacle of culinary excellence with SushiSerenity's latest menu. Enhance your dining adventure with sushi that perfectly matches your gastronomic desires.`,
  featuresListCol2T: `Exclusive Culinary Universe<br />Awaits You`,
  featuresListCol2D: `Experience the ultimate culinary selection with our carefully crafted recipes, adding a touch of excitement to every dining session.`,
  featuresListCol3T: `Culinary Oasis<br />for Every Visit`,
  featuresListCol3D: `Enhance your dining experience with our elegant ambiance and distinctive dining offerings. Let your taste buds embrace the thrill of gastronomy.`,
  caseTitle: `Explore Our Sushi Creations`,
  caseTitleDesc: `Discover SushiSerenity's Culinary Expertise`,
  caseTitleDesc1T: `Exquisite Sushi Creations`,
  caseTitleDesc1D: `Indulge in the excellence of our sushi offerings, meticulously designed to elevate your dining adventure with precision and expertise.`,
  caseTitleDesc2T: `Culinary Selections`,
  caseTitleDesc2D: `Enhance your culinary universe with our carefully curated recipes, infusing a touch of excitement into every dining experience.`,
  caseTitleDesc3T: `Customized Dining Journey`,
  caseTitleDesc3D: `Customize your dining experience with SushiSerenity, ensuring each meal satisfies your unique culinary vision and preferences.`,
  caseTitleDesc4T: `Dining Comfort Enhancements`,
  caseTitleDesc4D: `Experience the joy of our elegant dining ambiance, elevating your dining moments to new heights.`,
  mob1Title: `Elevate Your Dining<br />Experience with SushiSerenity!`,
  mob1Desc: `Step into the world of culinary bliss with our premium sushi creations.`,
  mob1Desc2: `From classic flavors to innovative recipes, SushiSerenity is redefining the art of culinary excellence. Dive into a world where every meal maximizes your dining experience.`,
  mob2Title: `Where Gastronomy Meets<br />Culinary Mastery.`,
  mob2Desc: `At SushiSerenity, dining is more than just sustenance. It's about enhancing your culinary journey and creating unforgettable dining memories.`,
  mob2Desc2: `Embrace the power of culinary expertise.`,
  custTitle: `Customer Reviews`,
  custDesc: `Listen to our satisfied foodies and culinary enthusiasts.`,
  cust1: `SushiSerenity's sushi creations are a game changer. Their selection is unmatched, and they transformed my dining experiences into delightful adventures.`,
  cust1Name: `Isabella Mitchell`,
  cust1Prof: `Food Enthusiast`,
  cust2: `The quality and variety of SushiSerenity's sushi offerings are beyond impressive. Every meal feels like a gourmet dining experience.`,
  cust2Name: `Oliver Martinez`,
  cust2Prof: `Culinary Connoisseur`,
  cust3: `From classic flavors to rare delicacies, SushiSerenity has it all. The epitome of culinary excellence.`,
  cust3Name: `Elijah Anderson`,
  cust3Prof: `Foodie Extraordinaire`,
  contactTitle: `Ready for an Exquisite Dining Experience?<br />Join the SushiSerenity Journey`,
  logo2: `SushiSerenity`,
  mail: `contact@sushiserenity.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © SushiSerenity. All rights reserved.`,
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
