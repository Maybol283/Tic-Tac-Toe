
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
   
    if (playersTurn == 0){
    tile.innerHTML = "X";
       playersTurn = 1;
       gameBoard[tileIndex - 1] = "X";
    } else {
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

    if (winX.test(boardCheck)){
      document.getElementById("winner").style.visibility = "visible";
      document.getElementById("winner").innerHTML = "Player 1 Wins!";
      document.getElementById("winner").style.color = "var(--c2)";
      sOne ++;
      document.getElementById("scoreOne").innerHTML = sOne;
      setTimeout(menuOpen, 1000);

    } else if (winO.test(boardCheck)){
      document.getElementById("winner").style.visibility = "visible";
      document.getElementById("winner").innerHTML = "Player 2 Wins!";
        document.getElementById("winner").style.color = "var(--c2)";
        sTwo ++;
        document.getElementById("scoreTwo").innerHTML = sTwo;
        setTimeout(menuOpen, 1000);

    } else if (Draw.test(boardCheck) && boardCheck.length == 9) {
      document.getElementById("winner").style.visibility = "visible";
      document.getElementById("winner").innerHTML = "Draw";
        document.getElementById("winner").style.color = "(--c2)";
        setTimeout(menuOpen, 1000);
    }
    
}


//Start game button
function startGame() {
  document.querySelector(".Menu").style.visibility = "hidden";
}
//Re-Open the menu
function menuOpen() {
  document.querySelector(".Menu").style.visibility = "visible";
 let tList = document.querySelectorAll(".tile");
 tList.forEach(t => t.innerHTML ="");
 gameBoard.forEach(i => gameBoard[i] = "U");
}
