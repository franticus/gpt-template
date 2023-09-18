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
  logo: `KidsPlayLand`,
  heroTitle: `Explore Joy and Imagination at KidsPlayLand's Magical Toy Wonderland`,
  heroDescription: `KidsPlayLand offers a captivating collection of toys to ignite your child's creativity and playtime fun.`,
  featuresMainTitle: `Discover the KidsPlayLand Adventure`,
  featuresMainDescription: `Our team of playtime experts is committed to enhancing your child's world with delightful toy choices.`,
  featuresList: `<li class="mb-2">
  <strong>Diverse Toy Selection:</strong> Explore our wide range of toys to bring smiles and excitement to your child's world.
</li>
<li class="mb-2">
  <strong>Playtime Insights:</strong> Let us provide you with expert advice and ideas to make your child's playtime magical.
</li>
<li class="mb-2">
  <strong>Toy Accessories:</strong> Find the perfect additions to your child's toy collection for endless playtime possibilities.
</li>
<li class="mb-2">
  <strong>Expert Playtime Guidance:</strong> Learn how to create unforgettable play experiences with personalized advice from our experts.
</li>`,
  featuresListCol1T: `Diverse Toy Collection`,
  featuresListCol1D: `KidsPlayLand guarantees a wide variety of toys to fill your child's playtime with joy and excitement.`,
  featuresListCol2T: `Experienced Playtime Experts`,
  featuresListCol2D: `Our skilled playtime experts are passionate about making your child's world more magical and fun.`,
  featuresListCol3T: `Personalized Playtime Support`,
  featuresListCol3D: `KidsPlayLand caters to your child's specific playtime needs, offering personalized solutions and expert guidance.`,
  caseTitle: `Our Toy Collections`,
  caseTitleDesc: `Explore KidsPlayLand's Premium Toy Selection`,
  caseTitleDesc1T: `Educational Toys`,
  caseTitleDesc1D: `Discover our range of educational toys to inspire your child's learning and curiosity.`,
  caseTitleDesc2T: `Outdoor Play Equipment`,
  caseTitleDesc2D: `Experience outdoor play equipment designed to encourage active and imaginative adventures.`,
  caseTitleDesc3T: `Plush Toy Collection`,
  caseTitleDesc3D: `Find cuddly and adorable plush toys to become your child's new best friends.`,
  mob1Title: `Spark Your Child's Imagination<br />with KidsPlayLand!`,
  mob1Desc: `KidsPlayLand offers a world of joy for young adventurers, where you can nurture creativity and playtime happiness.`,
  mob1Desc2: `Join us and let the magic and fun of our toys fill your child's days with laughter and wonder.`,
  mob2Title: `Where Playtime Meets Adventure<br />Your Child's World, Their Way.`,
  mob2Desc: `At KidsPlayLand, we believe that every child deserves personalized playtime. Let us help you create unforgettable moments.`,
  mob2Desc2: `Transform your child's playtime into a world of imagination and exploration with our top-quality toy solutions.`,
  custTitle: `Happy Kids, Happy Parents`,
  custDesc: `Hear what our satisfied customers have to say about their KidsPlayLand playtime experiences.`,
  cust1: `I'm always amazed by the creativity and joy my child experiences with KidsPlayLand's toys. It's transformed our playtime.`,
  cust1Name: `Emma Johnson`,
  cust1Prof: `Proud Parent`,
  cust2: `KidsPlayLand made finding the perfect toys effortless. It's a game-changer for any parent.`,
  cust2Name: `David Miller`,
  cust2Prof: `Enthusiastic Dad`,
  cust3: `I love recommending KidsPlayLand's playtime accessories to friends. It's the perfect way to brighten their child's day.`,
  cust3Name: `Sophie White`,
  cust3Prof: `Playtime Enthusiast`,
  contactTitle: `Ready to Ignite Your Child's Imagination? Contact KidsPlayLand Today`,
  logo2: `KidsPlayLand`,
  mail: `info@kidsplayland.com`,
  phone: `+123-456-7890`,
  logo3: `Copyright © KidsPlayLand. All rights reserved.`,
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
