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
    console.log(evt.target.id)
    console.log(evt.target.id.charAt(1))
    console.log(evt.target.id.charAt(3))
}

function checkHorizontal() {

}

function checkVertical() {

}

function checkDiagonal() {

}