

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

let playersTurn = 0

//Changes the tile to either X or O
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

 

 winX = /^X{3}|(...)X{3}|(X..){3}|.X..X..X.|(..X){3}|X...X...X|..X.X.X../gm
 winO = /^O{3}|(...)O{3}|(O..){3}|.O..O..O.|(..O){3}|O...O...O|..O.O.O../gm

  function checkWinner () {
    let boardCheck = gameBoard.join("");
    if (winX.test(boardCheck)){
       document.getElementById("winner").style.color = "green"
    } else if (winO.test(boardCheck)){
        document.getElementById("winner").style.color = "black"
    }
}


