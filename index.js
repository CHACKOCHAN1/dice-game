var randomNumber1=Math.random()*6;
randomNumber1=1+Math.floor(randomNumber1);
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll(".img1")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2=Math.random()*6;
randomNumber2=1+Math.floor(randomNumber2);
var randomDiceImage = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage;
var image2 = document.querySelectorAll(".img2")[0];
image2.setAttribute("src", randomImageSource);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
