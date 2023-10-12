let player1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage1 = "./images/Dice" + player1 + ".png";
document.querySelector(".img1").setAttribute("src", randomDiceImage1);

let player2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage2 = "./images/Dice" + player2 + ".png";
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

if (player1 > player2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (player1 < player2) {
  document.querySelector("h1").textContent = "Player 2 Wins!";
} else {
  document.querySelector("h1").textContent = "Draw. Roll Again!";
}
