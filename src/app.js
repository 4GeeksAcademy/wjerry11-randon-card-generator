/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  button();
  generateCard();
};

let generateCard = () => {
  let suit = ["♦", "♣", "♥", "♠"];
  let number = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "Q",
    "J",
    "A"
  ];
  let randomSuit = suit[Math.floor(Math.random() * suit.length)];
  let randomNumber = number[Math.floor(Math.random() * number.lenght)];
  if (suit === "♥" || suit === "♦") {
    document.querySelector(".icon").style.color = "red";
  } else {
    document.querySelector(".icon").style.color = "black";
  }
  document.querySelector(".top").style.color = randomSuit;
  document.querySelector(".bottom").style.color = randomSuit;
  document.querySelector(".number").style.color = randomNumber;
};
let button = () => {
  let newCard = document.querySelector(".btn");
  newCard.addEventListener("click", function() {
    generateCard();
  });
};
