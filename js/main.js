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
  logo: 'BrickEmpire',
  heroTitle: `Build Your Dreams with<br />BrickEmpire.`,
  heroDescription: `Step into a world of endless possibilities, where BrickEmpire provides the finest bricks for your construction needs.`,
  featuresMainTitle: 'Discover the Excellence of BrickEmpire',
  featuresMainDescription:
    "Experience top-tier brick solutions tailored to your projects by BrickEmpire's dedicated team.",
  featuresList: `<li class="mb-2">
  <strong>Premium Brick Selection:</strong> Elevate your construction with our quality bricks and expert guidance.
</li>
<li class="mb-2">
  <strong>Innovative Building Solutions:</strong> Explore creative construction techniques for your projects.
</li>
<li class="mb-2">
  <strong>Expert Consultation:</strong> Our team is committed to delivering superior brick solutions, ensuring your projects are solid.
</li>
<li class="mb-2">
  <strong>Customized Orders:</strong> Personalize your brick orders to match your unique requirements, tailored for your satisfaction.
</li>`,
  featuresListCol1T: `Brick Solutions<br />for Every Project`,
  featuresListCol1D: `Experience excellence in brick solutions with BrickEmpire's latest offerings. Enhance your construction projects with bricks that perfectly suit your needs.`,
  featuresListCol2T: `Exclusive Building<br />Techniques Await You`,
  featuresListCol2D: `Experience the ultimate in construction solutions with our carefully crafted lineup, adding a touch of innovation to your projects.`,
  featuresListCol3T: `A Solid Foundation<br />for Every Structure`,
  featuresListCol3D: `Elevate your construction projects with our attentive team and distinctive brick offerings. Let your structures stand with the strength of quality bricks.`,
  caseTitle: `Explore Our Brick Solutions`,
  caseTitleDesc: `Discover BrickEmpire's Construction Excellence`,
  caseTitleDesc1T: `Professional Brick Guidance`,
  caseTitleDesc1D: `Indulge in the expertise of our brick solutions, meticulously designed to elevate your construction projects with precision and care.`,
  caseTitleDesc2T: `Innovative Building Solutions`,
  caseTitleDesc2D: `Enhance your construction projects with our creative building solutions, infusing a touch of innovation into every corner of your structures.`,
  caseTitleDesc3T: `Tailored Brick Orders`,
  caseTitleDesc3D: `Customize your brick orders with BrickEmpire, ensuring each batch aligns with your unique vision and requirements.`,
  caseTitleDesc4T: `Solid Construction Delights`,
  caseTitleDesc4D: `Experience the joy of well-constructed structures, thanks to our dedicated team and effective building methods.`,
  mob1Title: `Elevate Your Building<br />Experience with BrickEmpire!`,
  mob1Desc: `Step into a world of solid construction with BrickEmpire.`,
  mob1Desc2: `From innovative building techniques to expert consultation, BrickEmpire is redefining the world of brick solutions. Immerse yourself in a world where your projects are always strong and reliable.`,
  mob2Title: `Where Quality Meets<br />Effortless Construction Joy.`,
  mob2Desc: `At BrickEmpire, construction is more than just a service. It's about enhancing your building experience and creating unforgettable structures with quality bricks.`,
  mob2Desc2: `Embrace the joy of well-constructed and dependable projects.`,
  custTitle: `Client Testimonials`,
  custDesc: `Listen to our satisfied project owners and construction enthusiasts.`,
  cust1: `BrickEmpire's brick solutions are a game changer. Their attention to detail is unmatched, and they transformed my projects into a testament of quality.`,
  cust1Name: `Sarah Smith`,
  cust1Prof: `Project Owner`,
  cust2: `The quality and variety of BrickEmpire's brick offerings are beyond impressive. Every corner of my structures feels solid and reliable.`,
  cust2Name: `David Johnson`,
  cust2Prof: `Construction Enthusiast`,
  cust3: `From innovative building techniques to attentive consultation, BrickEmpire has it all. They are the epitome of construction excellence.`,
  cust3Name: `Emily Wilson`,
  cust3Prof: `Building Contractor`,
  contactTitle: `Ready for a Brick Revolution?<br />Join the BrickEmpire Journey`,
  logo2: `BrickEmpire`,
  mail: `contact@brickempire.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © BrickEmpire. All rights reserved.`,
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
