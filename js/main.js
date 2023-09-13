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
  logo: 'SpiceSavvy',
  heroTitle: `Elevate Your Culinary Journey with<br />SpiceSavvy's Flavorful World.`,
  heroDescription: `SpiceSavvy offers a tantalizing array of exotic spices and seasonings, handpicked for passionate food aficionados.`,
  featuresMainTitle: 'Embark on a Spice Odyssey with SpiceSavvy',
  featuresMainDescription:
    "Awaken your taste buds with SpiceSavvy's premium spice collections.",
  featuresList: `<li class="mb-2">
  <strong>Exquisite Spice Selection:</strong> Excite your palate with our exquisite range of spices, tailored to your culinary adventures.
</li>
<li class="mb-2">
  <strong>Culinary Adventures:</strong> Experience the perfect blend of taste and creativity with our meticulously crafted spices.
</li>
<li class="mb-2">
  <strong>Artisanal Blends:</strong> Each spice blend showcases craftsmanship, ensuring your dishes stand out.
</li>
<li class="mb-2">
  <strong>Custom Spice Blends:</strong> Find spices that cater to your unique recipes, customized for your culinary pleasure.
</li>`,
  featuresListCol1T: `Culinary Excellence<br />for Every Palate`,
  featuresListCol1D: `Explore the essence of gourmet delight with SpiceSavvy's latest collections. Elevate your culinary creations with spices that match your passion.`,
  featuresListCol2T: `Savor the Flavorful<br />Culinary Adventure`,
  featuresListCol2D: `Experience the ultimate delight of exotic spices and seasonings. Elevate your culinary prowess with our premium ingredients.`,
  featuresListCol3T: `Distinctive Spice Blends<br />for Every Dish`,
  featuresListCol3D: `Enhance your cooking skills with our distinctive spice blends. Let your dishes reflect your passion for flavor.`,
  caseTitle: `Explore Our Spice Collection`,
  caseTitleDesc: `Unveiling SpiceSavvy's Selection`,
  caseTitleDesc1T: `Exotic Spice Selections`,
  caseTitleDesc1D: `Indulge in the richness of our exotic spice selections, designed to elevate your culinary experience with flair and sophistication.`,
  caseTitleDesc2T: `Culinary Creativity Enhancements`,
  caseTitleDesc2D: `Enhance your cooking experiences with our culinary creativity enhancements, adding a touch of uniqueness to every dish.`,
  caseTitleDesc3T: `Customized Spice Blends`,
  caseTitleDesc3D: `Customize your culinary adventures with SpiceSavvy, ensuring each dish is tailored to your unique recipes and preferences.`,
  caseTitleDesc4T: `Flavorful Cooking Adventures`,
  caseTitleDesc4D: `Experience the joy of our culinary adventure collection, elevating your cooking skills to new heights.`,
  mob1Title: `Elevate Your Cooking<br />with SpiceSavvy!`,
  mob1Desc: `Step into the world of culinary exploration with our exotic spice collections.`,
  mob1Desc2: `From solo cooking to gourmet feasts, SpiceSavvy is redefining the art of seasoning. Dive into a world where every dish is a symbol of flavor.`,
  mob2Title: `Where Taste Meets<br />Culinary Excellence.`,
  mob2Desc: `At SpiceSavvy, spices are more than just ingredients. They're about enhancing your culinary journey and creating memorable dining experiences.`,
  mob2Desc2: `Embrace the power of artisanal spice blends.`,
  custTitle: `Customer Testimonials`,
  custDesc: `Hear from our satisfied food enthusiasts and culinary artisans.`,
  cust1: `SpiceSavvy's spices are a game changer. Their flavors are unmatched, and they make my cooking truly exceptional.`,
  cust1Name: `Isabella Ramirez`,
  cust1Prof: `Food Enthusiast`,
  cust2: `The quality and variety of SpiceSavvy's spices are beyond impressive. Every dish feels like a culinary adventure.`,
  cust2Name: `Lucas Anderson`,
  cust2Prof: `Culinary Artisan`,
  cust3: `From everyday cooking to gourmet creations, SpiceSavvy has it all. The epitome of culinary excellence.`,
  cust3Name: `Olivia Mitchell`,
  cust3Prof: `Culinary Connoisseur`,
  contactTitle: `Ready for a Flavorful Journey?<br />Join the SpiceSavvy Experience`,
  logo2: `SpiceSavvy`,
  mail: `contact@spicesavvy.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © SpiceSavvy. All rights reserved.`,
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
