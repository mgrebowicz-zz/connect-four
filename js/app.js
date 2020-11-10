//*----- constants -----*/
const COLORS = {
    null: 'purple', 
    '1': 'red', 
    '-1': 'yellow'
}


/*----- app's state (variables) -----*/ 
let board; 
let turn; 
let winner;

/*----- cached element references -----*/
const circle = document.querySelectorAll('div');
const message = document.querySelector('footer');
const reset = document.querySelector('button');

/*----- event listeners -----*/
document.getElementById('board')
    .addEventListener('click', handleClick);

// document.querySelector('button')
//     .addEventListener('click', resetGame);

/*----- functions -----*/
init();

function init() {
    board = new Array(6).fill(new Array(7).fill(null));
    turn = 1;
    winner = null;
    render();
};

function render() {
    for (let i = 0; i <= board.length -1; i++) {
        let col = board[i];
        for (let j = 0; j <= col.length -1; j++) {
            let player = board[i][j];
            document.getElementById(`r${i}c${j}`).style.backgroundColor = COLORS[player];
        };
    };
};

function handleClick(evt) {
    let targetCircle = evt.target;
    let i = targetCircle.id.charAt(1);
    let j = targetCircle.id.charAt(3);
    targetCircle.style.backgroundColor = COLORS[turn];
    for (let i = 0; i <= board.length -1; i++) {
        board[i] = turn;
    }
    turn *= -1;
    render();
}

function checkHorizontal() {

}

function checkVertical() {

}

function checkDiagonal() {

}