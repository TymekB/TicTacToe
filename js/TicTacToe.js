class TicTacToe {
    constructor(options = {}) {
        this.board = options.board || 'body';
        this.startingPlayer = options.startingPlayer || this.getRandomPlayer();
    }

    getRandomPlayer() {
        let players = ['X', 'O'];
        let randomVal = Math.floor(Math.random()*2);

        return players[randomVal];
    }
}