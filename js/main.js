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
  logo: 'PixelPaintingPro',
  heroTitle: `Unlock Your Creative Potential<br />with PixelPaintingPro Digital Art School.`,
  heroDescription: `PixelPaintingPro offers professional digital art courses and a supportive community for nurturing your artistic talents.`,
  featuresMainTitle: 'Discover What PixelPaintingPro Offers',
  featuresMainDescription:
    'Our experienced team of instructors is dedicated to helping you develop your digital art skills.',
  featuresList: `<li class="mb-2">
  <strong>Fundamentals of Digital Art:</strong> Learn the essential techniques and concepts to kickstart your digital art journey.
</li>
<li class="mb-2">
  <strong>Advanced Digital Painting:</strong> Dive deep into advanced topics and elevate your digital painting skills.
</li>
<li class="mb-2">
  <strong>Character Design & Illustration:</strong> Create captivating characters and stunning illustrations with our expert guidance.
</li>
<li class="mb-2">
  <strong>Concept Art & World Building:</strong> Explore the world of concept art and build imaginative new worlds in your art.
</li>`,
  featuresListCol1T: `State-of-the-Art Tools`,
  featuresListCol1D: `PixelPaintingPro provides access to cutting-edge software and hardware for your creative journey.`,
  featuresListCol2T: `Experienced Instructors`,
  featuresListCol2D: `Our skilled instructors are passionate about nurturing your artistic talents and providing valuable feedback.`,
  featuresListCol3T: `Personalized Learning`,
  featuresListCol3D: `PixelPaintingPro tailors each course to your individual skill level and artistic aspirations.`,
  caseTitle: `Our Digital Art Courses`,
  caseTitleDesc: `Explore PixelPaintingPro's Comprehensive Course Offerings`,
  caseTitleDesc1T: `Digital Painting Fundamentals`,
  caseTitleDesc1D: `Master the basics of digital painting and build a solid foundation for your artistic journey.`,
  caseTitleDesc2T: `Advanced Techniques`,
  caseTitleDesc2D: `Take your skills to the next level with our advanced digital painting techniques.`,
  caseTitleDesc3T: `Character Design Mastery`,
  caseTitleDesc3D: `Learn to create compelling characters and bring your imaginative worlds to life.`,
  caseTitleDesc4T: `Concept Art & World Building`,
  caseTitleDesc4D: `Dive into the world of concept art and create captivating new universes.`,
  mob1Title: `Unleash Your Imagination<br />with PixelPaintingPro!`,
  mob1Desc: `PixelPaintingPro offers a unique platform for unleashing your creative potential through digital art.`,
  mob1Desc2: `Join our community of artists and let your imagination run wild with our expert guidance.`,
  mob2Title: `Where Creativity Knows<br />No Boundaries.`,
  mob2Desc: `At PixelPaintingPro, we believe that creativity has no limits. Let us help you push your artistic boundaries.`,
  mob2Desc2: `Transform your artistic visions into stunning digital masterpieces with our courses.`,
  custTitle: `Student Testimonials`,
  custDesc: `Hear what our satisfied students have to say about PixelPaintingPro.`,
  cust1: `PixelPaintingPro's courses have been a game-changer for me. I've seen significant improvement in my digital art skills.`,
  cust1Name: `Sarah Anderson`,
  cust1Prof: `Digital Artist`,
  cust2: `I highly recommend PixelPaintingPro to anyone looking to explore digital art. The instructors are fantastic, and the community is supportive.`,
  cust2Name: `John Smith`,
  cust2Prof: `Aspiring Illustrator`,
  cust3: `PixelPaintingPro has helped me turn my passion for art into a career. I'm grateful for the skills I've gained here.`,
  cust3Name: `Emily Davis`,
  cust3Prof: `Professional Artist`,
  contactTitle: `Ready to Explore Your Artistic Journey? Contact PixelPaintingPro Today`,
  logo2: `PixelPaintingPro`,
  mail: `info@pixelpaintingpro.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © PixelPaintingPro. All rights reserved.`,
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
