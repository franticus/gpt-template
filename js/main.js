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
  logo: 'PureResidenceCare',
  heroTitle: `Transform Your Home Cleaning<br />with PureResidenceCare Services.`,
  heroDescription: `Step into a world of pristine living, where PureResidenceCare brings the magic of cleanliness to your doorstep.`,
  featuresMainTitle: 'Discover the Excellence of PureResidenceCare',
  featuresMainDescription:
    "Experience top-tier home cleaning services tailored to your needs by PureResidenceCare's expert team.",
  featuresList: `<li class="mb-2">
  <strong>Premium Cleaning:</strong> Elevate your home's cleanliness with our skilled team and top-notch equipment.
</li>
<li class="mb-2">
  <strong>Creative Solutions:</strong> Explore innovative cleaning techniques and solutions for a fresh, inviting atmosphere.
</li>
<li class="mb-2">
  <strong>Professional Service:</strong> Our team is dedicated to delivering superior cleaning, ensuring your home is spotless.
</li>
<li class="mb-2">
  <strong>Customized Care:</strong> Personalize your cleaning experience to match your unique preferences, tailored for your satisfaction.
</li>`,
  featuresListCol1T: `Home Cleaning<br />Solutions for Every Residence`,
  featuresListCol1D: `Experience excellence in home cleaning with PureResidenceCare's latest solutions. Enhance your living space with services that cater perfectly to your needs.`,
  featuresListCol2T: `Exclusive Cleaning Techniques<br />Await You`,
  featuresListCol2D: `Experience the ultimate in home cleaning services with our carefully crafted lineup, adding a touch of freshness to your living space.`,
  featuresListCol3T: `A Clean Home Paradise<br />for Every Household`,
  featuresListCol3D: `Elevate your living environment with our attentive team and distinctive cleaning offerings. Let every room radiate the joy of cleanliness.`,
  caseTitle: `Explore Our Cleaning Services`,
  caseTitleDesc: `Discover PureResidenceCare's Cleaning Excellence`,
  caseTitleDesc1T: `Professional Home Cleaning`,
  caseTitleDesc1D: `Indulge in the expertise of our home cleaning services, meticulously designed to elevate your living space with precision and care.`,
  caseTitleDesc2T: `Innovative Cleaning Solutions`,
  caseTitleDesc2D: `Enhance your living space with our creative cleaning solutions, infusing a touch of freshness into every corner of your home.`,
  caseTitleDesc3T: `Tailored Home Cleaning Experience`,
  caseTitleDesc3D: `Customize your home cleaning routine with PureResidenceCare, ensuring each cleaning session aligns with your unique vision and preferences.`,
  caseTitleDesc4T: `Effortless Home Cleaning Delights`,
  caseTitleDesc4D: `Experience the joy of a clean and fresh home, thanks to our dedicated team and effective cleaning methods.`,
  mob1Title: `Elevate Your Living<br />Experience with PureResidenceCare!`,
  mob1Desc: `Step into a world of pristine living with PureResidenceCare.`,
  mob1Desc2: `From innovative cleaning techniques to professional service, PureResidenceCare is redefining the world of home cleaning. Immerse yourself in a world where every room is spotless and inviting.`,
  mob2Title: `Where Cleanliness Meets<br />Effortless Living Joy.`,
  mob2Desc: `At PureResidenceCare, cleanliness is more than just a service. It's about enhancing your living experience and creating unforgettable moments in a fresh and inviting home.`,
  mob2Desc2: `Embrace the joy of a spotless and welcoming residence.`,
  custTitle: `Client Testimonials`,
  custDesc: `Listen to our satisfied homeowners and cleanliness enthusiasts.`,
  cust1: `PureResidenceCare's cleaning services are a game changer. Their attention to detail is unmatched, and they transformed my home into a haven of cleanliness.`,
  cust1Name: `Sarah Johnson`,
  cust1Prof: `Homeowner`,
  cust2: `The quality and variety of PureResidenceCare's home cleaning solutions are beyond impressive. Every corner of my house feels clean and refreshed.`,
  cust2Name: `David Wilson`,
  cust2Prof: `Cleanliness Enthusiast`,
  cust3: `From innovative cleaning techniques to attentive service, PureResidenceCare has it all. They are the epitome of home cleaning excellence.`,
  cust3Name: `Emma Smith`,
  cust3Prof: `Cleanliness Advocate`,
  contactTitle: `Ready for a Clean Home Revolution?<br />Join the PureResidenceCare Journey`,
  logo2: `PureResidenceCare`,
  mail: `contact@pureresidencecare.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © PureResidenceCare. All rights reserved.`,
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
