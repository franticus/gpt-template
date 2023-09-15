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
  logo: 'ParquetWorld',
  heroTitle: `Build Your Dreams with<br />ParquetWorld.`,
  heroDescription: `Step into a world of endless possibilities, where ParquetWorld provides the finest flooring solutions for your construction needs.`,
  featuresMainTitle: 'Discover the Excellence of ParquetWorld',
  featuresMainDescription:
    "Experience top-tier flooring solutions tailored to your projects by ParquetWorld's dedicated team.",
  featuresList: `<li class="mb-2">
  <strong>Premium Parquet Selection:</strong> Elevate your designs with our quality parquet flooring and expert guidance.
</li>
<li class="mb-2">
  <strong>Innovative Flooring Solutions:</strong> Explore creative techniques for installing and maintaining your floors.
</li>
<li class="mb-2">
  <strong>Expert Consultation:</strong> Our team is committed to delivering superior flooring solutions, ensuring your projects are solid and stylish.
</li>
<li class="mb-2">
  <strong>Customized Orders:</strong> Personalize your parquet flooring to match your unique requirements, tailored for your satisfaction.
</li>`,
  featuresListCol1T: `Flooring Solutions<br />for Every Project`,
  featuresListCol1D: `Experience excellence in flooring solutions with ParquetWorld's latest offerings. Enhance your spaces with flooring that perfectly suits your needs.`,
  featuresListCol2T: `Exclusive Building<br />Techniques Await You`,
  featuresListCol2D: `Experience the ultimate in flooring solutions with our carefully crafted lineup, adding a touch of elegance to your projects.`,
  featuresListCol3T: `A Solid Foundation<br />for Every Space`,
  featuresListCol3D: `Elevate your designs with our attentive team and distinctive parquet offerings. Let your spaces stand with the beauty and durability of quality flooring.`,
  caseTitle: `Explore Our Flooring Solutions`,
  caseTitleDesc: `Discover ParquetWorld's Construction Excellence`,
  caseTitleDesc1T: `Professional Flooring Guidance`,
  caseTitleDesc1D: `Indulge in the expertise of our flooring solutions, meticulously designed to elevate your spaces with precision and care.`,
  caseTitleDesc2T: `Innovative Flooring Solutions`,
  caseTitleDesc2D: `Enhance your spaces with our creative flooring solutions, infusing a touch of elegance into every corner of your projects.`,
  caseTitleDesc3T: `Tailored Parquet Orders`,
  caseTitleDesc3D: `Customize your flooring orders with ParquetWorld, ensuring each order aligns with your unique vision and requirements.`,
  caseTitleDesc4T: `Solid Construction Delights`,
  caseTitleDesc4D: `Experience the joy of well-designed spaces, thanks to our dedicated team and effective flooring methods.`,
  mob1Title: `Elevate Your Flooring<br />Experience with ParquetWorld!`,
  mob1Desc: `Step into a world of solid flooring solutions with ParquetWorld.`,
  mob1Desc2: `From innovative techniques to expert consultation, ParquetWorld is redefining the world of flooring solutions. Immerse yourself in a world where your spaces are always elegant and reliable.`,
  mob2Title: `Where Quality Meets<br />Effortless Design Joy.`,
  mob2Desc: `At ParquetWorld, flooring solutions are more than just a service. It's about enhancing your building experience and creating unforgettable spaces with quality flooring.`,
  mob2Desc2: `Embrace the joy of well-designed and dependable projects.`,
  custTitle: `Client Testimonials`,
  custDesc: `Listen to our satisfied project owners and interior design enthusiasts.`,
  cust1: `ParquetWorld's flooring solutions are a game changer. Their attention to detail is unmatched, and they transformed my spaces into a testament of quality.`,
  cust1Name: `Megan Taylor`,
  cust1Prof: `Project Owner`,
  cust2: `The quality and variety of ParquetWorld's parquet offerings are beyond impressive. Every corner of my spaces feels stylish and reliable.`,
  cust2Name: `John Williams`,
  cust2Prof: `Interior Design Enthusiast`,
  cust3: `From innovative building techniques to attentive consultation, ParquetWorld has it all. They are the epitome of design excellence.`,
  cust3Name: `Olivia Brown`,
  cust3Prof: `Building Contractor`,
  contactTitle: `Ready for a Flooring Revolution?<br />Join the ParquetWorld Journey`,
  logo2: `ParquetWorld`,
  mail: `contact@parquetworld.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © ParquetWorld. All rights reserved.`,
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
