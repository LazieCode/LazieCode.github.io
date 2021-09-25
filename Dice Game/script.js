var dice1 = document.querySelector("#dice1");
var dice2 = document.querySelector("#dice2");
var heading = document.querySelector("h1");
var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);

dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

if(randomNumber1 > randomNumber2)
{
    heading.textContent = "🎌Player 1 Wins"
}

else if(randomNumber1 < randomNumber2){

    heading.textContent = "Player 2 Wins🎌"
}

else{
    heading.textContent = "Draw!"
}