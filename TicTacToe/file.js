

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
   let win = $("#winner")
    if (winX.test(boardCheck)){
      reverseAnimations();
      setTimeout(reset, 1000);
      win.show();
      win.text("Player 1 Wins!");
      win.css("color", "var(--c2");
      sOne ++;
      $("#scoreOne").text(sOne);
      

    } else if (winO.test(boardCheck)){
      reverseAnimations ()
      setTimeout(reset, 1000);
      win.show();
      win.text("Player 2 Wins!");
      win.css("color", "var(--c2")
        sTwo ++;
       $("#scoreTwo").text(sTwo);

    } else if (Draw.test(boardCheck) && boardCheck.length == 9) {
      reverseAnimations ();
      setTimeout(reset, 1000);
      win.show();
      win.text("Draw");
      win.css("color", "var(--c2")
        
    }
     
}


//Start game button
function startGame() {
  $(".start").hide();
  $(".tile").show();
  $(".wrapperOne").show();
  $(".wrapperTwo").show();
 startAnimations();
}


//Re-Open the menu
function reset() {
 let tList = document.querySelectorAll(".tile");
 $("#winner").hide()
 tList.forEach(t => t.innerHTML ="");
 gameBoard.forEach((_, i) => {
  gameBoard[i] = "U";
});
}

// Gameboard animations
function startAnimations() {
<<<<<<< HEAD:TicTacToe/file.js
=======
  $(".grid").show();
  $(".tile").show();
>>>>>>> parent of c3eb9de (Fixed Animations/ Started Hover Function):file.js
  $(".mid-center").addClass("fade").show();
  $(".left-center").addClass("left-A").show();
  $(".right-center").addClass("right-A").show();
  $(".mid-bot").addClass("down").show();
  $(".mid-top").addClass("up").show();
  $(".wrapperOne").addClass("left-A").show();
  $(".wrapperTwo").addClass("right-A").show();
<<<<<<< HEAD:TicTacToe/file.js
  setTimeout(function () {
    $(".grid").show();
  }, 800)
=======


>>>>>>> parent of c3eb9de (Fixed Animations/ Started Hover Function):file.js
}
  

function reverseAnimations() {
  $(".tile").hide();
  $(".mid-center").removeClass("fade hide show").hide();
  $(".left-center").removeClass("left-A hide show").hide();
  $(".right-center").removeClass("right-A hide show").hide();
  $(".mid-bot").removeClass("down hide show").hide();
  $(".mid-top").removeClass("up hide show").hide();
  $(".grid").fadeOut();
  $(".start").text("Again?").delay(800).fadeIn();
}
     


