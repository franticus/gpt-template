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
  logo: 'StyleStreet',
  heroTitle: `Discover Fashion Forward Looks<br />at StyleStreet.`,
  heroDescription: `StyleStreet offers modern and trendsetting clothing collections tailored for the fashion-conscious.`,
  featuresMainTitle: 'Step into StyleStreet',
  featuresMainDescription:
    "Elevate your wardrobe with StyleStreet's curated fashion collections.",
  featuresList: `<li class="mb-2">
  <strong>Trendy Collections:</strong> Dive into a wide array of chic outfits and accessories tailored for every season.
</li>
<li class="mb-2">
  <strong>Luxurious Comfort:</strong> Experience the blend of style and comfort with our meticulously crafted garments.
</li>
<li class="mb-2">
  <strong>Iconic Designs:</strong> Each piece speaks a language of elegance and modernity, ensuring you always stand out.
</li>
<li class="mb-2">
  <strong>Personalized Fashion:</strong> Find outfits that resonate with your unique fashion sense, curated just for you.
</li>`,
  featuresListCol1T: `Latest Fashion Trends<br />for All Occasions`,
  featuresListCol1D: `Discover the essence of modern style with StyleStreet's latest collections. Embrace a future where fashion meets functionality.`,
  featuresListCol2T: `Luxe & Comfort<br />in Every Thread`,
  featuresListCol2D: `Wrap yourself in luxury that doesn't compromise on comfort. Dive into a world of premium fabrics and sophisticated design.`,
  featuresListCol3T: `Distinctive Styles<br />for Every Individual`,
  featuresListCol3D: `Turn heads wherever you go with our distinctive styles. Let your attire reflect your personality.`,
  caseTitle: `Browse Our Fashion Catalogue`,
  caseTitleDesc: `Unveiling StyleStreet's Collections`,
  caseTitleDesc1T: `Seasonal Outfits`,
  caseTitleDesc1D: `Chic Attires for Every Season`,
  caseTitleDesc2T: `Designer Accessories`,
  caseTitleDesc2D: `Perfect Complements to Your Outfits`,
  caseTitleDesc3T: `Exclusive Editions`,
  caseTitleDesc3D: `For Those Seeking the Unique`,
  caseTitleDesc4T: `Versatile Wardrobe Staples`,
  caseTitleDesc4D: `Foundational Pieces for Every Fashionista`,
  mob1Title: `Upgrade Your Wardrobe<br />Experience with StyleStreet!`,
  mob1Desc: `Step into the new era of fashion with our contemporary collections.`,
  mob1Desc2: `From high-fashion runways to everyday streets, StyleStreet is redefining modern fashion. Dive into a shopping experience where every piece is a statement of elegance.`,
  mob2Title: `Where Quality Meets<br />Cutting-edge Design.`,
  mob2Desc: `At StyleStreet, fashion is more than just clothes. It's about expressing your identity and living your style.`,
  mob2Desc2: `Embrace the transformative power of fashion.`,
  custTitle: `Shopper Testimonials`,
  custDesc: `Hear from our fashion-forward clientele.`,
  cust1: `StyleStreet's collections are a game changer. Their attention to detail is unparalleled.`,
  cust1Name: `Madison Taylor`,
  cust1Prof: `Fashion Blogger`,
  cust2: `The elegance and quality of StyleStreet is beyond words. A stellar shopping experience every time.`,
  cust2Name: `Liam Walker`,
  cust2Prof: `Photographer`,
  cust3: `From day-to-day wear to special occasions, StyleStreet has it all. Truly exceptional.`,
  cust3Name: `Olivia Perez`,
  cust3Prof: `Fashion Designer`,
  cotactTitle: `Ready for a fashion revolution?<br />Join the StyleStreet movement`,
  logo2: `StyleStreet`,
  mail: `contact@stylestreet.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © StyleStreet. All rights reserved.`,
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
