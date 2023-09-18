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
  logo: `TireProShop`,
  heroTitle: `Rev Up Your Ride with Precision Tires<br />at TireProShop Tire Emporium.`,
  heroDescription: `TireProShop offers an extensive range of top-notch tires and expert solutions to enhance your driving experience.`,
  featuresMainTitle: `Discover the TireProShop Advantage`,
  featuresMainDescription: `Our dedicated team of automotive experts is committed to optimizing your vehicle's performance through high-quality tires.`,
  featuresList: `<li class="mb-2">
  <strong>Precision Tire Selection:</strong> Explore our diverse range of top-notch tires for a smoother and safer ride.
</li>
<li class="mb-2">
  <strong>Tire Performance Insights:</strong> Let us provide you with in-depth tire data to maximize your driving comfort and safety.
</li>
<li class="mb-2">
  <strong>Tire Accessories:</strong> Find the perfect accessories to complement your vehicle's tire needs.
</li>
<li class="mb-2">
  <strong>Expert Automotive Guidance:</strong> Learn how to optimize your driving experience with personalized advice from our experts.
</li>`,
  featuresListCol1T: `High-Performance Tires`,
  featuresListCol1D: `TireProShop guarantees top-notch tires for a smoother and safer ride.`,
  featuresListCol2T: `Experienced Automotive Experts`,
  featuresListCol2D: `Our skilled automotive experts are passionate about enhancing your driving experience.`,
  featuresListCol3T: `Personalized Vehicle Support`,
  featuresListCol3D: `TireProShop caters to your specific vehicle needs, offering personalized solutions and expert guidance.`,
  caseTitle: `Our Tire Collection`,
  caseTitleDesc: `Explore TireProShop's Premium Tire Selection`,
  caseTitleDesc1T: `Performance Tires`,
  caseTitleDesc1D: `Discover our range of performance tires for enhanced grip and control.`,
  caseTitleDesc2T: `All-Season Tires`,
  caseTitleDesc2D: `Experience all-season tires designed for year-round safety and reliability.`,
  caseTitleDesc3T: `Off-Road Tires`,
  caseTitleDesc3D: `Find off-road tires for your adventurous journeys, ensuring traction on all terrains.`,
  caseTitleDesc4T: `Tire Accessories`,
  caseTitleDesc4D: `Explore our collection of tire accessories to enhance your vehicle's performance.`,
  mob1Title: `Upgrade Your Drive<br />with TireProShop!`,
  mob1Desc: `TireProShop offers a haven for automotive enthusiasts, where you can elevate your driving experience with precision tires.`,
  mob1Desc2: `Join us and let the quality and performance of our tires take your ride to the next level.`,
  mob2Title: `Where Quality Meets Excellence<br />Your Vehicle, Your Way.`,
  mob2Desc: `At TireProShop, we believe that every drive should be personalized. Let us help you achieve your unique driving goals.`,
  mob2Desc2: `Transform your journeys into smooth and enjoyable rides with our top-tier tire solutions.`,
  custTitle: `Customer Success Stories`,
  custDesc: `Hear what our satisfied customers have to say about their TireProShop experiences.`,
  cust1: `I'm always amazed by the performance and safety I get with TireProShop's tires. It's transformed my driving experience.`,
  cust1Name: `Emily Turner`,
  cust1Prof: `Automotive Enthusiast`,
  cust2: `TireProShop made choosing the right tires for my vehicle effortless. It's a game-changer for any driver.`,
  cust2Name: `Max Parker`,
  cust2Prof: `Vehicle Owner`,
  cust3: `I love recommending TireProShop's tire accessories to friends. It's the perfect way to enhance their driving experience.`,
  cust3Name: `Christina Foster`,
  cust3Prof: `Automotive Advocate`,
  contactTitle: `Ready to Enhance Your Ride? Contact TireProShop Today`,
  logo2: `TireProShop`,
  mail: `info@tireproshop.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © TireProShop. All rights reserved.`,
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
