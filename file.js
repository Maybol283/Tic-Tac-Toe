


//Inital gameBoard state
let gameBoard = [
"U", "U", "U",
"U", "U", "U",
"U", "U", "U",
];


// Creates tiles 1 - 9
for (let i = 1; i <= 9; i++) {
    document.getElementById(i).addEventListener("click", function () {
      makeMove(i);

    });
  }
//Player Score
let sOne = 0;
let sTwo = 0;

//Player turn tracker
let playersTurn = 0

//Changes the tile to either X or O and updates players turn
const  makeMove = tileIndex => {
    let tile = document.getElementById(tileIndex) 
   
    if (playersTurn == 0 && tile.innerHTML == ""){
    tile.innerHTML = "X";
       playersTurn = 1;
       gameBoard[tileIndex - 1] = "X";
    } else if (tile.innerHTML ==""){
        tile.innerHTML = "O";
        playersTurn = 0;
        gameBoard[tileIndex - 1] = "O";
    }
    checkWinner();
 }

 
//Win checker Regex's
 winX = /^X{3}|...X{3}...|......X{3}|(X..){3}|.X..X..X.|(..X){3}|X...X...X|..X.X.X../gm
 winO = /^O{3}|...O{3}...|......O{3}|(O..){3}|.O..O..O.|(..O){3}|O...O...O|..O.O.O../gm
 Draw =/^([^U])+$/

 //Win checker function
  function checkWinner () {
    let boardCheck = gameBoard.join("");
   let win = document.querySelector("#winner")
    if (winX.test(boardCheck)){
      reverseAnimation ()
     // win.style.visibility = "visible";
     // win.innerHTML = "Player 1 Wins!";
     // win.style.color = "var(--c2)";
      sOne ++;
      document.querySelector("#scoreOne").innerHTML = sOne;
      setTimeout(reset, 1000);

    } else if (winO.test(boardCheck)){
    win.style.visibility = "visible";
     win.innerHTML = "Player 2 Wins!";
     win.style.color = "var(--c2)";
        sTwo ++;
        document.querySelector("#scoreTwo").innerHTML = sTwo;
        setTimeout(reset, 1000);

    } else if (Draw.test(boardCheck) && boardCheck.length == 9) {
      win.style.visibility = "visible";
      win.innerHTML = "Draw";
      win.style.color = "(--c2)";
        setTimeout(reset, 1000);
    }
     
}

//Start game button
function startGame() {
  $(".start").style.visibility = "hidden";
  document.querySelector(".grid").style.visibility = "visible";
  document.querySelector(".wrapperOne").style.visibility = "visible";
  document.querySelector(".wrapperTwo").style.visibility = "visible";
 startAnimations();
}


//Re-Open the menu
function reset() {
 let tList = document.querySelectorAll(".tile");
 document.querySelector("#winner").style.visibility = "hidden";
 tList.forEach(t => t.innerHTML ="");
 gameBoard.forEach((_, i) => {
  gameBoard[i] = "U";
});
}

// Gameboard animations
function startAnimations () {
  document.querySelector(".left-center").classList.add("left-A");
  document.querySelector(".right-center").classList.add ("right-A") 
  document.querySelector(".mid-bot").classList.add ("down") 
  document.querySelector(".mid-top").classList.add ("up") 
  document.querySelector(".mid-center").classList.add ("fade") 
  document.querySelector(".wrapperOne").classList.add ("left-A") 
  document.querySelector(".wrapperTwo").classList.add ("right-A") 
}
  
function reverseAnimation () {
  let aList = document.querySelectorAll(".animation");
  aList.forEach (a =>
    a.style.removeProperty = "animation"

     )
}