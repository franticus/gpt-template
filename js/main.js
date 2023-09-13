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
  logo: 'RugRealm',
  heroTitle: `Discover Opulence in Rugs<br />at RugRealm.`,
  heroDescription: `RugRealm presents an exquisite range of premium rugs, thoughtfully curated for discerning connoisseurs.`,
  featuresMainTitle: 'Step into RugRealm',
  featuresMainDescription:
    "Elevate your space with RugRealm's luxurious rug collections.",
  featuresList: `<li class="mb-2">
  <strong>Elegant Rug Selection:</strong> Transform your spaces with our exquisite rugs and accessories tailored for your style.
</li>
<li class="mb-2">
  <strong>Luxurious Interiors:</strong> Experience the perfect blend of beauty and functionality with our meticulously crafted rugs.
</li>
<li class="mb-2">
  <strong>Innovative Designs:</strong> Each rug showcases creativity and elegance, ensuring your space stands out.
</li>
<li class="mb-2">
  <strong>Personalized Spaces:</strong> Find rugs that cater to your unique preferences, customized just for you.
</li>`,
  featuresListCol1T: `Exquisite Rugs<br />for Every Space`,
  featuresListCol1D: `Discover the essence of luxury interiors with RugRealm's latest collections. Elevate your surroundings with rugs that match your vision.`,
  featuresListCol2T: `Indulge in Interior<br />Luxury`,
  featuresListCol2D: `Experience the ultimate beauty and functionality with our sumptuous rugs. Transform your spaces with premium designs.`,
  featuresListCol3T: `Distinctive Rug Designs<br />for Every Home`,
  featuresListCol3D: `Upgrade your living spaces with our distinctive rug designs. Let your home reflect your taste for opulence.`,
  caseTitle: `Explore Our Rug Catalogue`,
  caseTitleDesc: `Unveiling RugRealm's Collections`,
  caseTitleDesc1T: `Elegant Rug Sets`,
  caseTitleDesc1D: `Indulge in the beauty of our elegant rug sets, designed to transform your spaces with style and sophistication.`,
  caseTitleDesc2T: `Luxury Rug Enhancements`,
  caseTitleDesc2D: `Enhance your home decor with our luxury rug enhancements, adding a touch of opulence to every room.`,
  caseTitleDesc3T: `Personalized Rug Solutions`,
  caseTitleDesc3D: `Customize your spaces with RugRealm, ensuring each rug is tailored to your unique vision and preferences.`,
  caseTitleDesc4T: `Exquisite Flooring Collection`,
  caseTitleDesc4D: `Experience the opulence of our flooring collection, elevating your home's aesthetics to new heights.`,
  mob1Title: `Elevate Your Space<br />with RugRealm!`,
  mob1Desc: `Step into the future of luxury interiors with our opulent rug collections.`,
  mob1Desc2: `From personal use to elegant home transformations, RugRealm is redefining the art of rugs. Dive into a world where every rug is a symbol of opulence.`,
  mob2Title: `Where Quality Meets<br />Interior Excellence.`,
  mob2Desc: `At RugRealm, rugs are more than just materials. They're about expressing your unique style and enhancing your daily living spaces.`,
  mob2Desc2: `Embrace the transformative power of innovative rug designs.`,
  custTitle: `Customer Testimonials`,
  custDesc: `Hear from our satisfied connoisseurs.`,
  cust1: `RugRealm's rugs are a game changer. Their beauty is unmatched, and they make my living spaces truly opulent.`,
  cust1Name: `Olivia Bennett`,
  cust1Prof: `Interior Designer`,
  cust2: `The quality and style of RugRealm rugs are beyond impressive. Every room feels like a work of art.`,
  cust2Name: `Robert Mitchell`,
  cust2Prof: `Homeowner`,
  cust3: `From everyday spaces to special projects, RugRealm has it all. The epitome of interior opulence.`,
  cust3Name: `Sophia Roberts`,
  cust3Prof: `Architect`,
  cotactTitle: `Ready for Opulent Interiors?<br />Join the RugRealm Experience`,
  logo2: `RugRealm`,
  mail: `contact@rugrealm.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © RugRealm. All rights reserved.`,
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
