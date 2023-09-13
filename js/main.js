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
  logo: 'FacadeFinisher',
  heroTitle: `Explore the Beauty of Facade Paint<br />at FacadeFinisher.`,
  heroDescription: `FacadeFinisher offers a stunning array of premium facade paints, carefully curated for discerning architects and designers.`,
  featuresMainTitle: 'Enter the World of FacadeFinisher',
  featuresMainDescription:
    "Elevate your exteriors with FacadeFinisher's luxurious paint collections.",
  featuresList: `<li class="mb-2">
  <strong>Exquisite Paint Selection:</strong> Transform your buildings with our exquisite facade paints and coatings tailored to your style.
</li>
<li class="mb-2">
  <strong>Luxurious Facades:</strong> Experience the perfect blend of aesthetics and durability with our meticulously crafted facade paints.
</li>
<li class="mb-2">
  <strong>Innovative Designs:</strong> Each paint showcases creativity and elegance, ensuring your building stands out.
</li>
<li class="mb-2">
  <strong>Customized Solutions:</strong> Find paints that cater to your unique vision, customized just for your project.
</li>`,
  featuresListCol1T: `Exquisite Paints<br />for Every Building`,
  featuresListCol1D: `Discover the essence of luxury exteriors with FacadeFinisher's latest collections. Elevate your buildings with paints that match your vision.`,
  featuresListCol2T: `Indulge in Exterior<br />Elegance`,
  featuresListCol2D: `Experience the ultimate beauty and functionality with our sumptuous facade paints. Transform your exteriors with premium designs.`,
  featuresListCol3T: `Distinctive Facade Designs<br />for Every Project`,
  featuresListCol3D: `Upgrade your architectural projects with our distinctive facade designs. Let your buildings reflect your taste for opulence.`,
  caseTitle: `Explore Our Facade Paint Catalog`,
  caseTitleDesc: `Unveiling FacadeFinisher's Collections`,
  caseTitleDesc1T: `Elegant Facade Sets`,
  caseTitleDesc1D: `Indulge in the beauty of our elegant facade sets, designed to transform your buildings with style and sophistication.`,
  caseTitleDesc2T: `Luxury Coating Enhancements`,
  caseTitleDesc2D: `Enhance your architectural designs with our luxury facade enhancements, adding a touch of opulence to every project.`,
  caseTitleDesc3T: `Customized Facade Solutions`,
  caseTitleDesc3D: `Customize your architectural projects with FacadeFinisher, ensuring each facade is tailored to your unique vision and requirements.`,
  caseTitleDesc4T: `Exquisite Building Coatings`,
  caseTitleDesc4D: `Experience the opulence of our building coatings collection, elevating your architectural aesthetics to new heights.`,
  mob1Title: `Elevate Your Buildings<br />with FacadeFinisher!`,
  mob1Desc: `Step into the future of luxury exteriors with our opulent facade paint collections.`,
  mob1Desc2: `From personal projects to grand architectural transformations, FacadeFinisher is redefining the art of facade painting. Dive into a world where every facade is a symbol of opulence.`,
  mob2Title: `Where Quality Meets<br />Architectural Excellence.`,
  mob2Desc: `At FacadeFinisher, facade paints are more than just materials. They're about expressing your unique style and enhancing your architectural designs.`,
  mob2Desc2: `Embrace the transformative power of innovative facade paint designs.`,
  custTitle: `Client Testimonials`,
  custDesc: `Hear from our satisfied architects and designers.`,
  cust1: `FacadeFinisher's paints are a game changer. Their beauty is unmatched, and they make my architectural projects truly opulent.`,
  cust1Name: `Emily Anderson`,
  cust1Prof: `Architect`,
  cust2: `The quality and style of FacadeFinisher paints are beyond impressive. Every building feels like a work of art.`,
  cust2Name: `Michael Turner`,
  cust2Prof: `Designer`,
  cust3: `From everyday projects to special designs, FacadeFinisher has it all. The epitome of architectural opulence.`,
  cust3Name: `Ella Collins`,
  cust3Prof: `Architectural Designer`,
  cotactTitle: `Ready for Opulent Exteriors?<br />Join the FacadeFinisher Experience`,
  logo2: `FacadeFinisher`,
  mail: `contact@facadefinisher.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © FacadeFinisher. All rights reserved.`,
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
