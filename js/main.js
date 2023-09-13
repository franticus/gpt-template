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
  logo: 'DoorwayDeluxe',
  heroTitle: `Discover Elegance at<br />DoorwayDeluxe's Premier Showroom.`,
  heroDescription: `Step into a world of exquisite doors and entryways, carefully curated for discerning homeowners.`,
  featuresMainTitle: 'Embark on a Doorway Journey with DoorwayDeluxe',
  featuresMainDescription:
    "Open the door to a world of possibilities with DoorwayDeluxe's exclusive collection.",
  featuresList: `<li class="mb-2">
  <strong>Premium Door Selection:</strong> Elevate your home's aesthetic with our premium range of doors, tailored to your style.
</li>
<li class="mb-2">
  <strong>Home Improvement Adventures:</strong> Experience the perfect blend of craftsmanship and functionality with our meticulously designed doors.
</li>
<li class="mb-2">
  <strong>Artisanal Entryways:</strong> Each entryway showcases artistry, ensuring your home stands out.
</li>
<li class="mb-2">
  <strong>Custom Door Solutions:</strong> Find doors that cater to your unique home, customized for your architectural pleasure.
</li>`,
  featuresListCol1T: `Elegance<br />for Every Home`,
  featuresListCol1D: `Explore the essence of home elegance with DoorwayDeluxe's latest collections. Elevate your living space with doors that match your style.`,
  featuresListCol2T: `Aesthetic Home Experiences<br />Await You`,
  featuresListCol2D: `Experience the ultimate delight of exquisite doors and entryways. Elevate your home's charm with our premium offerings.`,
  featuresListCol3T: `Distinctive Entryways<br />for Every Home`,
  featuresListCol3D: `Enhance your home's curb appeal with our distinctive entryway solutions. Let your home reflect your taste for beauty.`,
  caseTitle: `Explore Our Door Collection`,
  caseTitleDesc: `Unveiling DoorwayDeluxe's Selection`,
  caseTitleDesc1T: `Exquisite Door Selections`,
  caseTitleDesc1D: `Indulge in the richness of our exquisite door selections, designed to elevate your home's appeal with flair and sophistication.`,
  caseTitleDesc2T: `Home Aesthetic Enhancements`,
  caseTitleDesc2D: `Enhance your home's beauty with our architectural enhancements, adding a touch of uniqueness to every entryway.`,
  caseTitleDesc3T: `Customized Door Solutions`,
  caseTitleDesc3D: `Customize your home's entryways with DoorwayDeluxe, ensuring each door is tailored to your unique architectural vision and preferences.`,
  caseTitleDesc4T: `Elegant Home Transformations`,
  caseTitleDesc4D: `Experience the joy of our home transformation collection, elevating your living space to new heights.`,
  mob1Title: `Elevate Your Home<br />with DoorwayDeluxe!`,
  mob1Desc: `Step into the world of home elegance with our exquisite door collections.`,
  mob1Desc2: `From everyday entryways to grand home makeovers, DoorwayDeluxe is redefining the art of home aesthetics. Dive into a world where every door is a symbol of beauty.`,
  mob2Title: `Where Elegance Meets<br />Architectural Excellence.`,
  mob2Desc: `At DoorwayDeluxe, doors are more than just entryways. They're about enhancing your living experience and creating memorable first impressions.`,
  mob2Desc2: `Embrace the power of artisanal entryways.`,
  custTitle: `Customer Testimonials`,
  custDesc: `Hear from our satisfied homeowners and architectural enthusiasts.`,
  cust1: `DoorwayDeluxe's doors are a game changer. Their designs are unmatched, and they transformed my home into an architectural masterpiece.`,
  cust1Name: `Jessica Taylor`,
  cust1Prof: `Homeowner`,
  cust2: `The quality and variety of DoorwayDeluxe's doors are beyond impressive. Every entry feels like a grand entrance.`,
  cust2Name: `David Walker`,
  cust2Prof: `Architectural Enthusiast`,
  cust3: `From small upgrades to grand transformations, DoorwayDeluxe has it all. The epitome of home elegance.`,
  cust3Name: `Emily Harrison`,
  cust3Prof: `Interior Designer`,
  contactTitle: `Ready for an Elegant Home Upgrade?<br />Join the DoorwayDeluxe Experience`,
  logo2: `DoorwayDeluxe`,
  mail: `contact@doorwaydeluxe.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © DoorwayDeluxe. All rights reserved.`,
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
