const principeTitleVac = document.querySelector(
  '.principe_list_item_title_vac'
);
const principeTitleMag = document.querySelector(
  '.principe_list_item_title_mag'
);

const principeImgVac = document.querySelector('.principe_list_img_vac');
const principeImgMag = document.querySelector('.principe_list_img_mag');

principeTitleVac.addEventListener('mouseover', () => {
  principeTitleVac.classList.add('principe_list_item_title_gradient');
  principeTitleMag.classList.remove('principe_list_item_title_gradient');
  principeImgVac.style.display = 'block';
  principeImgMag.style.display = 'none';
});

principeTitleMag.addEventListener('mouseover', () => {
  principeTitleVac.classList.remove('principe_list_item_title_gradient');
  principeTitleMag.classList.add('principe_list_item_title_gradient');
  principeImgVac.style.display = 'none';
  principeImgMag.style.display = 'block';
});
