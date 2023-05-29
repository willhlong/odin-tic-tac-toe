const Player = (number, symbol) => {
    
    const getNumber = () => number;
    const getSymbol = () => symbol;

    return {getNumber, getSymbol};
};

const GameBoard = (() => {
    let boardArray = 
    [ 
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
    ];
    const draw = (updatedPosition, symbol) => {
        let i = 1;
        for (i = 1; i <= boardArray.length; i++) {
            let gameSquare = document.getElementById("square" + i);
            if (boardArray[i -1] === 'X') {
                gameSquare.textContent = 'X';
            }
            else if (boardArray[i -1] === 'O') {
                gameSquare.textContent = 'O';
            }
        }
    }
    const updateBoard = (position) => {
        let player = GameController.getCurrentPlayer();
        boardArray[position] = player.getSymbol();
        draw();
        GameController.turnAdvnace();
    }
    const reset = () => {
        //FIXME: clear board array
    }
    const winner = () => {
        if      (boardArray[0] === boardArray[1] && boardArray[1] === boardArray[2] && boardArray[2] !== ' ') {return true;}
        else if (boardArray[0] === boardArray[3] && boardArray[3] === boardArray[6] && boardArray[6] !== ' ') {return true;}
        else if (boardArray[0] === boardArray[4] && boardArray[4] === boardArray[8] && boardArray[8] !== ' ') {return true;}
        else if (boardArray[1] === boardArray[4] && boardArray[4] === boardArray[7] && boardArray[7] !== ' ') {return true;}
        else if (boardArray[2] === boardArray[5] && boardArray[5] === boardArray[8] && boardArray[8] !== ' ') {return true;}
        else if (boardArray[3] === boardArray[4] && boardArray[4] === boardArray[5] && boardArray[5] !== ' ') {return true;}
        else if (boardArray[6] === boardArray[7] && boardArray[7] === boardArray[8] && boardArray[8] !== ' ') {return true;}
        else if (boardArray[2] === boardArray[4] && boardArray[4] === boardArray[6] && boardArray[6] !== ' ') {return true;}
        else return false;
    }
    return {draw, updateBoard, reset, winner};
})();

const GameController = (() => {

    let _turnCount = 1;
    const _playerOne = Player(1, 'X');
    const _playerTwo = Player(2, 'O');
    const turnAdvnace = () => {
        console.log("Next turn (turn number " + _turnCount);
        _incrementTurnCounter();
    }
    const _incrementTurnCounter = () => ++_turnCount;
    const attachEventListeners = () => {
        let gameSquares = document.querySelectorAll(".game-square");
        gameSquares.forEach((gameSquare, index) => {
            gameSquare.addEventListener("click", () => {
                GameBoard.updateBoard(index);
            });
        });
    }
    const getTurnCount = () => _turnCount;
    const getCurrentPlayer = () => {
        let currentPlayer;
        if (_turnCount % 2 == 1) {
            return _playerOne;
        }
        else {
            return _playerTwo;
        }
    }
    const startGame = () => {
        GameBoard.reset();
        GameBoard.draw();
        _turnCount = 1;
    }

    const declareWinner = () => {
        if (_turnCount == 9) {
            console.log("Draw. You both lose. Good day.");
        }
            else {
            let currentPlayer;
            _turnCount % 2 === 1 ? currentPlayer = _playerOne : currentPlayer = _playerTwo;
            console.log("Player " + currentPlayer.getNumber() + " wins!");
        }
    }
    
    // const takeTurn = () => {
    //     GameBoard.updateBoard(_getPlayerInput(), currentPlayer.getSymbol());
    //     GameBoard.draw();
    //     _turnAdvnace();
    // }
    return {startGame, declareWinner, turnAdvnace, getTurnCount, getCurrentPlayer, attachEventListeners};
})();



GameController.startGame();
GameController.attachEventListeners();
if (GameBoard.winner() || GameController.getTurnCount >= 9) {
    GameController.declareWinner();
}
// while (!GameBoard.winner() && GameController.getTurnCount() <= 9) {
//     GameController.takeTurn();
// }
// GameController.declareWinner();