"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

// document.querySelector(".number").textContent = number;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const checkBtn = document.querySelector(".check");

checkBtn.addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("⛔No number");
  } else if (guess === number) {
    document.querySelector(".number").textContent = number;
    displayMessage("🎉Correct number!!");

    document.querySelector("body").style.backgroundColor = "#c4D9bc";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? "📈Too high" : "📉Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("❌You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});

const againBtn = document
  .querySelector(".again")
  .addEventListener("click", function () {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = " ";
    document.querySelector(".number").textContent = "?";

    document.querySelector("body").style.backgroundColor = "#facde5";
  });

const greet = document.querySelector(".greet");
greet.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

const hideModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

modalClose.addEventListener("click", hideModal);

overlay.addEventListener("click", hideModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    hideModal();
  }
});
