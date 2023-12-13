const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");
let score = 0;

function createBalloon(){
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");
  
  const xPosition = Math.random() * (gameArea.offsetWidth - balloon.offsetWidth);
  balloon.style.left = xPosition + "px";
  
  const yPosition = Math.random() * (gameArea.offsetHeight - balloon.offsetHeight);
  balloon.style.top = yPosition + "px";
  
  gameArea.appendChild(balloon);
  
  balloon.addEventListener("click", () => {
    balloon.remove();
    increaseScore();
  });

setTimeout(() =>{
  balloon.remove();
  }, 3000);
}


function increaseScore(){
  score++;
  scoreDisplay.textContent = "Score: " + score;
}

setInterval(createBalloon, 300);