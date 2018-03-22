$(document).ready(function(){
   let game = new TicTacToe({
         DOMElements: {
              boardId: "board",
              fieldClass: "square"
           }
       });

   console.log(game);

   game.createBoard();
});