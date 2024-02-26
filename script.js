"use strict";

const userInput = prompt(
  "Choose between rock, paper and scissor. Make sure it is lowercase and correct spelling"
);

const inputArr = ["rock", "paper", "scissor"];
const randomNumber = Math.round(Math.random() * 2);
const computerInput = inputArr[randomNumber];

if (userInput == "rock" && computerInput == "paper") {
  console.log("You lose");
} else if (userInput == "rock" && computerInput == "scissor") {
  console.log("You won");
} else if (userInput == computerInput) {
  console.log("It's a draw");
} else if (userInput == "scissor" && computerInput == "rock") {
  console.log("You lose");
} else if (userInput == "scissor" && computerInput == "paper") {
  console.log("You won");
} else if (userInput == "paper" && computerInput == "scissor") {
  console.log("You lose");
} else if (userInput == "paper" && computerInput == "rock") {
  console.log("You won");
} else {
  console.log("Invalid Input");
}

console.log(`Your Choice : ${userInput}`);
console.log(`Computer's Choice : ${computerInput}`);
