$(document).ready(function(){
   let game = new TicTacToe({
         DOMElements: {
              boardId: "board",
              fieldClass: "square"
           }
       });

   game.start();
});