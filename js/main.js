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
  logo: 'DecorPalace',
  heroTitle: `Discover Exquisite Wallpaper<br />Designs at DecorPalace.`,
  heroDescription: `DecorPalace offers a diverse collection of stunning wallpaper solutions crafted for interior design enthusiasts.`,
  featuresMainTitle: 'Step into DecorPalace',
  featuresMainDescription:
    "Elevate your interior spaces with DecorPalace's premium wallpaper collections.",
  featuresList: `<li class="mb-2">
  <strong>Elegant Wallpaper Selection:</strong> Immerse yourself in a world of sophisticated wallpapers and accessories tailored for every style.
</li>
<li class="mb-2">
  <strong>Luxurious Décor:</strong> Experience the perfect blend of aesthetics and functionality with our meticulously crafted wallpapers.
</li>
<li class="mb-2">
  <strong>Innovative Designs:</strong> Each wallpaper showcases a blend of creativity and elegance, ensuring your spaces stand out.
</li>
<li class="mb-2">
  <strong>Personalized Interior:</strong> Find wallpapers that resonate with your unique design vision, customized just for you.
</li>`,
  featuresListCol1T: `Exquisite Wallpaper Selection<br />for All Interiors`,
  featuresListCol1D: `Discover the essence of modern interior design with DecorPalace's latest collections. Transform your spaces into a reflection of your style.`,
  featuresListCol2T: `Luxurious Ambiance<br />in Every Room`,
  featuresListCol2D: `Experience the perfect ambiance with our luxurious wallpapers. Dive into a world of premium designs and elegant decor.`,
  featuresListCol3T: `Distinctive Designs<br />for Every Home`,
  featuresListCol3D: `Upgrade your interior spaces with our distinctive wallpaper designs. Let your home reflect your personality.`,
  caseTitle: `Explore Our Wallpaper Catalogue`,
  caseTitleDesc: `Unveiling DecorPalace's Collections`,
  caseTitleDesc1T: `Nature-Inspired Themes`,
  caseTitleDesc1D: `Bring the beauty of the outdoors inside with our nature-inspired wallpaper collections.`,
  caseTitleDesc2T: `Artistic Murals`,
  caseTitleDesc2D: `Transform your walls into canvases with our artistic mural wallpapers.`,
  caseTitleDesc3T: `Textured Elegance`,
  caseTitleDesc3D: `Experience the tactile appeal of textured wallpapers that add depth to your spaces.`,
  caseTitleDesc4T: `Custom Wallcoverings`,
  caseTitleDesc4D: `Tailor your walls to your unique vision with custom wallpaper options.`,
  mob1Title: `Elevate Your Décor<br />Experience with DecorPalace!`,
  mob1Desc: `Step into the future of interior design with our exquisite wallpaper collections.`,
  mob1Desc2: `From residential spaces to commercial projects, DecorPalace is redefining interior aesthetics. Dive into a world where every wall is a canvas of elegance.`,
  mob2Title: `Where Quality Meets<br />Creative Design.`,
  mob2Desc: `At DecorPalace, wallpapers are more than just decor. They're about expressing your unique style and enhancing your living spaces.`,
  mob2Desc2: `Embrace the transformative power of innovative wallpaper design.`,
  custTitle: `Client Testimonials`,
  custDesc: `Hear from our design-savvy clientele.`,
  cust1: `DecorPalace's wallpapers are a game changer. Their attention to detail is unmatched.`,
  cust1Name: `Sophia Anderson`,
  cust1Prof: `Interior Designer`,
  cust2: `The elegance and quality of DecorPalace wallpapers are beyond words. An exceptional design experience every time.`,
  cust2Name: `James Parker`,
  cust2Prof: `Architect`,
  cust3: `From residential makeovers to commercial projects, DecorPalace has it all. Truly exceptional.`,
  cust3Name: `Ava Turner`,
  cust3Prof: `Homeowner`,
  cotactTitle: `Ready for a Design Revolution?<br />Join the DecorPalace Community`,
  logo2: `DecorPalace`,
  mail: `contact@decorpalace.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © DecorPalace. All rights reserved.`,
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
