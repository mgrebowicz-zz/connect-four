//*----- constants -----*/
const COLORS = {
    null: 'lightslategrey', 
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
    // board = new Array(6).fill(new Array(7).fill(null));
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
    render();
};

function render() {
    board.forEach(function(colArr, colIdx){
        colArr.forEach(function(cellVal, rowIdx){
            document.getElementById(`r${rowIdx}c${colIdx}`).style.backgroundColor = COLORS[cellVal];
        });
    });
};

function handleClick(evt) {
    let targetCircle = evt.target;
    if(targetCircle.tagName !== 'DIV') return;
    let colIdx = targetCircle.id.charAt(3);
    const colArr = board[colIdx];
    let rowIdx = colArr.indexOf(null);
    if (rowIdx === -1) return;
    colArr[rowIdx] = turn;
    
    turn *= -1;
    render();
}

 function checkWinner() { 
    winner = checkRight() || checkVertical()
    //else checkdiagn
}

function checkRight(rowIdx, colIdx) {
    //return null
    //let count = 0
    for (let i = 0; i <= board.length -1; i++) {
        for (let j = 1; j <= board[i].length - 1; j++) {
            console.log(board[i][j])
            // if (board[i][j] === board[i][j + 1]) {
            //     console.log(count);
            // }
        }
    }
    //return count === 4;
}

function checkVertical() {
    return null;
}

function checkDiagonalUp() {

}