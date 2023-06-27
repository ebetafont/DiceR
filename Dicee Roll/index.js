var encabezado1 = document.getElementsByTagName("h1")[0];

var imagenP1 = document.getElementsByClassName("img1")[0];
var imagenP2 = document.getElementsByClassName("img2")[0];

var noP1 = Math.floor(Math.random()* 6) + 1;
var noP2 = Math.floor(Math.random()* 6) + 1;

imagenP1.setAttribute("src", "./images/dice" + noP1 + ".png");
imagenP2.setAttribute("src", "./images/dice" + noP2 + ".png");

if(noP1 > noP2){
    encabezado1.innerHTML = "Player One Wins!"
}else if(noP1 < noP2){
    encabezado1.innerHTML = "Player Two Wins!"
}else{
    encabezado1.innerHTML = "Draw"
}
