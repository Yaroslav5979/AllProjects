let scorse, roundScore, activePlayer, gamePlayin, countSix, diceTWONum;

init();

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    let diceDOM = document.querySelector(".dice");
    let diceDOMtwo = document.querySelector(".dice-two");

    diceDOM.style.display = "block";
    diceDOMtwo.style.display = "block";

    let dice = Math.floor(Math.random() * 6) + 1;
    let diceTwo = Math.floor(Math.random() * 6) + 1;
    diceTWONum = diceTwo;

    diceDOM.setAttribute("src", `dice-${dice}.png`);
    diceDOMtwo.setAttribute("src", `dice-${diceTwo}.png`);

    if (dice !== 1) {
      if (diceTWONum === 6) {
        document.querySelector(`#score-${activePlayer}`).textContent = 0;
      }

      if (dice === 6) {
        countSix++;
        if (countSix === 2) {
          countSix = 0;
          nexPlayer();
        }
      }
      roundScore += dice + diceTwo;
      document.querySelector(
        `#current-${activePlayer}`
      ).textContent = roundScore;
    } else {
      nexPlayer();
    }

    console.log(roundScore);
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
    writeOff();

    let setNumber = document.getElementById("set-number").value;
    let winnerNum;

    if (setNumber) {
      winnerNum = setNumber;
    } else {
      winnerNum = 20;
    }

    document.querySelector(`#score-${activePlayer}`).textContent =
      scorse[activePlayer];

    if (scorse[activePlayer] >= winnerNum) {
      document.querySelector(`#name-${activePlayer}`).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(`.player-${activePlayer}-panel`)
        .classList.toggle("winner");
      gamePlaying = false;
    }

    nexPlayer();
  }
});
function writeOff() {
  if (diceTWONum !== 6) {
    scorse[activePlayer] += roundScore;
  } else {
    scorse[activePlayer] = 0;
  }
}

function nexPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
    countSix = 0;
    document.querySelector(".dice").style.display = "none";
    document.querySelector(".dice-two").style.display = "none";
    document.querySelector(`.player-0-panel`).classList.remove("active");
    document.querySelector(`.player-1-panel`).classList.add("active");
  } else {
    document.querySelector(`.player-0-panel`).classList.add("active");
    document.querySelector(`.player-1-panel`).classList.remove("active");
    activePlayer = 0;
    countSix = 0;
  }

  roundScore = 0;
  document.querySelector(".dice").style.display = "none";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scorse = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  countSix = 0;
  diceTWONum = 0;

  document.querySelector(".dice").style.display = "none";
  document.querySelector(".dice-two").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.getElementById(`name-0`).textContent = `Player 1`;
  document.getElementById(`name-1`).textContent = `Player 2`;

  document.querySelector(`.player-0-panel`).classList.remove("winner");
  document.querySelector(`.player-1-panel`).classList.remove("winner");
  document.querySelector(`.player-0-panel`).classList.remove("active");
  document.querySelector(`.player-1-panel`).classList.remove("active");

  document.querySelector(`.player-0-panel`).classList.add("active");
}
