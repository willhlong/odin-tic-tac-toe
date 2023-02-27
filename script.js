const GameBoard = (() => {
    const _PLAYER_ONE = 1;
    const _PLAYER_TWO = 2;
    let _boardSquares = [
        ' ', ' ', ' ', 
        ' ', ' ', ' ', 
        ' ', ' ', ' '
    ];

    const updateBoard = (index, player) => {
        if (player == _PLAYER_ONE) {
            _boardSquares[index] = 'X';
        }
        else if (player == _PLAYER_TWO) {
            _boardSquares[index] = 'O';
        }
    };

    const drawBoard = () => {
        console.log(_boardSquares);
    };

    const checkWin = () => {
        if      (_boardSquares[0] === _boardSquares[1] && _boardSquares[1] === _boardSquares[2]) return true;
        else if (_boardSquares[3] === _boardSquares[4] && _boardSquares[1] === _boardSquares[5]) return true;
        else if (_boardSquares[6] === _boardSquares[7] && _boardSquares[1] === _boardSquares[8]) return true;
        else if (_boardSquares[0] === _boardSquares[3] && _boardSquares[1] === _boardSquares[6]) return true;
        else if (_boardSquares[1] === _boardSquares[4] && _boardSquares[1] === _boardSquares[7]) return true;
        else if (_boardSquares[2] === _boardSquares[5] && _boardSquares[1] === _boardSquares[8]) return true;
        else if (_boardSquares[0] === _boardSquares[4] && _boardSquares[8] === _boardSquares[5]) return true;
        else if (_boardSquares[2] === _boardSquares[4] && _boardSquares[6] === _boardSquares[5]) return true;
        else return false;
    };

    return {drawBoard};
})();

const PlayerFactory = (name, number, isHuman) => {
    const getName = () => name;
    const getNumber = () => number;

    return { getName, getNumber };
}
