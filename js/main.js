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
  logo: 'CreativeVision',
  heroTitle: `Capturing Memories & Emotions<br />with Creative Vision Photo Studio.`,
  heroDescription: `CreativeVision offers professional photography services and a comfortable environment for unforgettable photo sessions.`,
  featuresMainTitle: "Experience CreativeVision's Exceptional Services",
  featuresMainDescription:
    'Our skilled team of photographers is passionate about delivering high-quality, creative photography experiences.',
  featuresList: `<li class="mb-2">
  <strong>Portraits & Family Photos:</strong> Capture your special moments and create lasting memories with stunning portraits and family photos.
</li>
<li class="mb-2">
  <strong>Events & Corporate Photography:</strong> Trust CreativeVision to document your significant events or corporate functions with style and professionalism.
</li>
<li class="mb-2">
  <strong>Weddings & Engagements:</strong> Let our experienced photographers perfectly capture the essence of your special day.
</li>
<li class="mb-2">
  <strong>Fashion & Commercial:</strong> Showcase your brand or artistic vision with our expert fashion and commercial photography services.
</li>`,
  featuresListCol1T: `High-quality Equipment`,
  featuresListCol1D: `CreativeVision employs top-notch cameras and cutting-edge techniques to ensure captivating photography.`,
  featuresListCol2T: `Experienced Photographers`,
  featuresListCol2D: `Our skilled photographers are dedicated to producing compelling images and delivering exceptional customer service.`,
  featuresListCol3T: `Personalized Approach`,
  featuresListCol3D: `CreativeVision tailors every photography session to reflect your unique vision and preferences.`,
  caseTitle: `Our Photography Services`,
  caseTitleDesc: `Discover CreativeVision's Diverse Photography Offerings`,
  caseTitleDesc1T: `Studio Photography`,
  caseTitleDesc1D: `Benefit from our fully-equipped studio and professional lighting setups for stunning images.`,
  caseTitleDesc2T: `On-location Photography`,
  caseTitleDesc2D: `Our skilled photographers can travel to your chosen location for your perfect photo session.`,
  caseTitleDesc3T: `Photo Editing & Retouching`,
  caseTitleDesc3D: `CreativeVision offers post-production services to refine and enhance your images.`,
  caseTitleDesc4T: `Custom Photography Packages`,
  caseTitleDesc4D: `We create bespoke packages to accommodate your individual needs and preferences.`,
  mob1Title: `Capture Moments with<br />Unmatched Creativity!`,
  mob1Desc: `CreativeVision offers distinct and memorable photography experiences.`,
  mob1Desc2: `Experience the art of visual storytelling with our creative approach and dedication to quality.`,
  mob2Title: `Where Passion Meets<br />Professionalism.`,
  mob2Desc: `At CreativeVision, we combine creativity with technical expertise to bring your vision to life.`,
  mob2Desc2: `Let us transform your special moments into lasting memories with our exceptional photography services.`,
  custTitle: `Client Testimonials`,
  custDesc: `Hear what our satisfied clients have to say about CreativeVision.`,
  cust1: `Our family photoshoot with CreativeVision was a fantastic experience. The photographers are so talented and put us at ease throughout the session.`,
  cust1Name: `Laura Thompson`,
  cust1Prof: `Mother of Two`,
  cust2: `CreativeVision handled our company's product photography, and the results were outstanding. They have our highest recommendation.`,
  cust2Name: `James Collins`,
  cust2Prof: `Marketing Manager`,
  cust3: `Our wedding day is forever imprinted in our hearts, thanks to the beautiful work of CreativeVision's photographers.`,
  cust3Name: `Michaela Turner`,
  cust3Prof: `Newlywed`,
  contactTitle: `Ready to Create Beautiful Memories? Contact CreativeVision Today`,
  logo2: `CreativeVision`,
  mail: `info@creativevision.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © CreativeVision. All rights reserved.`,
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
