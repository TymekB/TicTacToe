import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-tic-tac-toe',
    templateUrl: './tic-tac-toe.component.html',
    styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {

    board = [];
    player;

    constructor() {

        this.player = this.getRandomPlayer();

        for (let i = 0; i < 9; i++) {
            this.board.push(null);
        }
    }

    setPlayerOnBoard(pos) {

        this.board[pos] = this.player;

        if (this.player === 'X') {
            this.player = 'O';
        } else {
            this.player = 'X';
        }
    }

    getRandomPlayer() {
        let players = ['X', 'O'];
        let randomNum = Math.floor(Math.random() * players.length);

        return players[randomNum];
    }

    ngOnInit(): void {
    }

}
