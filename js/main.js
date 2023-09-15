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
  logo: 'EuroExplorerTours',
  heroTitle: `Discover Europe with<br />EuroExplorerTours.`,
  heroDescription: `Experience unforgettable travel adventures as EuroExplorerTours takes you on a journey across Europe's most captivating destinations.`,
  featuresMainTitle: 'Experience the Wonders of Europe with Us',
  featuresMainDescription:
    'Join EuroExplorerTours and let our seasoned travel experts guide you through awe-inspiring sights and attractions across Europe.',
  featuresList: `<li class="mb-2">
  <strong>Exclusive European Itineraries:</strong> Venture into the heart of Europe with our carefully curated selection of must-see experiences.
</li>
<li class="mb-2">
  <strong>Personalized Travel Experiences:</strong> Create your perfect tour with options for personalizing destinations and activities.
</li>
<li class="mb-2">
  <strong>Expert Local Guides:</strong> Our highly knowledgeable guides reveal Europe's best-kept secrets and bring its rich history to life.
</li>
<li class="mb-2">
  <strong>Comfortable Transportation:</strong> Enjoy the journey seamlessly with the best in modern transportation options.
</li>`,
  featuresListCol1T: `Uncover Europe's<br />Hidden Gems`,
  featuresListCol1D: `Delve into the beauty and culture of Europe's lesser-known treasures with EuroExplorerTours.`,
  featuresListCol2T: `Historical Sites<br />Beyond Imagination`,
  featuresListCol2D: `Experience the grandeur of Europe's awe-inspiring historical sites for a truly memorable adventure.`,
  featuresListCol3T: `Indulge in Europe's<br />Culinary Delights`,
  featuresListCol3D: `Embark on a culinary journey across diverse European cuisines, flavor profiles, and regional specialties.`,
  caseTitle: `Explore Our Tour Offerings`,
  caseTitleDesc: `Discover EuroExplorerTours' Unforgettable Experiences`,
  caseTitleDesc1T: `Iconic Landmarks`,
  caseTitleDesc1D: `Witness the majesty of Europe's most iconic landmarks, steeped in history and cultural significance.`,
  caseTitleDesc2T: `Cultural Immersion`,
  caseTitleDesc2D: `Immerse yourself in the vibrant cultures of each region, celebrating local customs and traditions.`,
  caseTitleDesc3T: `Nature's Wonders`,
  caseTitleDesc3D: `Experience Europe's breathtaking natural landscapes and indulge in its pristine, awe-inspiring beauty.`,
  caseTitleDesc4T: `Remarkable Travel Memories`,
  caseTitleDesc4D: `Create unforgettable memories with EuroExplorerTours, as you embark on the journey of a lifetime.`,
  mob1Title: `Experience Europe<br />Like Never Before!`,
  mob1Desc: `Unearth the wonders of Europe with EuroExplorerTours.`,
  mob1Desc2: `Explore ancient cities, experience vibrant cultures, and take in breathtaking natural beauty on your ultimate European adventure.`,
  mob2Title: `Where Luxury Meets<br />Unforgettable Experiences.`,
  mob2Desc: `At EuroExplorerTours, travel experiences are more than just itineraries. We strive to make every journey an unforgettable, luxurious memory.`,
  mob2Desc2: `Experience European adventures beyond your dreams.`,
  custTitle: `Traveler Testimonials`,
  custDesc: `Hear from our delighted travel enthusiasts and adventurers.`,
  cust1: `EuroExplorerTours exceeded my expectations. Their knowledge and expertise transformed the trip into an unforgettable experience.`,
  cust1Name: `Emily Johnson`,
  cust1Prof: `World Traveler`,
  cust2: `The variety of iconic destinations and hidden gems showcased by EuroExplorerTours was truly astounding. I can't wait for my next European adventure with them.`,
  cust2Name: `Robert Smith`,
  cust2Prof: `History Enthusiast`,
  cust3: `From their expert local guides to comfortable transportation, EuroExplorerTours delivered an exceptional and seamless travel experience.`,
  cust3Name: `Natalie Green`,
  cust3Prof: `Travel Blogger`,
  contactTitle: `Ready for Your European Adventure?<br />Join the EuroExplorerTours Family`,
  logo2: `EuroExplorerTours`,
  mail: `contact@euroexplorertours.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © EuroExplorerTours. All rights reserved.`,
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
