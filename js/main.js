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
  logo: 'MowEliteServices',
  heroTitle: `Elevate Your Lawn's Beauty<br />with MowEliteServices.`,
  heroDescription: `Step into a world of lush greenery, where MowEliteServices brings the magic of expert lawn care to your doorstep.`,
  featuresMainTitle: 'Discover the Excellence of MowEliteServices',
  featuresMainDescription:
    "Experience top-tier lawn care services tailored to your needs by MowEliteServices' dedicated team.",
  featuresList: `<li class="mb-2">
  <strong>Precision Lawn Trimming:</strong> Enhance your lawn's beauty with our skilled team and top-of-the-line equipment.
</li>
<li class="mb-2">
  <strong>Innovative Landscaping:</strong> Explore creative landscaping techniques for a vibrant, inviting outdoor space.
</li>
<li class="mb-2">
  <strong>Expert Service:</strong> Our team is committed to delivering superior lawn care, ensuring your outdoor space is pristine.
</li>
<li class="mb-2">
  <strong>Customized Solutions:</strong> Personalize your lawn care experience to match your unique preferences, tailored for your satisfaction.
</li>`,
  featuresListCol1T: `Lawn Care<br />Solutions for Every Property`,
  featuresListCol1D: `Experience excellence in lawn care with MowEliteServices' latest solutions. Enhance your outdoor space with services that cater perfectly to your property's needs.`,
  featuresListCol2T: `Exclusive Landscaping<br />Techniques Await You`,
  featuresListCol2D: `Experience the ultimate in lawn care services with our carefully crafted lineup, adding a touch of freshness to your outdoor area.`,
  featuresListCol3T: `A Green Paradise<br />for Every Property`,
  featuresListCol3D: `Elevate your outdoor environment with our attentive team and distinctive landscaping offerings. Let your lawn radiate the beauty of nature.`,
  caseTitle: `Explore Our Lawn Care Services`,
  caseTitleDesc: `Discover MowEliteServices' Lawn Care Excellence`,
  caseTitleDesc1T: `Professional Lawn Care`,
  caseTitleDesc1D: `Indulge in the expertise of our lawn care services, meticulously designed to elevate your property's outdoor space with precision and care.`,
  caseTitleDesc2T: `Innovative Landscaping Solutions`,
  caseTitleDesc2D: `Enhance your outdoor space with our creative landscaping solutions, infusing a touch of natural beauty into every corner of your property.`,
  caseTitleDesc3T: `Tailored Lawn Care Experience`,
  caseTitleDesc3D: `Customize your lawn care routine with MowEliteServices, ensuring each session aligns with your unique vision and preferences.`,
  caseTitleDesc4T: `Effortless Lawn Care Delights`,
  caseTitleDesc4D: `Experience the joy of a beautifully maintained lawn, thanks to our dedicated team and effective landscaping methods.`,
  mob1Title: `Elevate Your Outdoor<br />Experience with MowEliteServices!`,
  mob1Desc: `Step into a world of lush green beauty with MowEliteServices.`,
  mob1Desc2: `From innovative landscaping techniques to expert service, MowEliteServices is redefining the world of lawn care. Immerse yourself in a world where your lawn is always pristine and inviting.`,
  mob2Title: `Where Beauty Meets<br />Effortless Lawn Joy.`,
  mob2Desc: `At MowEliteServices, lawn care is more than just a service. It's about enhancing your outdoor experience and creating unforgettable moments in a beautifully landscaped space.`,
  mob2Desc2: `Embrace the joy of a well-manicured and welcoming property.`,
  custTitle: `Client Testimonials`,
  custDesc: `Listen to our satisfied property owners and outdoor enthusiasts.`,
  cust1: `MowEliteServices' lawn care is a game changer. Their attention to detail is unmatched, and they transformed my property into a haven of natural beauty.`,
  cust1Name: `Lisa Anderson`,
  cust1Prof: `Property Owner`,
  cust2: `The quality and variety of MowEliteServices' lawn care solutions are beyond impressive. Every corner of my property feels beautifully landscaped and refreshed.`,
  cust2Name: `John Miller`,
  cust2Prof: `Outdoor Enthusiast`,
  cust3: `From innovative landscaping techniques to attentive service, MowEliteServices has it all. They are the epitome of lawn care excellence.`,
  cust3Name: `Michaela Davis`,
  cust3Prof: `Landscaping Enthusiast`,
  contactTitle: `Ready for a Lawn Care Revolution?<br />Join the MowEliteServices Journey`,
  logo2: `MowEliteServices`,
  mail: `contact@moweliteservices.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © MowEliteServices. All rights reserved.`,
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
