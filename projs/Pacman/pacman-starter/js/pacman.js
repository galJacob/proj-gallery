var gPacman;
var PACMAN = '<img src="img/pacman.png"/>';
// '&#9786;'
function createPacman(board) {
  gPacman = {
    location: {
      i: 3,
      j: 5
    },
    isSuper: false
  };
  board[gPacman.location.i][gPacman.location.j] = PACMAN;
}

function movePacman(eventKeyboard) {
  // console.log('eventKeyboard:', eventKeyboard);

  if (gState.isGameDone) return;

  var nextLocation = {
    i: gPacman.location.i,
    j: gPacman.location.j
  };

  switch (eventKeyboard.code) {
    case 'ArrowUp':
    //console.log('Arrow Up!');
    nextLocation.i--;
 PACMAN = '<img class="up" src="img/pacman.png"/>';
    break;
    case 'ArrowDown':
      //console.log('Arrow Down!');
      nextLocation.i++;
 PACMAN = '<img class="down" src="img/pacman.png"/>';      
      break;
    case 'ArrowLeft':
      //console.log('Arrow Left!');
      nextLocation.j--;
 PACMAN = '<img class="left" src="img/pacman.png"/>';      
      break;
    case 'ArrowRight':
      //console.log('Arrow Right!');
      nextLocation.j++;
 PACMAN = '<img class="right" src="img/pacman.png"/>';      
      break;

  }

  var nextCell = gBoard[nextLocation.i][nextLocation.j];
  // console.log('Heading: row:', newLocation.i , ' col: ', newLocation.j );
  // console.log('Whats there:', gBoard[newLocation.i][newLocation.j]);

  // hitting a wall, not moving anywhere
  if (nextCell === WALL) return;

  // hitting FOOD
  if (nextCell === FOOD) {
    updateScore(1);
  }
  // TODO: add support for power-food
  if (nextCell === SUPERFOOD) {
    gPacman.isSuper = true;
    gGhosts.forEach(function changeColor(ghost) {
      var color = getRandomColor();
      ghost.color = color;
      // var originColor = ghost.color;
      // var tempcolor = getRandomColor();
      // ghost.color = color;
    });
    setTimeout(backToNormal, 5000);
  }

  var isGameOver = checkEngage(nextCell, GHOST, nextLocation.i, nextLocation.j);
  if (isGameOver) {
    displayRestart();
    return;
  }

  // update the model to reflect movement
  gBoard[gPacman.location.i][gPacman.location.j] = EMPTY;

  // render updated model to the DOM
  renderCell(gPacman.location, EMPTY);

  // Update the pacman MODEL to new location  
  gPacman.location = nextLocation;
  gBoard[gPacman.location.i][gPacman.location.j] = PACMAN;


  // render updated model to the DOM
  renderCell(gPacman.location, PACMAN);

}

