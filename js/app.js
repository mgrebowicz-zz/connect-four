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
    // board = new Array(7).fill(new Array(6).fill(null));
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
    let colIdx = Number(targetCircle.id.charAt(3));
    const colArr = board[colIdx];
    let rowIdx = colArr.indexOf(null);
    if (rowIdx === -1) return;
    colArr[rowIdx] = turn;
    let winner = checkHorizontal();
    turn *= -1;
    console.log(winner);
    render();
}

//  function checkWinner(rowIdx, colIdx) { 
        //console.log(board)
// }

 function checkVertical() {
    let count = 0;
     board.forEach(function (colArr, colIdx) {
         colArr.forEach(function (cellVal, rowIdx) {
             if(colArr[cellVal] === colArr[cellVal + 1]) {
                count += 1; 
            };
        });
    });
    return (count === 4 ? true : null);
};

// function checkHorizontal() {
//     let count = 0;
//     board.forEach(function (colArr, colIdx) {
//         if(colArr[colIdx] === colArr[colIdx + 1]) {
//             count += 1;
//         }
//     });  
//     console.log('---' + count + '---')  
//     //return (count === 4 ? true : null);
// }

// function checkDiag {

// }
