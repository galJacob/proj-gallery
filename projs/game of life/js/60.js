//  The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells,
//  each of which is in one of two 
// possible states, alive or dead,
//  (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, 
// which are the cells that are horizontally, vertically, or diagonally adjacent.

// 1. Any live cell with fewer than two or equal to two live neighbors dies, as if by under population.
// 2.Any live cell with three to five live neighbors lives on to the next generation,if there was not a living cell it will be born
// 3.Any live cell with six to eight neighbors becomes dead,and if the cell was already dead it will not be born.


'use strict';
 var CREATURE_IMG='<img src="img/creature.png"/>';    
//main function to play,will use an interval
function play() {
    gBoard = runGeneration(gBoard);
    renderBoard(gBoard);
}

//checks if the cell exists on board
function checkIfCellExist(cell) {
    if (cell.isLive)
        return true;
    else
        return false;
}

//function that doing the calculations on the board
function runGeneration(board) {
    var currBoard = board;
    var tempBoard = [];
    for (var i = 0; i < board.length; i++) {
        tempBoard[i] = [];
        for (var j = 0; j < board[i].length; j++) {
            var currCell = currBoard[i][j];
            var livingNeighboursCell = calcAdjacentLivingCells(currBoard, i, j);
            if (currCell.isLive) {
                if (livingNeighboursCell <= 2 || livingNeighboursCell >= 6) {
                    tempBoard[i][j] = { isLive: false };
                }
                else if (livingNeighboursCell === 3 || livingNeighboursCell === 4 || livingNeighboursCell === 5) {
                    tempBoard[i][j] = { isLive: true };
                }
            }
            else {
                if (livingNeighboursCell <= 2 || livingNeighboursCell >= 6) {
                    tempBoard[i][j] = { isLive: false };
                }
                else if (livingNeighboursCell === 3 || livingNeighboursCell === 4 || livingNeighboursCell === 5) {
                    tempBoard[i][j] = { isLive: true };
                }
            }
        }
    }
    return tempBoard;
}

//function that prints the board 'X'-living cell , ' '-dead cell
function renderBoard(board) {
    var elTBoard=document.querySelector('.board');
    var strToHtml='';
    // var printedBoard = [];
    for (var i = 0; i < board.length; i++) {
        // printedBoard[i] = [];
        strToHtml+='<tr>';
        for (var j = 0; j < board[i].length; j++) {
        strToHtml+='<td>';
            board[i][j].isLive ? strToHtml+=CREATURE_IMG : strToHtml+='';
        strToHtml+='</td>';            
        }
        strToHtml+='</tr>';
    }
    // console.table(printedBoard);
    elTBoard.innerHTML=strToHtml;
}

//function to generate number between 0-1 to initialize the living cells when game starts
function getRandomInteger(min, max) {
    var num = Math.floor(Math.random() * max) + min;
    return num;
}

//function that calculates how many living cells are adjacent to a cell,switch is used to get the cells from corners
function calcAdjacentLivingCells(board, rowIdx, colIdx) {
    var numOfLivingCells = 0;
    switch (rowIdx) {
        //first line 
        case 0:
            switch (colIdx) {
                //top left corner
                case 0:
                    if (checkIfCellExist(board[rowIdx][colIdx + 1])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx + 1][colIdx + 1])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx + 1][colIdx])) numOfLivingCells++;
                    break;
                //top right corner
                case board[0].length - 1:
                    if (checkIfCellExist(board[rowIdx][colIdx - 1])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx + 1][colIdx - 1])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx + 1][colIdx])) numOfLivingCells++;
                    break;
                //any cell in first line whose not a corner
                case colIdx:
                    if (checkIfCellExist(board[rowIdx][colIdx + 1])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx + 1][colIdx + 1])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx + 1][colIdx])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx][colIdx - 1])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx + 1][colIdx - 1])) numOfLivingCells++;
                    break;
            }
            break;//breaks case 0 rowIdx
        //last line
        case board.length - 1:
            switch (colIdx) {
                //bottom left cornder
                case 0:
                    if (checkIfCellExist(board[rowIdx - 1][colIdx])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx - 1][colIdx + 1])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx][colIdx + 1])) numOfLivingCells++;
                    break;
                //bottom right cornder
                case board[0].length - 1:
                    if (checkIfCellExist(board[rowIdx - 1][colIdx])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx - 1][colIdx - 1])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx][colIdx - 1])) numOfLivingCells++;
                    break;
                //any cell in last line whose not a corner
                case colIdx:
                    if (checkIfCellExist(board[rowIdx - 1][colIdx + 1])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx][colIdx + 1])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx - 1][colIdx])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx - 1][colIdx - 1])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx][colIdx - 1])) numOfLivingCells++;
                    break;
            }
            break;//breaks case board.length-1 rowIdx

        //any line 
        case rowIdx:
            switch (colIdx) {
                //left side of board without corners
                case 0:
                    if (checkIfCellExist(board[rowIdx - 1][colIdx])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx - 1][colIdx + 1])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx][colIdx + 1])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx + 1][colIdx + 1])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx + 1][colIdx])) numOfLivingCells++;
                    break;
                //right side of the board
                case board[0].length - 1:
                    if (checkIfCellExist(board[rowIdx][colIdx - 1])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx + 1][colIdx - 1])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx + 1][colIdx])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx - 1][colIdx])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx - 1][colIdx - 1])) numOfLivingCells++;
                    break;
                //any line or column
                case colIdx:
                    if (checkIfCellExist(board[rowIdx][colIdx - 1])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx + 1][colIdx - 1])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx + 1][colIdx])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx - 1][colIdx])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx - 1][colIdx - 1])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx + 1][colIdx + 1])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx][colIdx + 1])) numOfLivingCells++;
                    if (checkIfCellExist(board[rowIdx - 1][colIdx + 1])) numOfLivingCells++;
                    break;
            }
            break;// breaks rowIdx
    }
    return numOfLivingCells;
}

function createBoard() {
    var board = [];
    var rows = +prompt('enter the number of rows of board');
    var cols = +prompt('enter the number of cols of board');
    for (var i = 0; i < rows; i++) {
        board[i] = [];
        for (var j = 0; j < cols; j++) {
            var randNum = getRandomInteger(0, 2);
            randNum ? board[i][j] = { isLive: true } : board[i][j] = { isLive: false };
        }
    }
    return board;
}


var gBoard = createBoard();
renderBoard(gBoard);
var gameInterval;
gameInterval=setInterval(play,3000);



//ignore:

//intialize the amount of living neighbours for each cell
// for (var i = 0; i < board.length; i++) {
//     for (var j = 0; j < board[i].length; j++) {
//         var cell = board[i][j];
//         var numOfLivingCells = calcAdjacentLivingCells(board, i, j);
//         cell.adjacentLivingCells = numOfLivingCells;
//     }
// }

// runGeneration(gBoard)
// //initialize the board
// var gBoard = createBoard();
// //prints the board
// renderBoard(gBoard);
// runGeneration(gBoard);

// console.table(gBoard);

