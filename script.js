const GameBoard = (() => {
    let boardArray = 
    [ 
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
    ];
    const draw = () => {
        //FIXME: add draw to screen functionality
    }
    const updateBoard = (position, symbol) => {
        boardArray[position - 1] = symbol;
    }
    const reset = () => {
        //FIXME: clear board array
    }
    const winner = () => {
        if      (boardArray[0] === boardArray[1] === boardArray[2]) {return true;}
        else if (boardArray[0] === boardArray[3] === boardArray[6]) {return true;}
        else if (boardArray[0] === boardArray[4] === boardArray[8]) {return true;}
        else if (boardArray[1] === boardArray[4] === boardArray[7]) {return true;}
        else if (boardArray[2] === boardArray[5] === boardArray[8]) {return true;}
        else if (boardArray[3] === boardArray[4] === boardArray[5]) {return true;}
        else if (boardArray[6] === boardArray[7] === boardArray[8]) {return true;}
        else if (boardArray[2] === boardArray[4] === boardArray[6]) {return true;}
    }
    
})();

const GameController = (() => {

    let _turnCount = 1;
    const _playerOne = Player(1, 'X');
    const _playerTwo = Player(2, 'O');
    const _getPlayerInput = () => {
        if (_turnCount % 2 === 1) {
            return prompt("Player 1, please pick a square...");
        }
        else {
            return prompt("Player 2, please pick a square...");
        }        
    };
    const _turnAdvnace = () => {
        console.log("Next turn (turn number " + _turnCount);
        _incrementTurnCounter();
    }
    const _incrementTurnCounter = () => ++_turnCount;
    const getTurnCount = () => _turnCount;

    const startGame = () => {
        GameBoard.reset();
        GameBoard.draw();
        _turnCount = 0;
    }
    const winner = () => GameBoard.winner();
    
    const takeTurn = () => {
        let currentPlayer;
        _turnCount % 2 === 1 ? currentPlayer = _playerOne : currentPlayer = _playerTwo;
        GameBoard.updateBoard(_getPlayerInput(), currentPlayer.getSymbol());
        _turnAdvnace();
    }
})();

const Player = (number, symbol) => {
    
    const getNumber = () => number;
    const getSymbol = () => symbol;

    return {getNumber, getSymbol};
};

GameController.startGame();
