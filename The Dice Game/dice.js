// let p1 = Math.floor(Math.random() * 7);
// let p2 = Math.floor(Math.random() * 7);

// To change image
// document.querySelector(".player2 img").setAttribute("src","./images/dice3.png");

// Choosing winner
// let winner = "Player 1 is winner";
// undefined
// document.querySelector(".restart a").textContent = winner;
// "Player 1 is winner"

// To Randomize
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

winner = document.querySelector("#restart a").textContent;
let p1 = getRandomInt(1, 6);
document
  .querySelector(".player1 img")
  .setAttribute("src", "./images/dice" + p1 + ".png");

let p2 = getRandomInt(1, 6);
document
  .querySelector(".player2 img")
  .setAttribute("src", "./images/dice" + p2 + ".png");

if (p1 > p2) {
  winner = "🚩Player-1 is Winner!";
} else if (p1 === p2) {
  winner = "Draw!";
} else {
  winner = "Player-2 is Winner!🚩";
}

document.querySelector("#restart a").textContent = winner;
