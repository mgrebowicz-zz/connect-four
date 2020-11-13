//*----- constants -----*/
const COLORS = {
    null: 'black', 
    '1': 'lightblue', 
    '-1': 'palegoldenrod'
}

/*----- app's state (variables) -----*/ 
let board; 
let turn; 
let winner;

/*----- cached element references -----*/
const player = new Audio();
const circle = document.querySelectorAll('div.circle');
const message = document.querySelector('footer');
const reset = document.querySelector('button');
const backgroundMusic = document.getElementById('bgm');

/*----- volume -----*/
backgroundMusic.volume = .5;

/*----- event listeners -----*/
document.getElementById('board')
    .addEventListener('click', handleClick);

document.querySelector('button')
    .addEventListener('click', resetGame);

/*----- functions -----*/
init();

function init() {
    board = [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
    ];
    turn = 1;
    winner = null;
    backgroundMusic.play();
    render();
};

init();

function render() {
    board.forEach(function(colArr, colIdx){
        colArr.forEach(function(cellVal, rowIdx){
            document.getElementById(`r${rowIdx}c${colIdx}`).style.backgroundColor = COLORS[cellVal];
        })
    })
    if (winner !== null) {
        message.innerHTML = `CONGRATULATIONS ${COLORS[winner].toUpperCase()} YOU ARE VICTORIOUS`;
    } else {
        message.innerHTML = `${COLORS[turn].toUpperCase()} TAKE YOUR TURN`;
    };
};

function handleClick(evt) {
    let targetCircle = evt.target;
    if(targetCircle.tagName !== 'DIV') return;
    let colIdx = targetCircle.id.charAt(3);
    const colArr = board[colIdx];
    let rowIdx = colArr.indexOf(null);
    if (rowIdx === -1) return;
    colArr[rowIdx] = turn;
    checkWinner();
    turn *= -1;
    render();
}

function checkWinner() {
    checkVertical();
    checkHorizontal();
    checkDiagonal();
} 

function checkVertical() { 
    board.forEach(function(colArr, colIdx){
        colArr.forEach(function(cellVal, rowIdx) {
            if ((cellVal) && ((colArr[rowIdx] === colArr[rowIdx + 1]) 
            && (colArr[rowIdx] === colArr[rowIdx + 2]) 
            && (colArr[rowIdx] === colArr[rowIdx + 3]))) {
                winner = colArr[rowIdx];
            }
        }) 
    })
    
    return null;
};

function checkHorizontal() {
    board.forEach(function(colArr, colIdx) {
        colArr.forEach(function(cellVal, rowIdx) {
            if ((cellVal) && (board[colIdx +3]) && (board[colIdx][rowIdx] === board[colIdx + 1][rowIdx]) 
            && (board[colIdx][rowIdx] === board[colIdx + 2][rowIdx]) 
            && (board[colIdx][rowIdx] === board[colIdx + 3][rowIdx])) {
                winner = board[colIdx][rowIdx];
            }
        }) 
    })

    return null;
};

function checkDiagonal() {
    board.forEach(function(colArr, colIdx){
        colArr.forEach(function(cellVal, rowIdx){
            if ((cellVal) && (board[colIdx + 3]) && (board[colIdx][rowIdx] === board[colIdx + 1][rowIdx + 1])
                && (board[colIdx][rowIdx] === board[colIdx + 2][rowIdx + 2])
                && (board[colIdx][rowIdx] === board[colIdx + 3][rowIdx + 3])) {
                winner = board[colIdx][rowIdx];
            }
        })
    })

    return null;
};

function resetGame() {
    init();
};