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
  logo: 'BizCardPrint',
  heroTitle: `BizCard Printing Solutions<br />for Professional Networking.`,
  heroDescription: `BizCardPrint offers comprehensive business card printing solutions for individuals and businesses.`,
  featuresMainTitle: 'Welcome to BizCardPrint',
  featuresMainDescription:
    "Elevating your professional image with BizCardPrint's high-quality business cards.",
  featuresList: `<li class="mb-2">
  <strong>Custom Business Cards:</strong> Discover a diverse range of
  design options and premium materials, tailored to your networking needs.
</li>
<li class="mb-2">
  <strong>Effortless Printing:</strong> Experience the utmost
  convenience as we deliver top-quality business cards right to your doorstep, saving you time and effort.
</li>
<li class="mb-2">
  <strong>Premium Quality:</strong> We prioritize excellence in
  every product. Our business cards are meticulously crafted, ensuring each card reflects professionalism and effectiveness.
</li>
<li class="mb-2">
  <strong>Personalized Design:</strong> Tailor your business card to your brand. Our intuitive platform allows you to customize designs and preferences, providing a unique networking experience.
</li>`,
  featuresListCol1T: `Custom Business<br />Card Solutions`,
  featuresListCol1D: `Elevate your professional image with BizCardPrint's custom business card solutions, ensuring you make a lasting impression. Experience the convenience of high-quality networking without compromise.`,
  featuresListCol2T: `Efficient Networking<br />Experiences`,
  featuresListCol2D: `Immerse yourself in a world of efficient networking experiences as BizCardPrint provides you with a curated range of business card options. Discover the perfect blend of convenience and professionalism, and embark on a journey towards enhanced networking.`,
  featuresListCol3T: `Tailored Branding<br />for Every Business`,
  featuresListCol3D: `Customize your networking experience with BizCardPrint's tailored business card designs designed to match every business's branding preferences. Whether it's unique designs, special finishes, or personalized branding, our versatile options cater to your unique networking needs.`,
  caseTitle: `Explore Our Business Card Collection`,
  caseTitleDesc: `Unveiling BizCardPrint's Networking Solutions`,
  caseTitleDesc1T: `Premium Card Designs`,
  caseTitleDesc1D: `Make an Impact Professionally`,
  caseTitleDesc2T: `Custom Networking`,
  caseTitleDesc2D: `Unique Designs for Your Brand`,
  caseTitleDesc3T: `Efficient Printing Service`,
  caseTitleDesc3D: `Quality Printing for Business Success`,
  caseTitleDesc4T: `Tailored Networking Solutions`,
  caseTitleDesc4D: `Personalized Cards for Your Professional Goals`,
  mob1Title: `Elevate Your Networking<br />Experience with BizCardPrint!`,
  mob1Desc: `Enhance your professional networking journey with our custom business card solutions.`,
  mob1Desc2: `With a dedication that goes beyond the ordinary, we invite you to explore the expertise of our team and embark on a journey to discover the boundless potential of successful networking. Whether it's creating a memorable impression, expanding your business, or building your brand, our team's commitment shines through every product, promising an experience that's beyond the norm.`,
  mob2Title: `Leading Networking Solutions<br />for Your Business.`,
  mob2Desc: `Say goodbye to missed opportunities or compromising on networking. Embrace the future of efficient networking where every business card reflects our dedication to providing businesses with reliable and exceptional options. As we empower you to make the most of your professional networking, you can trust that our commitment to quality, flexibility, and convenience will redefine the way you network.`,
  mob2Desc2: `Experience the smart way to boost your professional image.`,
  custTitle: `Customer Reviews`,
  custDesc: `Explore the testimonials from our satisfied customers.`,
  cust1: `BizCardPrint's business card designs are truly exceptional, elevating our professional networking. Their dedication is impressive.`,
  cust1Name: `Alex Johnson`,
  cust2: `BizCardPrint's impact on our business networking is remarkable, enhancing our brand image. Their innovation is outstanding.`,
  cust2Name: `David Anderson`,
  cust3: `BizCardPrint's service is exceptional, revolutionizing our networking choices. Their commitment is commendable.`,
  cust3Name: `Emily White`,
  cotactTitle: `Ready to elevate your networking experience?<br />Get in touch with BizCardPrint`,
  logo2: `BizCardPrint`,
  mail: `bizcardprint@mail.com`,
  phone: `+345-555-1234`,
  logo3: `Copyright © BizCardPrint. All rights reserved.`,
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
