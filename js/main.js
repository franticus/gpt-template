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
  logo: 'DirtBuster',
  heroTitle: `Revolutionize Your Cleaning<br />with DirtBuster Vacuums.`,
  heroDescription: `Step into the world of pristine cleanliness, where every DustBuster vacuum is a marvel of cleaning technology.`,
  featuresMainTitle: 'Discover the Power of DirtBuster',
  featuresMainDescription:
    "Experience the pinnacle of cleaning with DirtBuster's range of premium vacuums and cleaning solutions.",
  featuresList: `<li class="mb-2">
  <strong>Premium Vacuums:</strong> Elevate your cleaning game with our latest vacuum models, designed for cleaning enthusiasts.
</li>
<li class="mb-2">
  <strong>Innovative Designs:</strong> Explore a variety of stylish cleaning appliances, expertly crafted to suit your cleaning needs.
</li>
<li class="mb-2">
  <strong>Pro-Level Performance:</strong> Every vacuum is engineered for superior cleaning, ensuring your home is spotless.
</li>
<li class="mb-2">
  <strong>Customized Cleaning:</strong> Personalize your cleaning experience to match your unique preferences, tailored for your cleaning satisfaction.
</li>`,
  featuresListCol1T: `Cleaning Collection<br />for Every Home`,
  featuresListCol1D: `Step into the world of cleaning excellence with DirtBuster's latest collection. Enhance your cleaning routine with vacuums that perfectly fit your needs.`,
  featuresListCol2T: `Exclusive Cleaning Solutions<br />Await You`,
  featuresListCol2D: `Experience the ultimate cleaning solutions with our carefully curated lineup, adding a touch of style to your home.`,
  featuresListCol3T: `Clean Home Paradise<br />for Every Household`,
  featuresListCol3D: `Elevate your cleaning journey with our sleek designs and distinctive cleaning offerings. Let every room embrace the joy of cleanliness.`,
  caseTitle: `Explore Our Cleaning Creations`,
  caseTitleDesc: `Discover DirtBuster's Cleaning Revolution`,
  caseTitleDesc1T: `Pro-Level Vacuums`,
  caseTitleDesc1D: `Indulge in the excellence of our vacuums, meticulously designed to elevate your cleaning with precision and style.`,
  caseTitleDesc2T: `Cleaning Solutions`,
  caseTitleDesc2D: `Enhance your cleaning universe with our carefully crafted cleaning solutions, infusing a touch of style into every room.`,
  caseTitleDesc3T: `Customized Cleaning Experience`,
  caseTitleDesc3D: `Customize your cleaning routine with DirtBuster, ensuring each clean aligns with your unique cleanliness vision and preferences.`,
  caseTitleDesc4T: `Effortless Cleaning Thrills`,
  caseTitleDesc4D: `Experience the joy of our sleek cleaning designs, elevating your cleaning routine to new heights.`,
  mob1Title: `Elevate Your Cleaning<br />Experience with DirtBuster!`,
  mob1Desc: `Step into the world of pristine cleanliness with DirtBuster.`,
  mob1Desc2: `From innovative designs to high-performance cleaning appliances, DirtBuster is redefining the world of cleaning. Immerse yourself in a world where every room is spotless.`,
  mob2Title: `Where Style Meets<br />Effortless Cleaning Thrills.`,
  mob2Desc: `At DirtBuster, cleaning is more than just a chore. It's about enhancing your cleaning routine and creating unforgettable moments of cleanliness.`,
  mob2Desc2: `Embrace the thrill of a spotless home.`,
  custTitle: `Customer Reviews`,
  custDesc: `Listen to our satisfied homeowners and cleaning enthusiasts.`,
  cust1: `DirtBuster's vacuums are a game changer. Their collection is unmatched, and they transformed my cleaning into a breeze.`,
  cust1Name: `Emily Anderson`,
  cust1Prof: `Homeowner`,
  cust2: `The quality and variety of DirtBuster's cleaning appliances are beyond impressive. Every room feels spotless and stylish.`,
  cust2Name: `John Davis`,
  cust2Prof: `Cleaning Enthusiast`,
  cust3: `From innovative designs to high-performance cleaning solutions, DirtBuster has it all. The epitome of cleaning excellence.`,
  cust3Name: `Sophia Martinez`,
  cust3Prof: `Cleanliness Advocate`,
  contactTitle: `Ready for a Cleaning Revolution?<br />Join the DirtBuster Journey`,
  logo2: `DirtBuster`,
  mail: `contact@dirtbuster.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © DirtBuster. All rights reserved.`,
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
