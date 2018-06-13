'use strict';


var gchecksOrderNum = 1;
var gCountTime = 0;
function runTime() {
    var elTimer = document.querySelector('span');
    elTimer.innerText = gCountTime / 100;
    gCountTime++;
}
//creates the game board
function createBoard() {
    var gNums = [];
    for (var i = 0; i < 16; i++) {
        gNums[i] = i + 1;
    }
    clearInterval(gtimeInterval);
    gchecksOrderNum = 1;
    gCountTime = 0;
    document.querySelector('span').innerText = '0.00';
    var elBoard = document.querySelector('.board');
    var strBoardHTML = '';
    var num;
    for (var i = 0; i < 4; i++) {
        strBoardHTML += '<tr>'
        for (var j = 0; j < 4; j++) {
            gNums = shuffle(gNums);
            num = gNums.pop();
            strBoardHTML += '<td onclick="checkClickedByOrder(this)">' + num;
            strBoardHTML += '</td>'
        }
        strBoardHTML += '</tr>'
    }
    elBoard.innerHTML = strBoardHTML;
    return strBoardHTML;
}

function shuffle(nums) {
    for (var i = nums.length - 1; i > 0; i--) {
        var temp, j;
        j = Math.floor(Math.random() * (i + 1));
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    return nums;
}

function getCellNumber(elTd) {
    var cellNum = +elTd.innerText;
    return cellNum;
}
var gtimeInterval;

// elTimer.style.background='yellow';
// elTimer=document.querySelector('.timer');


function checkClickedByOrder(elTd) {
    elTd.classList.add('clickedCell');
    console.log(elTd);
    
    if (+elTd.innerText === gchecksOrderNum) {
        if (gchecksOrderNum === 1) {
            gtimeInterval = setInterval(runTime, 10);
            gchecksOrderNum++;
        }
        else if (gchecksOrderNum === 16) {
            gchecksOrderNum++;
            clearInterval(gtimeInterval);
        }
        else {
            gchecksOrderNum++;
        }
    }
}

// var cellNumFirst = getCellNumber();

// if (cellNumFirst) {
//     gtimeInterval = setInterval(runTime, 10);
// }
// else {
//     alert('you are a loser! try again!');
// }



// if (clickedCellNum === '' + gchecksOrderNum) {
//     elTd.style.background = 'red';
//     gchecksOrderNum++;
// }


// if (elTds[i].innerText === cellNum && elTds[i].innerText === 15) {
//     clearInterval(gtimeInterval);
// }
// if (gchecksOrderNum === 1 && +cellNum === 1) {
//     startTimer();
// }




// var boardStr = createBoard(), i = 0, cellNum = 1;
// while (boardStr.charAt(i)) {
//     if (boardStr.charAt(i) === '' + cellNum) {
//         elBox[i].classList.add('mark')
//     }
//     onclick = "changeColor(this)"

//     i++;
// }
function play() {

}
function changeColor(elTd) {
    elTd.style.background = 'red';
}


// var elBoard = document.querySelector('.board');
// var strHTML = '';
// for (var i = 0; i < board.length; i++) {
//     strHTML += '<tr>\n';
//     for (var j = 0; j < board[0].length; j++) {
//         var currCell = board[i][j];
//         var cellClass = 'cell-' + i + '-' + j + ' ';
//         strHTML += '\t<td class="cell ' + cellClass +
//             '" onclick="moveTo(' + i + ',' + j + ')" >\n';
//         strHTML += currCell;
//         strHTML += '\t</td>\n';
//     }
//     strHTML += '</tr>\n';
// }
// elBoard.innerHTML = strHTML;
// }