var randomNumber1 = Math.floor(Math.random()*6) + 1;
var img1_src = 'images/dice' + randomNumber1 + '.png';
document.querySelector(".img1").setAttribute("src", img1_src);
var randomNumber2 = Math.floor(Math.random()*(7-randomNumber1)) + randomNumber1;
var img2_src = 'images/dice' + randomNumber2 + '.png';
document.querySelector(".img2").setAttribute("src", img2_src);

if (randomNumber2 === randomNumber1){
  document.querySelector("h1").textContent = "Draw!💑";
}
else {
  document.querySelector("h1").textContent = "🎃Zhuqx Wins!";
}
