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
  logo: 'CarGleam',
  heroTitle: `Rediscover Excellence at<br />CarGleam's Auto Service Center.`,
  heroDescription: `Immerse yourself in a world of automotive expertise and meticulous care, tailored for car enthusiasts.`,
  featuresMainTitle: 'Embark on an Auto Journey with CarGleam',
  featuresMainDescription:
    "Open the door to a world of automotive possibilities with CarGleam's exclusive services.",
  featuresList: `<li class="mb-2">
  <strong>Premium Auto Repairs:</strong> Elevate your vehicle's performance with our top-tier repair services, tailored to your car's unique needs.
</li>
<li class="mb-2">
  <strong>Engineered Solutions:</strong> Experience the perfect blend of technology and expertise with our meticulously crafted solutions and treatments.
</li>
<li class="mb-2">
  <strong>Relaxing Waiting Area:</strong> Each visit is a journey into comfort, ensuring your car service experience is exceptional.
</li>
<li class="mb-2">
  <strong>Personalized Consultation:</strong> Customize your car service journey to match your individual preferences, tailored for your automotive satisfaction.
</li>`,
  featuresListCol1T: `Top-Notch Repairs<br />for Every Vehicle`,
  featuresListCol1D: `Explore the pinnacle of automotive excellence with CarGleam's latest services. Enhance your car's performance with solutions that perfectly match your requirements.`,
  featuresListCol2T: `Engineered Perfection<br />Awaits You`,
  featuresListCol2D: `Experience the ultimate optimization of your vehicle with our technology-driven solutions, adding a touch of precision to every ride.`,
  featuresListCol3T: `Comfortable Oasis<br />for Every Visit`,
  featuresListCol3D: `Enhance your car service experience with our relaxing waiting area and distinctive car service offerings. Let your senses embrace the tranquility.`,
  caseTitle: `Explore Our Service Menu`,
  caseTitleDesc: `Discover CarGleam's Automotive Expertise`,
  caseTitleDesc1T: `Exquisite Auto Repairs`,
  caseTitleDesc1D: `Indulge in the excellence of our auto repair services, meticulously designed to elevate your vehicle's performance with precision and expertise.`,
  caseTitleDesc2T: `Automotive Solutions`,
  caseTitleDesc2D: `Enhance your vehicle's functionality with our engineered solutions, infusing a touch of innovation into every drive.`,
  caseTitleDesc3T: `Customized Car Service`,
  caseTitleDesc3D: `Customize your car service experience with CarGleam, ensuring each service satisfies your unique automotive vision and preferences.`,
  caseTitleDesc4T: `Relaxation Enhancements`,
  caseTitleDesc4D: `Experience the joy of our comfortable waiting area, elevating your car service moments to new heights.`,
  mob1Title: `Revitalize Your Ride<br />with CarGleam!`,
  mob1Desc: `Step into the world of automotive perfection with our premium services.`,
  mob1Desc2: `From everyday car maintenance to advanced automotive solutions, CarGleam is redefining the art of car service excellence. Dive into a world where every visit optimizes your ride.`,
  mob2Title: `Where Precision Meets<br />Automotive Mastery.`,
  mob2Desc: `At CarGleam, your car is more than just a vehicle. It's about enhancing your car service experience and creating memorable automotive impressions.`,
  mob2Desc2: `Embrace the power of automotive expertise.`,
  custTitle: `Customer Reviews`,
  custDesc: `Listen to our satisfied car enthusiasts and automotive connoisseurs.`,
  cust1: `CarGleam's car service is a game changer. Their services are unparalleled, and they transformed my vehicle into a well-optimized masterpiece.`,
  cust1Name: `Emily Mitchell`,
  cust1Prof: `Auto Enthusiast`,
  cust2: `The quality and variety of CarGleam's car service offerings are beyond impressive. Every visit feels like a luxurious automotive experience.`,
  cust2Name: `Benjamin Roberts`,
  cust2Prof: `Automotive Aficionado`,
  cust3: `From basic maintenance to advanced solutions, CarGleam has it all. The epitome of car service excellence.`,
  cust3Name: `Dana Anderson`,
  cust3Prof: `Car Enthusiast`,
  contactTitle: `Ready for an Optimized Experience?<br />Join the CarGleam Journey`,
  logo2: `CarGleam`,
  mail: `contact@cargleam.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © CarGleam. All rights reserved.`,
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
