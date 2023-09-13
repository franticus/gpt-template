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
  logo: 'Pizzaroma',
  heroTitle: `Indulge in Flavorful Delights at<br />Pizzaroma's Pizza Haven.`,
  heroDescription: `Step into a world of mouthwatering pizzas and culinary delights, expertly crafted for discerning pizza lovers.`,
  featuresMainTitle: 'Embark on a Pizza Journey with Pizzaroma',
  featuresMainDescription:
    "Open the door to a world of pizza possibilities with Pizzaroma's exclusive menu.",
  featuresList: `<li class="mb-2">
  <strong>Premium Pizza Selection:</strong> Elevate your taste buds with our premium range of pizzas, tailored to your cravings.
</li>
<li class="mb-2">
  <strong>Culinary Creations:</strong> Experience the perfect blend of flavors and textures with our meticulously crafted pizzas.
</li>
<li class="mb-2">
  <strong>Scenic Dining:</strong> Each bite is a journey through taste, ensuring your dining experience stands out.
</li>
<li class="mb-2">
  <strong>Custom Pizza Creations:</strong> Create pizzas that cater to your unique taste, customized for your culinary pleasure.
</li>`,
  featuresListCol1T: `Flavorful<br />Pizzas for Every Palate`,
  featuresListCol1D: `Explore the essence of pizza perfection with Pizzaroma's latest creations. Enhance your dining experience with pizzas that match your cravings.`,
  featuresListCol2T: `Culinary Delights<br />Await You`,
  featuresListCol2D: `Experience the ultimate delight of flavors and textures with our gourmet pizzas. Elevate your pizza cravings with our premium offerings.`,
  featuresListCol3T: `Distinctive Dining<br />for Every Occasion`,
  featuresListCol3D: `Enhance your dining experience with our distinctive pizza offerings. Let your taste buds embrace the variety of flavors.`,
  caseTitle: `Explore Our Pizza Menu`,
  caseTitleDesc: `Unveiling Pizzaroma's Culinary Delights`,
  caseTitleDesc1T: `Exquisite Pizza Selections`,
  caseTitleDesc1D: `Indulge in the richness of our exquisite pizza selections, designed to elevate your dining experience with flair and flavor.`,
  caseTitleDesc2T: `Culinary Adventures`,
  caseTitleDesc2D: `Enhance your dining experience with our culinary creations, adding a touch of uniqueness to every bite.`,
  caseTitleDesc3T: `Customized Pizza Creations`,
  caseTitleDesc3D: `Customize your pizza experience with Pizzaroma, ensuring each slice satisfies your unique culinary vision and preferences.`,
  caseTitleDesc4T: `Elegant Dining Enhancements`,
  caseTitleDesc4D: `Experience the joy of our dining enhancement collection, elevating your pizza feast to new heights.`,
  mob1Title: `Savor the Flavor<br />with Pizzaroma!`,
  mob1Desc: `Step into the world of pizza perfection with our gourmet menu.`,
  mob1Desc2: `From everyday pizza cravings to grand culinary adventures, Pizzaroma is redefining the art of pizza perfection. Dive into a world where every slice is a burst of flavor.`,
  mob2Title: `Where Flavor Meets<br />Culinary Excellence.`,
  mob2Desc: `At Pizzaroma, pizzas are more than just dishes. They're about enhancing your dining experience and creating memorable taste impressions.`,
  mob2Desc2: `Embrace the power of flavorful dining.`,
  custTitle: `Customer Testimonials`,
  custDesc: `Hear from our satisfied pizza enthusiasts and culinary connoisseurs.`,
  cust1: `Pizzaroma's pizzas are a game changer. Their flavors are unmatched, and they transformed my dining experience into a culinary masterpiece.`,
  cust1Name: `Aleksa Morgan`,
  cust1Prof: `Pizza Enthusiast`,
  cust2: `The quality and variety of Pizzaroma's pizzas are beyond impressive. Every bite feels like a flavor-packed masterpiece.`,
  cust2Name: `David Turner`,
  cust2Prof: `Culinary Connoisseur`,
  cust3: `From classic favorites to unique creations, Pizzaroma has it all. The epitome of pizza perfection.`,
  cust3Name: `Emily Anderson`,
  cust3Prof: `Food Critic`,
  contactTitle: `Ready for a Flavorful Feast?<br />Join the Pizzaroma Experience`,
  logo2: `Pizzaroma`,
  mail: `contact@pizzaroma.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © Pizzaroma. All rights reserved.`,
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
