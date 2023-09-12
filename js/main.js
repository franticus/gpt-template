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
  logo: 'TowelElegance',
  heroTitle: `Discover Luxurious Towels<br />at TowelElegance.`,
  heroDescription: `TowelElegance offers an opulent range of towels and bath linens curated for discerning individuals.`,
  featuresMainTitle: 'Step into TowelElegance',
  featuresMainDescription:
    "Elevate your bathing experience with TowelElegance's premium towel collections.",
  featuresList: `<li class="mb-2">
  <strong>Elegant Towel Selection:</strong> Wrap yourself in luxury with our exquisite towels and accessories tailored for your comfort.
</li>
<li class="mb-2">
  <strong>Luxurious Bathing:</strong> Experience the perfect blend of softness and absorbency with our meticulously crafted towels.
</li>
<li class="mb-2">
  <strong>Innovative Designs:</strong> Each towel embodies creativity and elegance, ensuring your bath time is extraordinary.
</li>
<li class="mb-2">
  <strong>Personalized Comfort:</strong> Find towels that cater to your unique preferences, customized just for you.
</li>`,
  featuresListCol1T: `Exquisite Towel Selection<br />for Every Bathroom`,
  featuresListCol1D: `Discover the essence of luxury bathing with TowelElegance's latest collections. Elevate your daily routine with towels that match your style.`,
  featuresListCol2T: `Indulge in Bathing<br />Luxury`,
  featuresListCol2D: `Experience the ultimate comfort with our sumptuous towels. Immerse yourself in a world of premium designs and opulent bath linens.`,
  featuresListCol3T: `Distinctive Towel Designs<br />for Every Home`,
  featuresListCol3D: `Upgrade your bathroom spaces with our distinctive towel designs. Let your home reflect your taste for luxury.`,
  caseTitle: `Explore Our Towel Catalogue`,
  caseTitleDesc: `Unveiling TowelElegance's Collections`,
  caseTitleDesc1T: `Plush Towel Sets`,
  caseTitleDesc1D: `Indulge in the softness of our plush towel sets, designed for your comfort and style.`,
  caseTitleDesc2T: `Elegant Bath Linens`,
  caseTitleDesc2D: `Enhance your bathroom decor with our elegant bath linens, adding a touch of sophistication.`,
  caseTitleDesc3T: `Personalized Towels`,
  caseTitleDesc3D: `Customize your towels with TowelElegance, ensuring each one is tailored to your preferences.`,
  caseTitleDesc4T: `Luxury Bathrobe Collection`,
  caseTitleDesc4D: `Experience relaxation like never before with our luxurious bathrobe collection.`,
  mob1Title: `Elevate Your Bathing<br />Experience with TowelElegance!`,
  mob1Desc: `Step into the future of luxury bathing with our opulent towel collections.`,
  mob1Desc2: `From personal use to elegant gifting, TowelElegance is redefining the art of bath linens. Dive into a world where every towel is a symbol of indulgence.`,
  mob2Title: `Where Quality Meets<br />Bathing Excellence.`,
  mob2Desc: `At TowelElegance, towels are more than just linens. They're about expressing your unique style and enhancing your daily bathing rituals.`,
  mob2Desc2: `Embrace the transformative power of innovative towel designs.`,
  custTitle: `Customer Testimonials`,
  custDesc: `Hear from our satisfied customers.`,
  cust1: `TowelElegance's towels are a game changer. Their softness is unmatched, and they make my bathing experience truly luxurious.`,
  cust1Name: `Olivia Mitchell`,
  cust1Prof: `Spa Owner`,
  cust2: `The quality and style of TowelElegance towels are beyond impressive. Every bath feels like a spa day.`,
  cust2Name: `Daniel Foster`,
  cust2Prof: `Hotel Manager`,
  cust3: `From everyday use to special occasions, TowelElegance has it all. The epitome of luxury.`,
  cust3Name: `Ella Roberts`,
  cust3Prof: `Home Enthusiast`,
  cotactTitle: `Ready for Luxurious Bathing?<br />Join the TowelElegance Experience`,
  logo2: `TowelElegance`,
  mail: `contact@towelelegance.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © TowelElegance. All rights reserved.`,
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
