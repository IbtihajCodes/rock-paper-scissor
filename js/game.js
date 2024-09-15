"use strict";

const humanChoice = document.querySelectorAll(".human-choice");
const winner = document.querySelector(".heading-winner");
const myScore = document.querySelector(".myScore");
const computerScore = document.querySelector(".computerScore");
let myChoice;

// Getting Computer Input
const gameChoices = [0, 1, 2];

// Getting the User Input

// Playing game Logic

const playRound = function (myChoice, computerChoice) {
  if (myChoice === computerChoice) {
    winner.innerHTML = `D R A W`;
  } else if (
    (myChoice === 0 && computerChoice === 1) ||
    (myChoice === 1 && computerChoice === 3) ||
    (myChoice === 2 && computerChoice === 0)
  ) {
    winner.innerHTML = `You lost the round, Computer Won`;
    computerScore.innerHTML = Number(computerScore.innerHTML) + 1;
  } else if (
    (myChoice === 0 && computerChoice === 2) ||
    (myChoice === 1 && computerChoice === 0) ||
    (myChoice === 2 && computerChoice === 1)
  ) {
    winner.innerHTML = `Computer lost the round, You won`;
    myScore.innerHTML = Number(myScore.innerHTML) + 1;
  }
};

const playGame = function (computer, user) {
  if (computer.innerHTML >= 5) {
    winner.innerHTML = `Computer Has Won The Whole Game`;
  } else if (user.innerHTML >= 5) {
    winner.innerHTML = `Congratulations! You have Won the Whole game.`;
  }
};

humanChoice.forEach((choice, index) => {
  choice.addEventListener("click", function () {
    let computerChoice = Math.trunc(Math.random() * 3);
    myChoice = index;
    console.log(computerChoice);
    playRound(myChoice, computerChoice);
    playGame(computerScore, myScore);
  });
});

const button = document.querySelector(".btn");
button.addEventListener("click", function () {
  myScore.innerHTML = 0;
  computerScore.innerHTML = 0;
  winner.innerHTML = "";
});
