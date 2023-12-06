const consultBtn1 = document.querySelector('.consult_btn');
const consultBtn2 = document.querySelector('.preheader_consult');
const closeConsultBtn = document.querySelector('.modal__icon--close-consult');
const closeConsultOverlay = document.querySelector('.modal__overlay-consult');
const consultForm = document.querySelector('.modal--feedback');

consultBtn1.addEventListener('click', (e) => {
  consultForm.classList.add('modal--visible');
});

consultBtn2.addEventListener('click', (e) => {
  consultForm.classList.add('modal--visible');
});

closeConsultBtn.addEventListener('click', () => {
  consultForm.classList.remove('modal--visible');
});

closeConsultOverlay.addEventListener('click', () => {
  consultForm.classList.remove('modal--visible');
});
