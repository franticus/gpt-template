// let isPlaying = false;
// let crashTime;
// let multiplier = 1.0;
// let jetElement = document.getElementById('jet');
// let playButton = document.getElementById('playButton');
// let cashoutButton = document.getElementById('cashoutButton');
// let multiplierText = document.getElementById('multiplier');

// playButton.onclick = function () {
//   isPlaying = true;
//   playButton.disabled = true;
//   cashoutButton.disabled = false;
//   multiplier = 1.0;
//   crashTime = Date.now() + Math.random() * 20000 + 1000; // случайное время взрыва

//   (function flyJet() {
//     if (isPlaying && Date.now() < crashTime) {
//       multiplier += 0.01;
//       multiplierText.textContent = `Множитель: x${multiplier.toFixed(2)}`;
//       jetElement.style.transform = `translateY(${-multiplier * 10}px)`; // Поднимаем самолет
//       requestAnimationFrame(flyJet);
//     } else {
//       jetExplode();
//     }
//   })();
// };

// cashoutButton.onclick = function () {
//   isPlaying = false;
//   alert(`Вы забрали выигрыш! Множитель: x${multiplier.toFixed(2)}`);
//   resetGame();
// };

// function jetExplode() {
//   alert('Взрыв! Игра окончена.');
//   resetGame();
// }

// function resetGame() {
//   isPlaying = false;
//   playButton.disabled = false;
//   cashoutButton.disabled = true;
//   jetElement.style.transform = 'translateY(0px)';
//   multiplierText.textContent = 'Множитель: x1.0';
// }


let utm = window.location.href.split('?').pop(); //получаем utm
console.log('utm:', utm)


document.getElementById('link').onclick = function() { //по клику на кнопку
   window.location = 'https://sitenew2023.com/HPqDgWWm?'+utm; //переправляем пользователя на новый адрес
}