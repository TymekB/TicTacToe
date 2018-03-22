class TicTacToe {
    constructor(options = {}) {

        this.DOMElements = {
            boardId: options.DOMElements.boardId,
            fieldClass: options.DOMElements.fieldClass
        };

        this.startingPlayer = options.startingPlayer || this.getRandomPlayer();
        this.currentPlayer = this.startingPlayer;
        this.board = ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'];
        this.winningPatterns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0, 4, 8, 2, 4, 6]
    }

    start() {
        this.createBoard();
        this.addEventListeners();
    }

    getRandomPlayer() {
        let players = ['X', 'O'];
        let randomVal = Math.floor(Math.random() * 2);

        return players[randomVal];
    }

    createBoard() {
        let htmlCode = '';

        for (let i = 0; i < 9; i++) {
            let fieldId = "field" + i;
            htmlCode += '<div class="' + this.DOMElements.fieldClass + '" id="' + fieldId + '"></div>';
        }


        $("#" + this.DOMElements.boardId).html(htmlCode);
    }

    setPlayerOnBoard(fieldId) {
        let field = $("#field" + fieldId);

        field.html(this.currentPlayer);
        field.css('pointer-events', 'none');

        this.board[fieldId] = this.currentPlayer;
        let winner = this.checkIfPlayerWins();

        if (winner) {
            alert(winner + " wins!");
            $("." + this.DOMElements.fieldClass).css('pointer-events', 'none');
            return;
        }

        if (this.currentPlayer === 'X') {
            this.currentPlayer = 'O';
        } else {
            this.currentPlayer = 'X';
        }
    }

    checkIfPlayerWins() {
        let winner = false;

        for (let i = 0; i < this.winningPatterns.length; i++) {
            let field1 = this.board[this.winningPatterns[i]];
            let field2 = this.board[this.winningPatterns[i + 1]];
            let field3 = this.board[this.winningPatterns[i + 2]];

            if (field1 === field2 && field2 === field3 && field1 !== 'n') {
                winner = this.currentPlayer;
            }
        }

        return winner;
    }

    addEventListeners() {
        let _this = this;

        for (let i = 0; i < 9; i++) {
            let fieldId = 'field' + i;

            $("#" + fieldId).click(function () {
                _this.setPlayerOnBoard(i);
            });
        }

    }
}