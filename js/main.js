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
  logo: 'KeyTechHub',
  heroTitle: `Explore Cutting-edge Keyboard<br />Technology at KeyTechHub.`,
  heroDescription: `KeyTechHub offers a wide range of innovative keyboard solutions designed for tech enthusiasts.`,
  featuresMainTitle: 'Step into KeyTechHub',
  featuresMainDescription:
    "Elevate your typing experience with KeyTechHub's advanced keyboard collections.",
  featuresList: `<li class="mb-2">
  <strong>State-of-the-Art Keyboards:</strong> Dive into a world of advanced keyboards and accessories tailored for every need.
</li>
<li class="mb-2">
  <strong>Ultimate Typing Comfort:</strong> Experience the perfect blend of ergonomic design and typing efficiency with our meticulously crafted keyboards.
</li>
<li class="mb-2">
  <strong>Innovative Designs:</strong> Each keyboard showcases a blend of aesthetics and functionality, ensuring you stand out.
</li>
<li class="mb-2">
  <strong>Customized Typing Experience:</strong> Find keyboards that resonate with your unique typing style, tailored just for you.
</li>`,
  featuresListCol1T: `Cutting-edge Keyboard Technology<br />for All Needs`,
  featuresListCol1D: `Discover the essence of modern keyboard technology with KeyTechHub's latest collections. Embrace a future where technology meets functionality.`,
  featuresListCol2T: `Ergonomic Excellence<br />in Every Key Press`,
  featuresListCol2D: `Experience typing comfort like never before. Dive into a world of premium key switches and sleek design.`,
  featuresListCol3T: `Distinctive Keyboards<br />for Every Typist`,
  featuresListCol3D: `Upgrade your typing game with our distinctive keyboard designs. Let your workspace reflect your personality.`,
  caseTitle: `Explore Our Keyboard Catalogue`,
  caseTitleDesc: `Unveiling KeyTechHub's Collections`,
  caseTitleDesc1T: `Gaming Keyboards`,
  caseTitleDesc1D: `Experience precision and speed with our gaming-focused keyboards.`,
  caseTitleDesc2T: `Wireless Keyboards`,
  caseTitleDesc2D: `Enjoy freedom and flexibility with our wireless keyboard solutions.`,
  caseTitleDesc3T: `Mechanical Keyboards`,
  caseTitleDesc3D: `Discover the tactile satisfaction of mechanical keyboards.`,
  caseTitleDesc4T: `Programmable Keyboards`,
  caseTitleDesc4D: `Tailor your keyboard to your workflow with programmable options.`,
  mob1Title: `Enhance Your Typing<br />Experience with KeyTechHub!`,
  mob1Desc: `Step into the future of keyboard technology with our cutting-edge collections.`,
  mob1Desc2: `From gaming enthusiasts to professional typists, KeyTechHub is redefining the typing experience. Dive into a world where every keystroke is a testament to innovation.`,
  mob2Title: `Where Quality Meets<br />Cutting-edge Design.`,
  mob2Desc: `At KeyTechHub, keyboards are more than just tools. They're about expressing your style and enhancing your typing experience.`,
  mob2Desc2: `Embrace the transformative power of innovative keyboard technology.`,
  custTitle: `Customer Testimonials`,
  custDesc: `Hear from our tech-savvy clientele.`,
  cust1: `KeyTechHub's keyboards are a game changer. Their attention to detail is unmatched.`,
  cust1Name: `Emily Mitchell`,
  cust1Prof: `Tech Enthusiast`,
  cust2: `The precision and quality of KeyTechHub keyboards are beyond words. An exceptional typing experience every time.`,
  cust2Name: `Daniel Carter`,
  cust2Prof: `Software Developer`,
  cust3: `From gaming marathons to office tasks, KeyTechHub has it all. Truly outstanding.`,
  cust3Name: `Alexa Turner`,
  cust3Prof: `Gamer`,
  cotactTitle: `Ready for an Keyboard Revolution?<br />Join the KeyTechHub Community`,
  logo2: `KeyTechHub`,
  mail: `contact@keytechhub.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © KeyTechHub. All rights reserved.`,
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
