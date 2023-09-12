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
  logo: 'ConstructPro',
  heroTitle: `Building the Future<br />with ConstructPro.`,
  heroDescription: `ConstructPro specializes in cutting-edge construction solutions for projects of all sizes.`,
  featuresMainTitle: 'Welcome to ConstructPro',
  featuresMainDescription:
    "Transforming your vision into reality with ConstructPro's innovative construction services.",
  featuresList: `<li class="mb-2">
  <strong>Custom Construction Projects:</strong> Explore a wide range of architectural designs and premium materials, tailored to your project requirements.
</li>
<li class="mb-2">
  <strong>Efficient Building:</strong> Experience hassle-free construction as we deliver top-quality results right to your doorstep, saving you time and effort.
</li>
<li class="mb-2">
  <strong>Exceptional Quality:</strong> We prioritize excellence in every project. Our constructions are meticulously crafted, ensuring each structure reflects durability and innovation.
</li>
<li class="mb-2">
  <strong>Personalized Design:</strong> Tailor your project to your vision. Our experienced team allows you to customize designs and preferences, providing a unique construction experience.
</li>`,
  featuresListCol1T: `Custom Construction<br />Projects`,
  featuresListCol1D: `Bring your vision to life with ConstructPro's custom construction solutions, ensuring your project stands out. Experience the convenience of high-quality building without compromise.`,
  featuresListCol2T: `Efficient Building<br />Experiences`,
  featuresListCol2D: `Immerse yourself in a world of efficient building experiences as ConstructPro provides you with a curated range of construction options. Discover the perfect blend of convenience and innovation and embark on a journey towards exceptional results.`,
  featuresListCol3T: `Tailored Solutions<br />for Every Project`,
  featuresListCol3D: `Customize your construction experience with ConstructPro's tailored project designs designed to match your unique requirements. Whether it's unique designs, special finishes, or personalized features, our versatile options cater to your specific project needs.`,
  caseTitle: `Explore Our Construction Portfolio`,
  caseTitleDesc: `Unveiling ConstructPro's Building Solutions`,
  caseTitleDesc1T: `Premium Building Designs`,
  caseTitleDesc1D: `Create a Lasting Impact Architecturally`,
  caseTitleDesc2T: `Customized Building Solutions`,
  caseTitleDesc2D: `Unique Designs for Your Project`,
  caseTitleDesc3T: `Efficient Construction Service`,
  caseTitleDesc3D: `Quality Building for Project Success`,
  caseTitleDesc4T: `Tailored Construction Solutions`,
  caseTitleDesc4D: `Personalized Projects for Your Vision`,
  mob1Title: `Elevate Your Building<br />Experience with ConstructPro!`,
  mob1Desc: `Enhance your construction journey with our custom building solutions.`,
  mob1Desc2: `With a dedication that goes beyond the ordinary, we invite you to explore the expertise of our team and embark on a journey to discover the boundless potential of successful construction. Whether it's creating a remarkable structure, expanding your property, or realizing your architectural vision, our team's commitment shines through every project, promising an experience that's beyond the norm.`,
  mob2Title: `Leading Building Solutions<br />for Your Project.`,
  mob2Desc: `Say goodbye to compromise and welcome a future of efficient construction where every project reflects ConstructPro's dedication to providing reliable and innovative options. As we empower you to make the most of your construction vision, you can trust that our commitment to quality, flexibility, and convenience will redefine the way you build.`,
  mob2Desc2: `Experience the smart way to elevate your construction projects.`,
  custTitle: `Client Testimonials`,
  custDesc: `Explore the feedback from our satisfied clients.`,
  cust1: `ConstructPro's construction designs are truly exceptional, elevating our architectural projects. Their dedication is impressive.`,
  cust1Name: `Ron Roberts`,
  cust2: `ConstructPro's impact on our building projects is remarkable, enhancing our property value. Their innovation is outstanding.`,
  cust2Name: `Michael Adams`,
  cust3: `ConstructPro's service is exceptional, revolutionizing our construction choices. Their commitment is commendable.`,
  cust3Name: `Linda Parker`,
  cotactTitle: `Ready to elevate your construction projects?<br />Get in touch with ConstructPro`,
  logo2: `ConstructPro`,
  mail: `info@constructpro.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © ConstructPro. All rights reserved.`,
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
