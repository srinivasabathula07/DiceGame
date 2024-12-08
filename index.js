


let diceno1 = Math.floor(Math.random()*6)+1;

let diceno2 = Math.floor(Math.random()*6)+1;

document.querySelector("img.img1").setAttribute("src", "./dice"+diceno1+".png");
document.querySelector("img.img2").setAttribute("src", "./dice"+diceno2+".png");
// document.querySelector("img").setAttribute("src", "./dice"+diceno2+".png");

if(diceno1>diceno2){
 document.querySelector("h1").innerHTML = "Player1 Wins..!"
}
else if(diceno1==diceno2){
 document.querySelector("h1").innerHTML = "Draw, play once Again..!"
}
else{
 document.querySelector("h1").innerHTML = "Player2 Wins..!"
}
