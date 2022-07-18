const game = document.querySelector(".game");
const scoreResult = document.querySelector(".result");
const pScore = document.querySelector(".playerScore p");
const cScore = document.querySelector(".computerScore p");
const buttons = document.querySelectorAll(".buttons button");
const playerImg = document.querySelector(".playerImg img");
const computerImg = document.querySelector(".computerImg img");
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modal button");

let playerScore = 0;
let computerScore = 0;
const gameArr = ["rock", "paper", "scissors"];

function startGame() {
  modal.classList.toggle("reveal");
}

modalButton.addEventListener("click", () => {
  modal.classList.toggle("reveal");
  modal.style.pointerEvents = "none";
  game.classList.toggle("reveal");
});

buttons.forEach((item) => {
  item.addEventListener("click", (e) => {
    const playerChoise = e.target.getAttribute("data-value");
    const computerChoise = gameArr[Math.floor(Math.random() * gameArr.length)];
    playerImg.src = "./src/img/rock.png";
    computerImg.src = "./src/img/rock.png";

    playerImg.classList.toggle("move");
    computerImg.classList.toggle("move");
    game.classList.toggle("disableButtons");

    setTimeout(() => {
      playerImg.classList.toggle("move");
      computerImg.classList.toggle("move");
      game.classList.toggle("disableButtons");
      playerImg.src = `./src/img/${playerChoise}.png`;
      computerImg.src = `./src/img/${computerChoise}.png`;
      gameResult(playerChoise, computerChoise);
    }, 2000);
  });
});

function gameResult(playerValue, computerValue) {
  if (
    (playerValue === "rock" && computerValue === "scissors") ||
    (playerValue === "scissors" && computerValue === "paper") ||
    (playerValue === "paper" && computerValue === "rock")
  ) {
    playerScore++;
    pScore.innerHTML = playerScore;
    scoreResult.innerHTML = "Player Winn!!!";

    pScore.innerHTML = playerScore;
  } else if (playerValue === computerValue) {
    scoreResult.innerHTML = "Draw-Draw";
  } else {
    computerScore++;
    cScore.innerHTML = computerScore;
    scoreResult.innerHTML = "Computer Winn!!!";
  }
}

startGame();
