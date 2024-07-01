function genRand() {
  var rnd = Math.random();
  rnd = Math.floor(rnd * 6) + 1;
  return rnd;
}

function setLeftDice() {

    var rnd = genRand();
    var imgLeft = "./images/dice" + rnd + ".png";
    document.querySelector(".img1").setAttribute("src", imgLeft);
    return rnd;
}

function setRightDice() {

    var rnd = genRand();
    var imgRight = "./images/dice" + rnd + ".png";
    document.querySelector(".img2").setAttribute("src", imgRight);
    return rnd;
}

var rndL = setLeftDice();
var rndR = setRightDice();

function decideTitle(){

    var x = document.querySelector("#winner");
    
    if(rndL < rndR){
        x.innerHTML = "Player 2 Won 🚩";
    }else if(rndR < rndL){
        x.innerHTML = "Player 1 Won 🚩";
    }else{
        x.innerHTML = "Match Draw.! Retry";
    }
}

decideTitle();
