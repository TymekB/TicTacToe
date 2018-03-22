class TicTacToe {
    constructor(options = {}) {

        this.DOMElements = {
            boardId: options.DOMElements.boardId,
            fieldClass: options.DOMElements.fieldClass
        };

        this.startingPlayer = options.startingPlayer || this.getRandomPlayer();
    }


    getRandomPlayer() {
        let players = ['X', 'O'];
        let randomVal = Math.floor(Math.random()*2);

        return players[randomVal];
    }

    createBoard() {
        let htmlCode = '';

        for(let i = 0; i < 9; i++) {
            htmlCode += '<div class="'+this.DOMElements.fieldClass+'"></div>';
        }

        $("#"+this.DOMElements.boardId).html(htmlCode);
    }
}