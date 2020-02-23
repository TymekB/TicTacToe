import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-tic-tac-toe',
    templateUrl: './tic-tac-toe.component.html',
    styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {

    board = [];
    winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8]
    ];
    player;
    gameEnded = false;

    constructor() {

        this.player = this.getRandomPlayer();
        this.setBoard();

    }

    setBoard() {
        for (let i = 0; i < 9; i++) {
            this.board.push(null);
        }
    }

    getRandomPlayer() {
        let players = ['X', 'O'];
        let randomNum = Math.floor(Math.random() * players.length);

        return players[randomNum];
    }

    checkIfPlayerWins() {

        let winner = false;

        for (let i = 0; i < this.winningPatterns.length; i++) {
            let fields = [];

            for (let j = 0; j < 3; j++) {
                fields.push(this.board[this.winningPatterns[i][j]]);
            }

            if (fields[0] === fields[1] && fields[1] === fields[2] && fields[0] !== null) {
                winner = true;
            }
        }

        return winner;
    }

    setPlayerOnBoard(pos) {

        if(this.gameEnded) {
            return;
        }

        this.board[pos] = this.player;

        if(this.checkIfPlayerWins()) {
            alert(this.player + ' wins!');
            this.gameEnded = true;
        }

        if (this.player === 'X') {
            this.player = 'O';
        } else {
            this.player = 'X';
        }
    }

    ngOnInit(): void {
    }

}
