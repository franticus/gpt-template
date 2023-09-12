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
  logo: 'ChicCuts',
  heroTitle: `Stylish Transformation<br />at ChicCuts Salon.`,
  heroDescription: `ChicCuts specializes in cutting-edge hair styling solutions for all your beauty needs.`,
  featuresMainTitle: 'Welcome to ChicCuts',
  featuresMainDescription:
    "Transforming your look into a masterpiece with ChicCuts' innovative hairstyling services.",
  featuresList: `<li class="mb-2">
  <strong>Creative Haircuts:</strong> Explore a wide range of trendy hairstyles and personalized haircuts to suit your unique style.
</li>
<li class="mb-2">
  <strong>Effortless Glamour:</strong> Experience hassle-free beauty enhancement as we deliver top-quality results that leave you looking and feeling fabulous.
</li>
<li class="mb-2">
  <strong>Exceptional Styling:</strong> We prioritize excellence in every session. Our stylists are dedicated to crafting hairstyles that reflect your personality and flair.
</li>
<li class="mb-2">
  <strong>Personalized Beauty:</strong> Tailor your look to your vision. Our experienced team allows you to customize your style and preferences, providing a unique beauty experience.
</li>`,
  featuresListCol1T: `Creative Haircuts<br />for All Styles`,
  featuresListCol1D: `Unlock your style potential with ChicCuts' creative haircuts, ensuring your look stands out. Experience the convenience of top-quality styling without compromise.`,
  featuresListCol2T: `Effortless Beauty<br />Enhancement`,
  featuresListCol2D: `Indulge in a world of effortless beauty enhancement as ChicCuts provides you with curated styling options. Discover the perfect blend of convenience and glamour and embark on a journey towards exceptional beauty.`,
  featuresListCol3T: `Tailored Styling<br />for Every Client`,
  featuresListCol3D: `Customize your beauty experience with ChicCuts' tailored styling solutions designed to match your unique preferences. Whether it's a trendy makeover, special occasion look, or personalized beauty session, our versatile options cater to your specific needs.`,
  caseTitle: `Explore Our Styling Portfolio`,
  caseTitleDesc: `Discover ChicCuts' Beauty Solutions`,
  caseTitleDesc1T: `Trendsetting Hairstyles`,
  caseTitleDesc1D: `Set New Trends with ChicCuts`,
  caseTitleDesc2T: `Personalized Beauty Looks`,
  caseTitleDesc2D: `Unique Styles Tailored for You`,
  caseTitleDesc3T: `Effortless Beauty Services`,
  caseTitleDesc3D: `Glamorous Makeovers for Beauty Success`,
  caseTitleDesc4T: `Custom Beauty Experiences`,
  caseTitleDesc4D: `Unique Beauty Sessions for Your Vision`,
  mob1Title: `Elevate Your Beauty<br />Experience with ChicCuts!`,
  mob1Desc: `Enhance your style journey with our creative beauty solutions.`,
  mob1Desc2: `With a dedication that goes beyond the ordinary, we invite you to explore the expertise of our team and embark on a journey to discover the boundless potential of stunning beauty. Whether it's creating a remarkable look, preparing for a special occasion, or realizing your beauty vision, our team's commitment shines through every session, promising an experience that's beyond the norm.`,
  mob2Title: `Leading Beauty Solutions<br />for Your Glamour.`,
  mob2Desc: `Say goodbye to ordinary looks and welcome a future of effortless beauty where every session reflects ChicCuts' dedication to providing reliable and innovative styling options. As we empower you to make the most of your beauty vision, you can trust that our commitment to quality, flexibility, and convenience will redefine the way you style.`,
  mob2Desc2: `Experience the chic way to elevate your beauty.`,
  custTitle: `Client Testimonials`,
  custDesc: `Explore the feedback from our satisfied clients.`,
  cust1: `ChicCuts' styling is truly exceptional, elevating my beauty game. Their dedication is impressive.`,
  cust1Name: `Samantha Smith`,
  cust2: `ChicCuts' impact on my beauty transformation is remarkable, boosting my confidence. Their innovation is outstanding.`,
  cust2Name: `John Anderson`,
  cust3: `ChicCuts' service is exceptional, revolutionizing my styling choices. Their commitment is commendable.`,
  cust3Name: `Emily Davis`,
  cotactTitle: `Ready to elevate your beauty?<br />Get in touch with ChicCuts`,
  logo2: `ChicCuts`,
  mail: `info@chiccuts.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © ChicCuts. All rights reserved.`,
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
