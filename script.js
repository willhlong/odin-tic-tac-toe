const GameBoard = (() => {
    let _boardSquares = [
        'O', 'O', 'X', 
        'O', 'O', 'X', 
        'X', 'X', 'O'
    ];

    // FIXME: Figure out what method to use for registering square clicked by player
    const _updateBoard = (index, playerSymbol) => {
        
        if(_boardSquares[index] !== ' ') {
            _boardSquares[index] = playerSymbol;
            return true;
        }
        else {
            return false;
        }
    };

    const drawBoard = () => {
        const board = document.querySelector('.game-board');
        for (let i = 0; i < _boardSquares.length; i++) {
            const square = document.createElement('div');
            square.classList.add('game-square');
            square.innerText = _boardSquares[i];
            board.appendChild(square);
        }
    };

    const resetBoard = () => {
        _boardSquares = [
            ' ', ' ', ' ',
            ' ', ' ', ' ',
            ' ', ' ', ' '
        ];
    }

    const winner = () => {
        if      (_boardSquares[0] === _boardSquares[1] && _boardSquares[1] === _boardSquares[2]) return true;
        else if (_boardSquares[3] === _boardSquares[4] && _boardSquares[4] === _boardSquares[5]) return true;
        else if (_boardSquares[6] === _boardSquares[7] && _boardSquares[7] === _boardSquares[8]) return true;
        else if (_boardSquares[0] === _boardSquares[3] && _boardSquares[3] === _boardSquares[6]) return true;
        else if (_boardSquares[1] === _boardSquares[4] && _boardSquares[4] === _boardSquares[7]) return true;
        else if (_boardSquares[2] === _boardSquares[5] && _boardSquares[5] === _boardSquares[8]) return true;
        else if (_boardSquares[0] === _boardSquares[4] && _boardSquares[4] === _boardSquares[8]) return true;
        else if (_boardSquares[2] === _boardSquares[4] && _boardSquares[6] === _boardSquares[6]) return true;
        else return false;
    };

    return {drawBoard, resetBoard, winner};
})();

const GameController = (() => {
    let _counter = 0;

    const getPlayerSelection = () => {
    }
    const isGameOver = () => {
        if (GameBoard.winner()) {
            if (_counter % 2 === 0) {
                console.log("Player 1 wins!");
            }
            else {
                console.log("Player 2 wins!");
            }
        }
    }
    const printTitleScreen = () => {

    }
    const startGame = (gameType) => {
        GameBoard.resetBoard();
        GameBoard.drawBoard();

    }
})();

const PlayerFactory = (number, isHuman) => {
    let _playerSymbol;
    if (number === 1) {
        _playerSymbol = 'X';
    }
    else {
        _playerSymbol = 'O';
    }

    const getNumber = () => number;
    const getPlayerSymbol = () => _playerSymbol;
    

    return {getNumber, getPlayerSymbol};
};



/*
    Game Controller:
     - Print title screen
     - start game based on user selection (player vs player or player vs ai)
     - check for winner
     - announce winner
     - announce turn number
     - prompt current player for input

    Game Board:
     - Keep track of plays (array)
     - check for winner when requested by game controller and report back to game controller
     - update internal board array based on player choices
     - draw game board after each turn
     - check valid play (i.e. not already occupied)

    Player:
     - track unique player id per player

 */