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
  logo: 'RideElevation',
  heroTitle: `Elevate Your Ride<br />with RideElevation Bikes.`,
  heroDescription: `Immerse yourself in the world of top-notch bicycles, where each ride brings excitement and style.`,
  featuresMainTitle: 'Embark on a Cycling Adventure with RideElevation',
  featuresMainDescription:
    "Discover a realm of biking excellence with RideElevation's collection of high-performance bicycles.",
  featuresList: `<li class="mb-2">
  <strong>Premium Bicycles:</strong> Elevate your ride with our latest bike models, designed for cycling enthusiasts.
</li>
<li class="mb-2">
  <strong>Unique Designs:</strong> Explore a range of stylish bicycles, meticulously crafted to suit your cycling lifestyle.
</li>
<li class="mb-2">
  <strong>Smooth Riding:</strong> Every bike is engineered for a comfortable journey, ensuring your cycling experiences are exceptional.
</li>
<li class="mb-2">
  <strong>Customized Fit:</strong> Personalize your bike to match your unique preferences, tailored for your cycling satisfaction.
</li>`,
  featuresListCol1T: `Top-Tier Bike Collection<br />for Every Cyclist`,
  featuresListCol1D: `Dive into the world of cycling excellence with RideElevation's latest collection. Enhance your biking journey with bicycles that perfectly resonate with your lifestyle.`,
  featuresListCol2T: `Exclusive Bike Universe<br />Awaits You`,
  featuresListCol2D: `Experience the ultimate bike selection with our carefully curated bicycle lineup, adding a touch of sophistication to your every ride.`,
  featuresListCol3T: `Cycling Paradise<br />for Every Adventure`,
  featuresListCol3D: `Elevate your cycling journey with our sleek designs and distinctive bike offerings. Let every ride embrace the joy of exploration.`,
  caseTitle: `Explore Our Bicycle Creations`,
  caseTitleDesc: `Discover RideElevation's Cycling Revolution`,
  caseTitleDesc1T: `High-Performance Bicycles`,
  caseTitleDesc1D: `Indulge in the excellence of our bicycles, meticulously designed to elevate your cycling adventure with precision and style.`,
  caseTitleDesc2T: `Bike Selections`,
  caseTitleDesc2D: `Enhance your cycling universe with our carefully crafted bicycles, infusing a touch of sophistication into every pedal stroke.`,
  caseTitleDesc3T: `Customized Bike Journey`,
  caseTitleDesc3D: `Customize your bike experience with RideElevation, ensuring each bicycle aligns with your unique cycling vision and preferences.`,
  caseTitleDesc4T: `Cycling Comfort Enhancements`,
  caseTitleDesc4D: `Experience the joy of our sleek bicycle designs, elevating your cycling moments to new heights.`,
  mob1Title: `Elevate Your Cycling<br />Experience with RideElevation!`,
  mob1Desc: `Step into the world of top-notch bicycles with RideElevation.`,
  mob1Desc2: `From classic designs to high-performance features, RideElevation is redefining the world of cycling. Immerse yourself in a world where every ride is smooth and stylish.`,
  mob2Title: `Where Style Meets<br />Performance.`,
  mob2Desc: `At RideElevation, bicycles are more than just machines. They're about enhancing your cycling journey and creating unforgettable riding moments.`,
  mob2Desc2: `Embrace the joy of cycling excellence.`,
  custTitle: `Customer Reviews`,
  custDesc: `Listen to our satisfied cyclists and biking enthusiasts.`,
  cust1: `RideElevation's bicycles are a game changer. Their collection is unmatched, and they transformed my cycling experiences into delightful adventures.`,
  cust1Name: `Sophia Davis`,
  cust1Prof: `Cycling Enthusiast`,
  cust2: `The quality and variety of RideElevation's bicycles are beyond impressive. Every ride feels like a cycling masterpiece.`,
  cust2Name: `John Anderson`,
  cust2Prof: `Biking Connoisseur`,
  cust3: `From classic designs to high-performance features, RideElevation has it all. The epitome of cycling excellence.`,
  cust3Name: `Olivia Roberts`,
  cust3Prof: `Adventure Cyclist`,
  contactTitle: `Ready for a Cycling Revolution?<br />Join the RideElevation Journey`,
  logo2: `RideElevation`,
  mail: `contact@rideelevation.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © RideElevation. All rights reserved.`,
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
