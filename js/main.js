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
  logo: 'MochaMingle',
  heroTitle: `Discover the Perfect Blend at<br />MochaMingle's Coffee Haven.`,
  heroDescription: `Step into a world of aromatic brews and delightful treats, carefully crafted for coffee aficionados.`,
  featuresMainTitle: 'Embark on a Coffee Adventure with MochaMingle',
  featuresMainDescription:
    "Open the door to a world of coffee possibilities with MochaMingle's exclusive menu.",
  featuresList: `<li class="mb-2">
  <strong>Premium Coffee Selection:</strong> Elevate your taste buds with our premium range of coffee blends, tailored to your cravings.
</li>
<li class="mb-2">
  <strong>Culinary Creations:</strong> Experience the perfect harmony of flavors and textures with our meticulously crafted coffee and treats.
</li>
<li class="mb-2">
  <strong>Cozy Ambiance:</strong> Each sip is an escape into tranquility, ensuring your coffee experience stands out.
</li>
<li class="mb-2">
  <strong>Custom Coffee Creations:</strong> Craft your coffee journey to match your unique taste, customized for your caffeinated pleasure.
</li>`,
  featuresListCol1T: `Aromatic<br />Coffee for Every Palate`,
  featuresListCol1D: `Explore the essence of coffee perfection with MochaMingle's latest creations. Enhance your coffee experience with blends that match your cravings.`,
  featuresListCol2T: `Culinary Delights<br />Await You`,
  featuresListCol2D: `Experience the ultimate delight of flavors and textures with our gourmet coffee and delectable treats. Elevate your coffee cravings with our premium offerings.`,
  featuresListCol3T: `Cozy Ambiance<br />for Every Occasion`,
  featuresListCol3D: `Enhance your coffee experience with our cozy ambiance and distinctive coffee offerings. Let your senses embrace the variety of aromas.`,
  caseTitle: `Explore Our Coffee Menu`,
  caseTitleDesc: `Unveiling MochaMingle's Coffee Delights`,
  caseTitleDesc1T: `Exquisite Coffee Blends`,
  caseTitleDesc1D: `Indulge in the richness of our exquisite coffee blends, designed to elevate your coffee experience with aroma and flavor.`,
  caseTitleDesc2T: `Coffee Adventures`,
  caseTitleDesc2D: `Enhance your coffee experience with our culinary creations, adding a touch of uniqueness to every sip.`,
  caseTitleDesc3T: `Customized Coffee Creations`,
  caseTitleDesc3D: `Customize your coffee experience with MochaMingle, ensuring each cup satisfies your unique caffeine vision and preferences.`,
  caseTitleDesc4T: `Cozy Ambiance Enhancements`,
  caseTitleDesc4D: `Experience the joy of our cozy ambiance collection, elevating your coffee moments to new heights.`,
  mob1Title: `Savor the Aroma<br />with MochaMingle!`,
  mob1Desc: `Step into the world of coffee perfection with our gourmet menu.`,
  mob1Desc2: `From everyday coffee cravings to grand coffee adventures, MochaMingle is redefining the art of coffee perfection. Dive into a world where every sip is an aromatic delight.`,
  mob2Title: `Where Flavor Meets<br />Caffeine Excellence.`,
  mob2Desc: `At MochaMingle, coffee is more than just a beverage. It's about enhancing your coffee experience and creating memorable aroma impressions.`,
  mob2Desc2: `Embrace the power of aromatic coffee.`,
  custTitle: `Customer Testimonials`,
  custDesc: `Hear from our satisfied coffee enthusiasts and aroma connoisseurs.`,
  cust1: `MochaMingle's coffee is a game changer. Their blends are unmatched, and they transformed my coffee moments into an aromatic masterpiece.`,
  cust1Name: `Oliver Smith`,
  cust1Prof: `Coffee Enthusiast`,
  cust2: `The quality and variety of MochaMingle's coffee blends are beyond impressive. Every sip feels like an aroma-packed masterpiece.`,
  cust2Name: `Sophia Walker`,
  cust2Prof: `Aroma Connoisseur`,
  cust3: `From classic favorites to unique creations, MochaMingle has it all. The epitome of coffee perfection.`,
  cust3Name: `Lucas Miller`,
  cust3Prof: `Caffeine Critic`,
  contactTitle: `Ready for an Aromatic Experience?<br />Join the MochaMingle Journey`,
  logo2: `MochaMingle`,
  mail: `contact@mochamingle.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © MochaMingle. All rights reserved.`,
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
