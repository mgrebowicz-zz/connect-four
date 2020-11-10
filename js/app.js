//*----- constants -----*/
const COLORS = {
    null: 'lightgreen', 
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
// document.getElementById('board')
//     .addEventListener('click', handleClick);

// document.querySelector('button')
//     .addEventListener('click', resetGame);

/*----- functions -----*/
init();

function init() {
    board = new Array(6);
    turn = 1;
    winner = null;
    render();
};

function render() {
    //console.log(board)
    for (let i = 0; i <= board.length -1; i++) {
        board[i] = new Array(7).fill(null)
        let col = board[i]
        for (let j = 0; j <= col.length -1; j++)
        //debugger
        player = board[i][j];
        //console.log(i)
        //console.log(j)
        circle[i].style.backgroundColor = COLORS[player];
        //console.log(player)
    };
    //console.log(board)
};

function handleClick() {

}

function checkHorizontal() {

}

function checkVertical() {

}

function checkDiagonal() {

}