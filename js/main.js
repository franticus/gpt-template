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
  logo: 'AromaSymphony',
  heroTitle: `Elevate Your Senses with<br />AromaSymphony's Fragrance Artistry.`,
  heroDescription: `Immerse yourself in a world of olfactory wonders, where each fragrance is a masterpiece crafted for scent aficionados.`,
  featuresMainTitle: 'Embark on an Olfactory Journey with AromaSymphony',
  featuresMainDescription:
    "Open the door to a realm of sensory possibilities with AromaSymphony's exquisite fragrances.",
  featuresList: `<li class="mb-2">
  <strong>Premium Fragrance Collection:</strong> Elevate your sensory experience with our top-tier fragrances, tailored to your olfactory preferences.
</li>
<li class="mb-2">
  <strong>Exclusive Scents:</strong> Dive into a universe of olfactory excellence with our meticulously crafted fragrance compositions, carefully blended to captivate your senses.
</li>
<li class="mb-2">
  <strong>Elegant Presentation:</strong> Every fragrance is a journey into sensory delight, ensuring your experience is exceptional.
</li>
<li class="mb-2">
  <strong>Personalized Recommendations:</strong> Customize your fragrance journey to match your individual preferences, tailored for your sensory satisfaction.
</li>`,
  featuresListCol1T: `Top-Notch Fragrance Collection<br />for Every Perfume Lover`,
  featuresListCol1D: `Explore the pinnacle of olfactory excellence with AromaSymphony's latest collection. Enhance your fragrance adventure with scents that perfectly resonate with your senses.`,
  featuresListCol2T: `Exclusive Olfactory Universe<br />Awaits You`,
  featuresListCol2D: `Experience the ultimate olfactory selection with our carefully crafted scents, adding a touch of enchantment to every sensory experience.`,
  featuresListCol3T: `Sensory Oasis<br />for Every Encounter`,
  featuresListCol3D: `Enhance your sensory journey with our elegant presentation and distinctive fragrance offerings. Let your senses embrace the magic of aromas.`,
  caseTitle: `Explore Our Fragrance Creations`,
  caseTitleDesc: `Discover AromaSymphony's Fragrance Artistry`,
  caseTitleDesc1T: `Exquisite Fragrance Creations`,
  caseTitleDesc1D: `Indulge in the excellence of our fragrances, meticulously designed to elevate your sensory adventure with precision and artistry.`,
  caseTitleDesc2T: `Fragrance Selections`,
  caseTitleDesc2D: `Enhance your olfactory universe with our carefully curated scents, infusing a touch of enchantment into every sensory encounter.`,
  caseTitleDesc3T: `Customized Sensory Journey`,
  caseTitleDesc3D: `Customize your fragrance experience with AromaSymphony, ensuring each scent resonates with your unique sensory vision and preferences.`,
  caseTitleDesc4T: `Sensory Comfort Enhancements`,
  caseTitleDesc4D: `Experience the joy of our elegant fragrance presentation, elevating your sensory moments to new heights.`,
  mob1Title: `Elevate Your Sensory<br />Experience with AromaSymphony!`,
  mob1Desc: `Step into the world of olfactory bliss with our premium fragrances.`,
  mob1Desc2: `From classic scents to innovative blends, AromaSymphony is redefining the art of fragrance excellence. Immerse yourself in a world where every aroma heightens your sensory experience.`,
  mob2Title: `Where Scent Meets<br />Artistry.`,
  mob2Desc: `At AromaSymphony, fragrance is more than just a scent. It's about enhancing your sensory journey and creating unforgettable moments.`,
  mob2Desc2: `Embrace the magic of fragrance artistry.`,
  custTitle: `Customer Reviews`,
  custDesc: `Listen to our satisfied fragrance enthusiasts and scent connoisseurs.`,
  cust1: `AromaSymphony's fragrances are a game changer. Their collection is unmatched, and they transformed my sensory experiences into delightful adventures.`,
  cust1Name: `Sophia Johnson`,
  cust1Prof: `Fragrance Enthusiast`,
  cust2: `The quality and variety of AromaSymphony's scents are beyond impressive. Every encounter feels like a sensory masterpiece.`,
  cust2Name: `Lucas Davis`,
  cust2Prof: `Scent Connoisseur`,
  cust3: `From classic aromas to rare blends, AromaSymphony has it all. The epitome of fragrance artistry.`,
  cust3Name: `Ava Williams`,
  cust3Prof: `Sensory Explorer`,
  contactTitle: `Ready for an Exquisite Sensory Experience?<br />Join the AromaSymphony Journey`,
  logo2: `AromaSymphony`,
  mail: `contact@aromasymphony.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © AromaSymphony. All rights reserved.`,
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
