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
  logo: 'ShadeBazaar',
  heroTitle: `Transform Your Space with Elegance<br />at ShadeBazaar Curtain Emporium.`,
  heroDescription: `ShadeBazaar offers an exquisite collection of curtains and window coverings to elevate your interior.`,
  featuresMainTitle: 'Discover What Sets ShadeBazaar Apart',
  featuresMainDescription:
    'Our dedicated team of curtain experts is committed to enhancing the ambiance of your living spaces.',
  featuresList: `<li class="mb-2">
  <strong>Stunning Curtain Selection:</strong> Explore our wide range of curtains, from classic designs to unique and modern styles.
</li>
<li class="mb-2">
  <strong>Custom Window Solutions:</strong> Let us tailor window coverings to match your home's aesthetic perfectly.
</li>
<li class="mb-2">
  <strong>Home Decor & Accessories:</strong> Find the ideal home decor and accessories to complete your interior design.
</li>
<li class="mb-2">
  <strong>Expert Curtain Care Tips:</strong> Learn how to maintain your curtains for long-lasting beauty and functionality.
</li>`,
  featuresListCol1T: `Quality Fabrics`,
  featuresListCol1D: `ShadeBazaar guarantees top-quality fabrics and materials for all your curtain needs.`,
  featuresListCol2T: `Experienced Designers`,
  featuresListCol2D: `Our skilled designers are passionate about creating window coverings that elevate your space.`,
  featuresListCol3T: `Personalized Assistance`,
  featuresListCol3D: `ShadeBazaar caters to your specific requirements, offering personalized curtain solutions and expert advice.`,
  caseTitle: `Our Curtain Collection`,
  caseTitleDesc: `Explore ShadeBazaar's Diverse Curtain Offerings`,
  caseTitleDesc1T: `Classic Drapery`,
  caseTitleDesc1D: `Discover the timeless elegance of classic drapery in a variety of colors and designs.`,
  caseTitleDesc2T: `Modern Window Treatments`,
  caseTitleDesc2D: `Experience the allure of contemporary window treatments, carefully curated for your taste.`,
  caseTitleDesc3T: `Custom Curtain Solutions`,
  caseTitleDesc3D: `Find tailor-made curtains to fit your unique windows and interior design preferences.`,
  caseTitleDesc4T: `Home Decor Accessories`,
  caseTitleDesc4D: `Explore our collection of home decor accessories to complement your curtains and space.`,
  mob1Title: `Elevate Your Interior<br />with ShadeBazaar!`,
  mob1Desc: `ShadeBazaar offers a haven for curtain enthusiasts, where you can transform your living spaces with elegance.`,
  mob1Desc2: `Join us and let the beauty and style of our curtains enhance your home.`,
  mob2Title: `Where Curtains Reflect<br />Your Personal Style.`,
  mob2Desc: `At ShadeBazaar, we believe that curtains should be an extension of your personality. Let us help you express your taste.`,
  mob2Desc2: `Turn your living spaces into cozy retreats with our curated curtain collections.`,
  custTitle: `Customer Testimonials`,
  custDesc: `Hear what our satisfied customers have to say about ShadeBazaar.`,
  cust1: `I'm always amazed by the quality and style of the curtains at ShadeBazaar. Their designs truly transformed my home.`,
  cust1Name: `Emily Anderson`,
  cust1Prof: `Interior Enthusiast`,
  cust2: `ShadeBazaar made redecorating my office space a breeze with their custom curtain solutions. It's a game-changer.`,
  cust2Name: `Michael Harris`,
  cust2Prof: `Business Professional`,
  cust3: `I love gifting ShadeBazaar's home decor accessories to friends. It's the perfect way to add a touch of elegance to their homes.`,
  cust3Name: `Olivia Smith`,
  cust3Prof: `Thoughtful Gift Giver`,
  contactTitle: `Ready to Elevate Your Interior? Contact ShadeBazaar Today`,
  logo2: `ShadeBazaar`,
  mail: `info@shadebazaar.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © ShadeBazaar. All rights reserved.`,
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
