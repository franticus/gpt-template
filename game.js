let isPlaying = false;
let crashTime;
let multiplier = 1.0;
let jetElement = document.getElementById('jetFire');
let jetFire = document.getElementById('fire');
let playButton = document.getElementById('playButton');
let cashoutButton = document.getElementById('cashoutButton');
let multiplierText = document.getElementById('multiplier');
let betAmountInput = document.getElementById('betAmount');
let placeBetButton = document.getElementById('placeBetButton');
let totalBalanceElement = document.getElementById('totalBalance');

let totalBalance = 1000;

placeBetButton.onclick = function () {
  const betAmount = parseFloat(betAmountInput.value);
  if (!isNaN(betAmount) && betAmount > 0 && betAmount <= totalBalance) {
    totalBalance -= betAmount;
    totalBalanceElement.textContent = `Общий счет: ${totalBalance.toFixed(2)}`;
    playButton.disabled = false;
    placeBetButton.disabled = true;
  } else {
    alert('Пожалуйста, введите правильное значение ставки.');
  }
};

playButton.onclick = function () {
  isPlaying = true;
  playButton.disabled = true;
  cashoutButton.disabled = false;
  multiplier = 1.0;
  crashTime = Date.now() + Math.random() * 5000 + 100;

  (function flyJet() {
    if (isPlaying && Date.now() < crashTime) {
      multiplier += 0.01;

      multiplierText.textContent = `Множитель: x${multiplier.toFixed(2)}`;
      jetElement.style.transform = `translateY(${-multiplier * 30}px)`;
      jetFire.classList.remove('hide');
      requestAnimationFrame(flyJet);
    } else {
      jetExplode();
    }
  })();
};

cashoutButton.onclick = function () {
  isPlaying = false;
  const winnings = betAmountInput.value * multiplier;
  alert(`Вы забрали выигрыш! Выигрыш: ${winnings.toFixed(2)}`);
  totalBalance += winnings;
  totalBalanceElement.textContent = `Общий счет: ${totalBalance.toFixed(2)}`;
  jetFire.classList.add('hide');
  resetGame();
};

function jetExplode() {
  if (isPlaying) {
    alert(`Взрыв! Игра окончена. Выигрыш: 0.00`);
    resetGame();
    jetFire.classList.add('hide');
  }
}

function resetGame() {
  isPlaying = false;
  playButton.disabled = true;
  cashoutButton.disabled = true;
  placeBetButton.disabled = false;
  jetElement.style.transform = 'translateY(0px)';
  multiplierText.textContent = 'Множитель: x1.0';
  betAmountInput.value = '';
}
