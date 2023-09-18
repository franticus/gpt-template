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
  logo: `TurboChillFans`,
  heroTitle: `Experience Ultimate Cooling with TurboChillFans' Fan Selection`,
  heroDescription: `TurboChillFans offers a diverse range of fans to keep you cool and comfortable.`,
  featuresMainTitle: `Discover the TurboChillFans Advantage`,
  featuresMainDescription: `Our team of cooling experts is committed to enhancing your comfort with top-notch fan choices.`,
  featuresList: `<li class="mb-2">
    <strong>Versatile Fan Selection:</strong> Explore our wide range of fans to keep your space comfortable and well-ventilated.
  </li>
  <li class="mb-2">
    <strong>Cooling Insights:</strong> Let us provide you with expert advice and tips to create a refreshing environment with our fans.
  </li>
  <li class="mb-2">
    <strong>Fan Accessories:</strong> Find the perfect additions to optimize your fan's performance and achieve a comfortable atmosphere.
  </li>
  <li class="mb-2">
    <strong>Expert Cooling Guidance:</strong> Learn how to keep cool and relaxed in any season with personalized advice from our experts.
  </li>`,
  featuresListCol1T: `Versatile Fan Collection`,
  featuresListCol1D: `TurboChillFans guarantees a wide variety of fans to suit your needs and maintain a comfortable environment.`,
  featuresListCol2T: `Experienced Cooling Enthusiasts`,
  featuresListCol2D: `Our skilled cooling enthusiasts are passionate about helping you find the perfect fan to enhance your space.`,
  featuresListCol3T: `Personalized Comfort Support`,
  featuresListCol3D: `TurboChillFans caters to your specific cooling needs, offering personalized solutions and expert guidance.`,
  caseTitle: `Our Fan Collections`,
  caseTitleDesc: `Explore TurboChillFans' Fan Selection`,
  caseTitleDesc1T: `Modern Cooling Fans`,
  caseTitleDesc1D: `Discover our range of modern cooling fans to keep your space comfortable and stylish.`,
  caseTitleDesc2T: `High-Performance Ventilation`,
  caseTitleDesc2D: `Experience high-performance ventilation solutions designed to keep your environment fresh and cool.`,
  caseTitleDesc3T: `Energy-Efficient Cooling`,
  caseTitleDesc3D: `Find energy-efficient fans that provide comfort while helping you save on energy costs.`,
  mob1Title: `Stay Cool and Comfortable<br />with TurboChillFans!`,
  mob1Desc: `TurboChillFans offers a world of cooling solutions where you can create a refreshing atmosphere tailored to your needs.`,
  mob1Desc2: `Join us and let the cooling performance of our fans keep you relaxed year-round.`,
  mob2Title: `Where Comfort Meets Efficiency<br />Your Cooling Solutions, Your Way.`,
  mob2Desc: `At TurboChillFans, we believe that everyone deserves a comfortable environment. Let us help you find the perfect fan.`,
  mob2Desc2: `Transform your space into a haven of comfort and freshness with our top-quality fan solutions.`,
  custTitle: `Satisfied Customers, Comfortable Spaces`,
  custDesc: `Hear what our happy customers have to say about their TurboChillFans' fan experiences.`,
  cust1: `I'm always amazed by the performance and style TurboChillFans' fans provide. It's transformed my living space.`,
  cust1Name: `Michaela Davis`,
  cust1Prof: `Homeowner`,
  cust2: `TurboChillFans made finding the perfect fan effortless. It's a game-changer for any space.`,
  cust2Name: `David Johnson`,
  cust2Prof: `Interior Designer`,
  cust3: `I love recommending TurboChillFans' fan accessories to friends. It's the perfect way to optimize any fan.`,
  cust3Name: `Sarah Anderson`,
  cust3Prof: `DIY Enthusiast`,
  contactTitle: `Ready to Enhance Your Comfort? Contact TurboChillFans Today`,
  logo2: `TurboChillFans`,
  mail: `info@turbochillfans.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © TurboChillFans. All rights reserved.`,
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
