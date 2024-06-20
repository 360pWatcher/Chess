const boardElement = document.getElementById('chessboard');
const pieces = {
    'r': '♜', 'n': '♞', 'b': '♝', 'q': '♛', 'k': '♚', 'p': '♟',
    'R': '♖', 'N': '♘', 'B': '♗', 'Q': '♕', 'K': '♔', 'P': '♙'
};

const initialBoard = [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
];

let selectedSquare = null;

function createBoard() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.classList.add((i + j) % 2 === 0 ? 'white' : 'black');
            square.dataset.row = i;
            square.dataset.col = j;
            square.addEventListener('click', onSquareClick);
            boardElement.appendChild(square);
        }
    }
    updateBoard();
}

function updateBoard() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const square = document.querySelector(.square[data-row='${i}'][data-col='${j}']);
            square.textContent = pieces[initialBoard[i][j]] || '';
        }
    }
}

function onSquareClick(event) {
    const row = event.target.dataset.row;
    const col = event.target.dataset.col;

    if (selectedSquare) {
        movePiece(selectedSquare, { row, col });
        selectedSquare = null;
    } else {
        selectedSquare = { row, col };
    }
}

function movePiece(from, to) {
    const piece = initialBoard[from.row][from.col];
    initialBoard[from.row][from.col] = ' ';
    initialBoard[to.row][to.col] = piece;
    updateBoard();
}

createBoard();