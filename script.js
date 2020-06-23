var color = document.getElementById("color");
var classic = document.getElementById("classic");
var combi = document.getElementById("combi");
var squares = document.querySelectorAll(".square");
var colors = randomColorGenerator(2);
var playAgain = document.getElementById("playAgain");
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");


var c = 0;
var d = 0;
for(var i=0; i<9;i++){
  squares[i].style.backgroundColor = "rgb(245, 245, 245)";
}
color.addEventListener("click",function colorPlay(){
 reset();
 color.classList.add("colorSelected");
 classic.classList.remove("classicSelected");
 reset();
//  combi.classList.remove("combiSelected");
 var cpu = document.getElementById("cpu");
 var player = document.getElementById("player");
//  player1.style.backgroundColor = colors[0];
//  player2.style.backgroundColor = colors[1];
 cpu.addEventListener("click", cpuSelected);
 player.addEventListener("click",playerSelected);
}
);
classic.addEventListener("click",function classicPlay(){
  reset();
  classic.classList.add("classicSelected");
  color.classList.remove("colorSelected");
  reset();
  // combi.classList.remove("combiSelected");
  var cpu = document.getElementById("cpu");
  var player = document.getElementById("player");
 //  player1.style.backgroundColor = colors[0];
 //  player2.style.backgroundColor = colors[1];
  cpu.addEventListener("click", cpuSelected);
  player.addEventListener("click",playerSelected);
}
);

// combi.addEventListener("click",function combiPlay(){
//   reset();
//   classic.classList.remove("classicSelected");
//   color.classList.remove("colorSelected");
//   combi.classList.add("combiSelected");
//   var cpu = document.getElementById("cpu");
//   var player = document.getElementById("player");
//  //  player1.style.backgroundColor = colors[0];
//  //  player2.style.backgroundColor = colors[1];
//   cpu.addEventListener("click", cpuSelected);
//   player.addEventListener("click",playerSelected);
// }
// );


// function playGame(){
//   if(cpu.classList.contains("modeSelected")){
//     alert("cpucode");
//   }
//   else if(player.classList.contains("modeSelected")){
//     alert("playercode");
//   }
// }
function cpuSelected(){
  cpu.classList.add("modeSelected");
  player.classList.remove("modeSelected");
  // playGame();
  d = 0;
  reset();
  playSet();
  playerPlays();
  return 0;
}
function playerSelected(){
  cpu.classList.remove("modeSelected");
  player.classList.add("modeSelected");
  // playGame();
  reset();
  playerPlays();
  return 0;
}
function playSet(){
  var p = cpuRandomPosition();
  if(squares[p].style.backgroundColor == "rgb(245, 245, 245)"){
    squares[p].style.backgroundColor = colors[0];
    if(!(color.classList.contains("colorSelected"))){
      squares[p].textContent = "X";
      squares[p].classList.add("turnX")
    }
    if(winnerPlayer1()){
      playAgain.textContent = "Play Again";
      playAgain.style.backgroundColor = "#3ffc9ad2";
    }
    return true;
  }
  return false;
}
// function cpuPlays(){
//   alert("how am i even here?");
//   playSet();
//   for(var i=0;i< 9;i++){
//     alert("hereC");
//     squares[i].addEventListener("click",function playerPlay(){
  
//     })
//   }
//  }
function playerPlays(){
  d = 1;
  // alert("here");
  for(var i=0;i< 9;i++){
    squares[i].addEventListener("click", function fill(){
      if(cpu.classList.contains("modeSelected")){
        if(this.style.backgroundColor == "rgb(245, 245, 245)"){
          this.style.backgroundColor = colors[1];
          if(!(color.classList.contains("colorSelected"))){
            // alert("hello");
            this.textContent = "O";
            this.classList.add("turnO")
            playAgain.textContent ="Restart";
            playAgain.style.backgroundColor ="red";
            c++;
            if(winnerPlayer2()){
              playAgain.textContent = "Play Again";
              playAgain.style.backgroundColor = "#3ffc9ad2";
            }
            else if(cpu.classList.contains("modeSelected")){
              while(!playSet()){
              //  alert("how");
              }
            }
          }
          else{
            playAgain.textContent ="Restart";
            playAgain.style.backgroundColor ="red";
            c++;
            if(winnerPlayer2()){
              playAgain.textContent = "Play Again";
              playAgain.style.backgroundColor = "#3ffc9ad2";
            }
            else if(cpu.classList.contains("modeSelected")){
              while(!playSet()){
              //  alert("how");
              }
            }
          }  
        }
        else{
         i--;
        }
      }
      else{
        if(c%2 == 0){
          if(this.style.backgroundColor == "rgb(245, 245, 245)"){
            this.style.backgroundColor = colors[0];
            if(!(color.classList.contains("colorSelected"))){
              this.textContent = "X";
              this.classList.add("turnX");
              // alert("nig");
            if(winnerPlayer1()){
              // gameOver.textContent ="Game Over";
              // gameOver.style.backgroundColor ="red";
              playAgain.textContent = "Play Again";
              playAgain.style.backgroundColor = "#3ffc9ad2";
            }
            else{
              if(c==8){
                // gameOver.textContent ="Game Over";
                // gameOver.style.backgroundColor ="red";
                playAgain.textContent ="Play Again";
                playAgain.style.backgroundColor ="#3ffc9ad2";
              }
              else{
                player2.style.backgroundColor = colors[1];
                playAgain.textContent ="Restart";
                playAgain.style.backgroundColor ="red";
              }
            }
            c++;
            }
            else{
              if(winnerPlayer1()){
                // gameOver.textContent ="Game Over";
                // gameOver.style.backgroundColor ="red";
                playAgain.textContent = "Play Again";
                playAgain.style.backgroundColor = "#3ffc9ad2";
              }
              else{
                if(c==8){
                  // gameOver.textContent ="Game Over";
                  // gameOver.style.backgroundColor ="red";
                  playAgain.textContent ="Play Again";
                  playAgain.style.backgroundColor ="#3ffc9ad2";
                }
                else{
                  player2.style.backgroundColor = colors[1];
                  playAgain.textContent ="Restart";
                  playAgain.style.backgroundColor ="red";
                }
              }
              c++;
            }
            // alert("nig");
            
          }
          else{
            i--;
          }
        }
        else{
          if(this.style.backgroundColor == "rgb(245, 245, 245)"){
            this.style.backgroundColor = colors[1];
            if(!(color.classList.contains("colorSelected"))){
              this.textContent = "O";
              this.classList.add("turnO");
               // alert("nig2");
                if(winnerPlayer2()){
                // gameOver.textContent ="Game Over";
                // gameOver.style.backgroundColor ="red";
                  playAgain.textContent = "Play Again";
                  playAgain.style.backgroundColor = "#3ffc9ad2";
            }
                else{
                  player1.style.backgroundColor = colors[0];
                  playAgain.textContent ="Restart";
                  playAgain.style.backgroundColor ="red";
            }
            c++;
            }
            else{
                 // alert("nig2");
            if(winnerPlayer2()){
              // gameOver.textContent ="Game Over";
              // gameOver.style.backgroundColor ="red";
              playAgain.textContent = "Play Again";
              playAgain.style.backgroundColor = "#3ffc9ad2";
            }
            else{
              player1.style.backgroundColor = colors[0];
              playAgain.textContent ="Restart";
              playAgain.style.backgroundColor ="red";
            }
            c++;
          }
            }
          else{
            i--;
          }
        }
      }
    });
  }
}
function cpuRandomPosition(){
  var p = Math.floor(Math.random()*9 );
  return p;
}
function reset(){
  colors = randomColorGenerator(2);
  player1.style.backgroundColor = colors[0];
  player2.style.backgroundColor = colors[1];
  playAgain.textContent ="New Colors"
  playAgain.style.backgroundColor ="#2eacf5";
  if(cpu.classList.contains("modeSelected")){
    for(var i =0;i<9;i++){
      squares[i].style.backgroundColor = "rgb(245, 245, 245)";
      squares[i].textContent = "";
      squares[i].classList.remove("turnX");
      squares[i].classList.remove("turnO");
    }
    player.classList.remove("modeSelected");
    c = 0 ;
    if(d==1){
      cpuSelected();
    }
  }
  else if(player.classList.contains("modeSelected")){
    for(var i =0;i<9;i++){
      squares[i].style.backgroundColor = "rgb(245, 245, 245)";
      squares[i].textContent = "";
      squares[i].classList.remove("turnX");
      squares[i].classList.remove("turnO");
    }
    cpu.classList.remove("modeSelected");
    c = 0;
  }
  
}
playAgain.textContent ="New Colors"
playAgain.style.backgroundColor ="#2eacf5";
playAgain.addEventListener("click",reset);
function randomColorGenerator(num){
  var arr = [];
  for(var i =0 ; i<num ; i++){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    arr[i] = "rgb("+ r +", "+ g +", "+ b + ")";
  }
  return arr;
}
function winnerPlayer1(){
  if(squares[0].style.backgroundColor == colors[0] && squares[4].style.backgroundColor == colors[0] && squares[8].style.backgroundColor == colors[0]){
    for(var i =0;i<9;i++){
      squares[i].style.backgroundColor = colors[0];
    }
    return true;
  }
  else if(squares[0].style.backgroundColor == colors[0] && squares[1].style.backgroundColor == colors[0] && squares[2].style.backgroundColor == colors[0]){
    for(var i =0;i<9;i++){
      squares[i].style.backgroundColor = colors[0];
    }
    return true;
  }
  else if(squares[3].style.backgroundColor == colors[0] && squares[4].style.backgroundColor == colors[0] && squares[5].style.backgroundColor == colors[0]){
    for(var i =0;i<9;i++){
      squares[i].style.backgroundColor = colors[0];
    }
    return true;
  }
  else if(squares[6].style.backgroundColor == colors[0] && squares[7].style.backgroundColor == colors[0] && squares[8].style.backgroundColor == colors[0]){
    for(var i =0;i<9;i++){
      squares[i].style.backgroundColor = colors[0];
    }
    return true;
  }
  else if(squares[0].style.backgroundColor == colors[0] && squares[3].style.backgroundColor == colors[0] && squares[6].style.backgroundColor == colors[0]){
    for(var i =0;i<9;i++){
      squares[i].style.backgroundColor = colors[0];
    }
    return true;
  }
  else if(squares[1].style.backgroundColor == colors[0] && squares[4].style.backgroundColor == colors[0] && squares[7].style.backgroundColor == colors[0]){
    for(var i =0;i<9;i++){
      squares[i].style.backgroundColor = colors[0];
    }
    return true;
  }
  else if(squares[2].style.backgroundColor == colors[0] && squares[5].style.backgroundColor == colors[0] && squares[8].style.backgroundColor == colors[0]){
    for(var i =0;i<9;i++){
      squares[i].style.backgroundColor = colors[0];
    }
    return true;
  }
  else if(squares[2].style.backgroundColor == colors[0] && squares[4].style.backgroundColor == colors[0] && squares[6].style.backgroundColor == colors[0]){
    for(var i =0;i<9;i++){
      squares[i].style.backgroundColor = colors[0];
    }
    return true;
  }
}
function winnerPlayer2(){
  if(squares[0].style.backgroundColor == colors[1] && squares[4].style.backgroundColor == colors[1] && squares[8].style.backgroundColor == colors[1]){
    for(var i =0;i<9;i++){
      squares[i].style.backgroundColor = colors[1];
    }
    return true;
  }
  else if(squares[0].style.backgroundColor == colors[1] && squares[1].style.backgroundColor == colors[1] && squares[2].style.backgroundColor == colors[1]){
    for(var i =0;i<9;i++){
      squares[i].style.backgroundColor = colors[1];
    }
    return true;
  }
  else if(squares[3].style.backgroundColor == colors[1] && squares[4].style.backgroundColor == colors[1] && squares[5].style.backgroundColor == colors[1]){
    for(var i =0;i<9;i++){
      squares[i].style.backgroundColor = colors[1];
    }
    return true;
  }
  else if(squares[6].style.backgroundColor == colors[1] && squares[7].style.backgroundColor == colors[1] && squares[8].style.backgroundColor == colors[1]){
    for(var i =0;i<9;i++){
      squares[i].style.backgroundColor = colors[1];
    }
    return true;
  }
  else if(squares[0].style.backgroundColor == colors[1] && squares[3].style.backgroundColor == colors[1] && squares[6].style.backgroundColor == colors[1]){
    for(var i =0;i<9;i++){
      squares[i].style.backgroundColor = colors[1];
    }
    return true;
  }
  else if(squares[1].style.backgroundColor == colors[1] && squares[4].style.backgroundColor == colors[1] && squares[7].style.backgroundColor == colors[1]){
    for(var i =0;i<9;i++){
      squares[i].style.backgroundColor = colors[1];
    }
    return true;
  }
  else if(squares[2].style.backgroundColor == colors[1] && squares[5].style.backgroundColor == colors[1] && squares[8].style.backgroundColor == colors[1]){
    for(var i =0;i<9;i++){
      squares[i].style.backgroundColor = colors[1];
    }
    return true;
  }
  else if(squares[2].style.backgroundColor == colors[1] && squares[4].style.backgroundColor == colors[1] && squares[6].style.backgroundColor == colors[1]){
    for(var i =0;i<9;i++){
      squares[i].style.backgroundColor = colors[1];
    }
    return true;
  }
}