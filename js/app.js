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

document.querySelector('button')
    .addEventListener('click', resetGame);

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
    let colIdx = targetCircle.id.charAt(3);
    const colArr = board[colIdx];
    let rowIdx = colArr.indexOf(null);
    if (rowIdx === -1) return;
    colArr[rowIdx] = turn;
    let winner = checkWin()
    turn *= -1;
    render();
}


function checkWin() {
    checkHorizontal();
    //checkVertical();
}

function checkVertical() { 
    board.forEach(function(colArr, colIdx){
        colArr.forEach(function(cellVal, rowIdx) {
            if ((cellVal) && ((colArr[rowIdx] === colArr[rowIdx + 1]) 
            && (colArr[rowIdx] === colArr[rowIdx + 2]) 
            && (colArr[rowIdx] === colArr[rowIdx + 3]))) {
                return true;
            }
        }) 
    })
    
    return null;
};

function checkHorizontal() {
    board.forEach(function(colArr, colIdx) {
        colArr.forEach(function(cellVal, rowIdx) {
            if ((cellVal) && (board[colIdx][rowIdx] === board[colIdx + 1][rowIdx]) 
            && (board[colIdx][rowIdx] === board[colIdx + 2][rowIdx]) 
            && (board[colIdx][rowIdx] === board[colIdx + 3][rowIdx])) {
                console.log(true);
            }
        }) 
    })

    return null;
};

// function checkHorizontal() {
//     for(let colIdx = 0; colIdx <= board.length -1; colIdx++ ) {
//         let colArr = board[colIdx];
//         for(let rowIdx = 0; rowIdx < colArr.length -1; rowIdx++) {
//             let cellVal = colArr[rowIdx];
//             if ((cellVal) && (board[colIdx][rowIdx] === board[colIdx + 1][rowIdx])
//              && (board[colIdx][rowIdx] === board[colIdx + 2][rowIdx])
//              && (board[colIdx][rowIdx] === board[colIdx + 3][rowIdx])) {
//                 console.log(true)
//             }
//         }   
        
//     }

//     return null;
// };

function resetGame() {
    
}