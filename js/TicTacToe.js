class TicTacToe {
    constructor(options = {}) {

        this.DOMElements = {
            boardId: options.DOMElements.boardId,
            fieldClass: options.DOMElements.fieldClass
        };

        this.startingPlayer = options.startingPlayer || this.getRandomPlayer();
        this.currentPlayer = this.startingPlayer;
        this.board = [];
    }

    start() {
        this.createBoard();
        this.addEventListeners();
    }

    getRandomPlayer() {
        let players = ['X', 'O'];
        let randomVal = Math.floor(Math.random()*2);

        return players[randomVal];
    }

    createBoard() {
        let htmlCode = '';

        for(let i = 0; i < 9; i++) {
            let fieldId = "field"+i;
            htmlCode += '<div class="'+this.DOMElements.fieldClass+'" id="'+fieldId+'"></div>';
        }

        $("#"+this.DOMElements.boardId).html(htmlCode);
    }

    setPlayerOnBoard(fieldId) {
        let field = $("#field"+fieldId);

        field.html(this.currentPlayer);
        field.css('pointer-events', 'none');

        if(this.currentPlayer === 'X') {
            this.currentPlayer = 'O';
        } else {
            this.currentPlayer = 'X';
        }

        this.board[fieldId] = this.currentPlayer;
    }

    addEventListeners() {
        let _this = this;

        for(let i = 0; i < 9; i++) {
            let fieldId = 'field'+i;

            $("#"+fieldId).click(function(){
                _this.setPlayerOnBoard(i);
            });
        }
    }
}