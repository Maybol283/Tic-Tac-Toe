
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
   let win = document.querySelector("#winner")
    if (winX.test(boardCheck)){
      win.style.visibility = "visible";
      win.innerHTML = "Player 1 Wins!";
      win.style.color = "var(--c2)";
      sOne ++;
      document.querySelector("#scoreOne").innerHTML = sOne;
      setTimeout(menuOpen, 1000);

    } else if (winO.test(boardCheck)){
    win.style.visibility = "visible";
     win.innerHTML = "Player 2 Wins!";
     win.style.color = "var(--c2)";
        sTwo ++;
        document.querySelector("#scoreTwo").innerHTML = sTwo;
        setTimeout(menuOpen, 1000);

    } else if (Draw.test(boardCheck) && boardCheck.length == 9) {
      win.style.visibility = "visible";
      win.innerHTML = "Draw";
      win.style.color = "(--c2)";
        setTimeout(menuOpen, 1000);
    }
    
}


//Start game button
function startGame() {
  document.querySelector(".Menu").style.visibility = "hidden";
}

//Re-Open the menu
function menuOpen() {
  let tList = document.querySelectorAll(".tile");
 document.querySelector(".Menu").style.visibility = "visible";
 document.querySelector("#winner").style.visibility = "hidden";
 tList.forEach(t => t.innerHTML =" ");
 gameBoard.forEach((_, i) => {
  gameBoard[i] = "U";
});
}
