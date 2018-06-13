'use strict';
var WALL = '#';
var FOOD = '.';
var EMPTY = ' ';
var SUPERFOOD = '&#127874;';
var CHERRY = '&#127826;';
var gPlaceCherryInterval;
var gBoard;
var gState = {
  score: 0,
  isGameDone: false
};

function init() {
  gBoard = buildBoard();
  printMat(gBoard, '.boardContainer');
  console.table(gBoard);
}

gPlaceCherryInterval = setInterval(placeCherry, 5000);
function buildBoard() {
  var SIZE = 10;
  var board = [];
  for (var i = 0; i < SIZE; i++) {
    board.push([]);
    for (var j = 0; j < SIZE; j++) {
      board[i][j] = FOOD;

      if (i === 0 || i === SIZE - 1 ||
        j === 0 || j === SIZE - 1 ||
        (j == 3 && i > 4 && i < SIZE - 2)) {
        board[i][j] = WALL;
      }
      //superfood initializing
      else if ((i === SIZE - 2 && j === SIZE - 2) ||
        (i === SIZE - 2 && j === 1) ||
        (i === 1 && j === 1) ||
        (i === 1 && j === SIZE - 2)) {
        board[i][j] = SUPERFOOD;
      }
    }
  }
  createPacman(board);
  createGhosts(board);
  return board;
}

// This function is called from both pacman and ghost to check engage
function checkEngage(cell, opponent, engageIdxI, engageIdxJ) {
  if (cell === opponent) {
    if (gPacman.isSuper) {
      console.log('engagei', engageIdxI);
      console.log('engagej', engageIdxJ);
      // console.log(i);
      // console.log(j);
      gGhosts.forEach(function killGhostByIdx(ghost, idx) {
        if (ghost.location.i === engageIdxI && ghost.location.j === engageIdxJ) {
          gGhosts.splice(idx, 1);
        }
      }
      )
      console.log('Ghost is dead');
    } else {
      clearInterval(gIntervalGhosts);
      gState.isGameDone = true;
      return true;
    }
  }
  return false;
}


// this function updates both the model and the dom for the score
function updateScore(value) {
  gState.score += value;
  document.querySelector('header > h3 > span').innerText = gState.score;
  displayVictory();
}

function displayVictory() {
  var allDots = (gBoard.length - 2) ** 2 - 4;
  if (gState.score === allDots) {
    var elModal = document.querySelector('.modal');
    var elBanner = document.querySelector('.banner');
    var elBtn = document.querySelector('.victoryBtn')
    elBanner.classList.add('victoryBanner');
    elModal.classList.add('victoryModal');
    elBtn.style.display = 'block';
    gState.isGameDone = true;
  }
}
//pacman wont be empowered and ghost`s colors will change to their originals
function backToNormal() {
  gPacman.isSuper = false;
  gGhosts.forEach(function changeBackColor(ghost, idx) {
    ghost.color = gOriginalColors[idx];
  })
  while (gGhosts.length < 3) {
    createGhost(gBoard);
  }
}

function placeCherry() {
  var emptyCells = [];
  for (var i = 0; i < gBoard.length; i++) {
    for (var j = 0; j < gBoard.length; j++) {
      var cell = gBoard[i][j];
      if (cell === EMPTY) {
        var emptyCell = { i: i, j: j };
        emptyCells.push(emptyCell);
      }
    }
  }
  if (!emptyCells.length) return;
  var randEmptyCellIdx = parseInt(Math.random() * (emptyCells.length));
  var emptyCellToPut = emptyCells.splice(randEmptyCellIdx, 1);
  var randI = emptyCellToPut[0].i;
  var randJ = emptyCellToPut[0].j;
  gBoard[randI][randJ] = CHERRY;
  renderCell(emptyCellToPut[0], CHERRY);
}




