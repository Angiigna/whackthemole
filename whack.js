let moleTile;
let score = 0;
let timeLeft = 60;
let timer;

window.onload = function(){
  setGame();
}

function setGame(){
  
  for(let i = 0; i < 9; i++){
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", selectTile);
    document.getElementById("grid").appendChild(tile);
  } 
  let moleInterval = setInterval(setMole, 750);
  timer = setInterval(function(){
    timeLeft--;
    document.getElementById("timer").innerText = `Time: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(moleInterval); // Stop mole movement
      clearInterval(timer);
      alert("Game Over! Time's up.");
    }
  }, 1000); 
}

function chooseTile() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();   
}

function setMole(){
  if (moleTile){
    moleTile.innerHTML = "";
  }
  let mole = document.createElement("img");
  mole.src = "./Adobe Express - file.png";
  let num = chooseTile();
  moleTile = document.getElementById(num);
  moleTile.appendChild(mole);
}

function selectTile(){
  if(this == moleTile){
    score += 10;
    document.getElementById("score").innerText = score.toString();
  }
  
}