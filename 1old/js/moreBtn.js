const moreBtnFirst = document.querySelector('.more_btn_first');
const moreBtnSecond = document.querySelector('.more_btn_second');
const moreBtnThird = document.querySelector('.more_btn_third');

const moreTextFirst = document.querySelector('.more_first');
const moreTextSecond = document.querySelector('.more_second');
const moreTextThird = document.querySelector('.more_third');

const moreBtnArr = [moreBtnFirst, moreBtnSecond, moreBtnThird];
const moreTextArr = [moreTextFirst, moreTextSecond, moreTextThird];

const clickMoreHandler = (elem, moreBtnArr, moreTextArr) => {
  if (moreTextArr[moreBtnArr.indexOf(elem)].style.display === "block") {
    moreTextArr[moreBtnArr.indexOf(elem)].style.display = "none";
    return;
  };
  moreTextArr.forEach(text => {
    text.style.display = "none";
  });
  moreTextArr[moreBtnArr.indexOf(elem)].style.display = "block";
};

moreBtnArr.forEach((elem) => {
  elem.addEventListener("click", () => {
    clickMoreHandler(elem, moreBtnArr, moreTextArr);
  });
});