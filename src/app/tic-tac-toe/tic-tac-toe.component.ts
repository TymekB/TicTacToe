import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-tic-tac-toe',
    templateUrl: './tic-tac-toe.component.html',
    styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {

    board = [];

    constructor() {
        for(let i = 0; i < 9; i++) {
            this.board.push('n');
        }
    }

    ngOnInit(): void {
    }

}
