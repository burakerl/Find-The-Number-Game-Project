// VARIABLES
let randomNumber = Math.trunc(Math.random() * 100);
let hp = 6;

//DOM ELEMENTS
const userNumber = document.getElementById("number");
const submitButton = document.getElementById("btn");
const hint = document.querySelector(".hint");
const hintContainer = document.querySelector(".hint-container");
const againButton = document.createElement("button");
againButton.classList.add("again-btn");
const heartContainer = document.querySelector(".heart-container");
const heart = document.querySelector(".fa-solid");
const imgContainer = document.querySelector(".img-container");
const imgNumber = document.createElement("h1");
imgNumber.classList.add("img-number");
const arrowUp = document.querySelector(".fa-arrow-up");
const arrowDown = document.querySelector(".fa-arrow-down");

// BUTTON CLICKS
submitButton.addEventListener("click", evaluateInput);
againButton.addEventListener("click", playAgain);

// FUNCTIONS
//Player wins
function winState() {
  hint.innerHTML = `Good Job!`;
  hintContainer.style.backgroundColor = "cyan";
  againButton.innerHTML = "Again";
  hintContainer.appendChild(againButton);
  submitButton.disabled = true;
}

//Get and Evaluate Input
function evaluateInput() {
  const number = userNumber.value;

  if (number === "") {
    alert("Lütfen Bir Sayı Girin.");
  } else if (isNaN(number)) {
    alert("Lütfen Bir Sayı Girin.");
  } else if (number > 100 || number < 1) {
    alert("Lütfen 1-100 arasında bir sayı girin.");
  } else if (number > randomNumber) {
    hint.innerHTML = `Guess lower!`;
    loseHp();
    highlightDownArrow();
  } else if (number < randomNumber) {
    hint.innerHTML = `Guess higher!`;
    loseHp();
    highlightUpArrow();
  } else if (number == randomNumber) {
    winState();
  }

  imgNumber.innerHTML = `${userNumber.value}`;
  imgContainer.appendChild(imgNumber);

  userNumber.value = "";
}

//Player loses
function loseState() {
  hint.innerHTML = `You lose! It was ${randomNumber}`;
  hintContainer.style.backgroundColor = "red";
  againButton.innerHTML = "Again";
  hintContainer.appendChild(againButton);
  submitButton.disabled = true;
  userNumber.disabled = true;
}

function loseHp() {
  heartContainer.removeChild(heartContainer.firstElementChild);
  hp -= 1;
  checkHp();
}
function checkHp() {
  if (hp == 0) {
    loseState();
  }
}

function playAgain() {
  location.reload();
}

function highlightUpArrow() {
  arrowUp.style.color = "black";
  arrowDown.style.color = "white";
}

function highlightDownArrow() {
  arrowDown.style.color = "black";
  arrowUp.style.color = "white";
}
