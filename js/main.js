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
  logo: 'SwiftFreight',
  heroTitle: `Efficient and Reliable<br />Freight Solutions with SwiftFreight.`,
  heroDescription: `SwiftFreight offers a range of shipment services and logistics solutions to streamline your freight transportation across the globe.`,
  featuresMainTitle: "Experience SwiftFreight's Unparalleled Services",
  featuresMainDescription:
    'With our committed team of logistics professionals, SwiftFreight is dedicated to providing seamless and efficient freight transportation services.',
  featuresList: `<li class="mb-2">
  <strong>End-to-End Logistics Solutions:</strong> Streamline your supply chain with our comprehensive freight services, customized to your specific needs.
</li>
<li class="mb-2">
  <strong>Fast and Reliable Shipping:</strong> Ensure your cargo arrives on time, every time, with SwiftFreight's dependable and rapid transportation services.
</li>
<li class="mb-2">
  <strong>Real-Time Tracking and Reporting:</strong> Gain complete control and visibility of your shipments with our tracking and reporting technologies.
</li>
<li class="mb-2">
  <strong>Dedicated Customer Support:</strong> Receive exceptional customer service from our experienced freight experts.
</li>`,
  featuresListCol1T: `Worldwide Network`,
  featuresListCol1D: `SwiftFreight's extensive global network ensures efficient and seamless delivery of your cargo.`,
  featuresListCol2T: `Customized Freight Solutions`,
  featuresListCol2D: `Our tailored logistics services adapt to your business requirements for an optimized freight experience.`,
  featuresListCol3T: `Cutting-Edge Technology`,
  featuresListCol3D: `Stay updated and informed with our innovative technology solutions that enhance shipment visibility and management.`,
  caseTitle: `Our Freight Services`,
  caseTitleDesc: `Explore SwiftFreight's Comprehensive Service Offerings`,
  caseTitleDesc1T: `Air Freight`,
  caseTitleDesc1D: `Experience fast and reliable air cargo transportation for urgent or time-sensitive shipments.`,
  caseTitleDesc2T: `Sea Freight`,
  caseTitleDesc2D: `Take advantage of cost-effective ocean shipping solutions for larger or bulk cargo.`,
  caseTitleDesc3T: `Land Freight`,
  caseTitleDesc3D: `Utilize our extensive ground transportation network for efficient and flexible deliveries.`,
  caseTitleDesc4T: `Customs Clearance`,
  caseTitleDesc4D: `Simplify your shipping process with our professional customs clearance services.`,
  mob1Title: `Experience Unparalleled<br />Freight Solutions!`,
  mob1Desc: `SwiftFreight leads the way in efficient and reliable shipping.`,
  mob1Desc2: `Experience the ease of global freight transportation with our end-to-end logistics solutions and dedicated customer support.`,
  mob2Title: `Where Trust Meets<br />Unrivaled Service.`,
  mob2Desc: `At SwiftFreight, we go above and beyond to ensure your cargo's safe and timely delivery.`,
  mob2Desc2: `Experience the SwiftFreight difference and elevate your freight transportation experience.`,
  custTitle: `Client Testimonials`,
  custDesc: `Read what our satisfied clients have to say about SwiftFreight.`,
  cust1: `SwiftFreight truly stands by their commitment to fast and reliable shipping. I couldn't be happier with their services.`,
  cust1Name: `Laura Thompson`,
  cust1Prof: `Supply Chain Manager`,
  cust2: `Their tailored solutions and cutting-edge technology made managing our shipments a breeze. SwiftFreight exceeded my expectations.`,
  cust2Name: `James Collins`,
  cust2Prof: `Logistics Coordinator`,
  cust3: `SwiftFreight's superb customer support and seamless shipping process have made them our go-to logistics provider.`,
  cust3Name: `Michaela Turner`,
  cust3Prof: `Import/Export Specialist`,
  contactTitle: `Ready to Transform Your<br />Freight Experience? Contact SwiftFreight Today`,
  logo2: `SwiftFreight`,
  mail: `info@swiftfreight.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © SwiftFreight. All rights reserved.`,
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
