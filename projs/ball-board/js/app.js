var WALL = 'WALL';
var FLOOR = 'FLOOR';
var BALL = 'BALL';
var GAMER = 'GAMER';

var GAMER_IMG = '<img src="img/gamer.png">';
var BALL_IMG = '<img class="ball" src="img/ball.png">';

var gGamerPos = { i: 2, j: 9 };
var gBoard = buildBoard();
var gCountCactchedBall = 0;
var gMaxBalls = 2;
renderBoard(gBoard);
var gBallInterval = setInterval(placeBall, 3000);
var lastBallCoords
console.log(gBallInterval);

function buildBoard() {
	// Create the Matrix
	var board = new Array(10);
	for (var i = 0; i < board.length; i++) {
		board[i] = new Array(12);
	}

	// Put FLOOR everywhere and WALL at edges
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board[0].length; j++) {
			var cell = { type: FLOOR, gameElement: null };
			// Place Walls at edges
			if (i == 0 || i == board.length - 1 || j == 0 || j == board[0].length - 1) {
				if (i === 0 && j === 5 || i === board.length - 1 && j === 5 || j === 0 && i === 4 || j == board[0].length - 1 && i === 4) {
					cell.type = FLOOR;
				}
				else {
					cell.type = WALL;
				}

			}
			board[i][j] = cell;
		}
	}
	// Place the gamer
	board[gGamerPos.i][gGamerPos.j].gameElement = GAMER;

	// Place the Balls
	// board[3][8].gameElement = BALL;
	// board[7][4].gameElement = BALL;

	console.log(board);
	return board;
}

function resetGame() {
	gBoard = buildBoard();
	var gBallInterval = setInterval(placeBall, 3000);
	document.querySelector('h1').innerHTML = 'Collect those Balls<br>  balls collected:0';
	var elBtn = document.querySelector('button');
	elBtn.style.visibility = 'hidden';

}
//placing ball every 5 seconds
function placeBall() {
	var randCol = parseInt(Math.random() * 10 + 1);
	var randRow = parseInt(Math.random() * 8 + 1);
	gBoard[randRow][randCol].gameElement = BALL;
	lastBallCoords = {
		j: randCol,
		i: randRow
	}
	renderBoard(gBoard);
}
// Render the board to an HTML table
function renderBoard(board) {

	var elBoard = document.querySelector('.board');
	var strHTML = '';
	for (var i = 0; i < board.length; i++) {
		strHTML += '<tr>\n';
		for (var j = 0; j < board[0].length; j++) {
			var currCell = board[i][j];
			var cellClass = getClassName({ i: i, j: j })
			var typeClass = currCell.type === FLOOR ? 'floor' : 'wall'
			var gameElementImg = '';
			if (currCell.gameElement) {
				gameElementImg = currCell.gameElement === GAMER ? `<img src="img/gamer.png">` : BALL_IMG
			}
			var newBallClass = '';
			if (currCell.gameElement === BALL && i === lastBallCoords.i && j === lastBallCoords.j) {
				newBallClass = 'new-ball'
			}

			strHTML += `<td class="cell ${cellClass} ${typeClass}" onclick="moveTo(${i}, ${j})" >
							<span class="${newBallClass}">
											${gameElementImg}
							</span>
						</td>`;
		}
		strHTML += '</tr>\n';
	}
	elBoard.innerHTML = strHTML;
}

// Move the player to a specific location
function moveTo(i, j) {

	var targetCell = gBoard[i][j];
	if (targetCell.type === WALL) return;

	// Calculate distance to ake sure we are moving to a neighbor cell
	var iAbsDiff = Math.abs(i - gGamerPos.i);
	var jAbsDiff = Math.abs(j - gGamerPos.j);



	// If the clicked Cell is one of the four allowed
	if ((iAbsDiff === 1 && jAbsDiff === 0) || (jAbsDiff === 1 && iAbsDiff === 0)) {

		if (targetCell.gameElement === BALL) {
			gCountCactchedBall++;
			document.querySelector('h1').innerHTML = 'Collect those Balls<br>  balls collected:' + gCountCactchedBall;
			console.log('Collecting!');
			if (gCountCactchedBall === gMaxBalls) {
				alert('gameover');
				var elBtn = document.querySelector('button');
				elBtn.style.visibility = 'visible';
				clearInterval(gBallInterval);
				gCountCactchedBall = 0;
			}
		}

		// MOVING
		gBoard[gGamerPos.i][gGamerPos.j].gameElement = null;
		renderCell(gGamerPos, '');
		gGamerPos.i = i;
		gGamerPos.j = j;
		gBoard[gGamerPos.i][gGamerPos.j].gameElement = GAMER;
		renderCell(gGamerPos, GAMER_IMG);

	}
	else if (iAbsDiff === gBoard.length - 1 && jAbsDiff === 0) {
		if (gGamerPos.i === 0 && gGamerPos.j === 5) {
			gBoard[gGamerPos.i][gGamerPos.j].gameElement = null;
			renderCell(gGamerPos, '');
			gGamerPos.i = i;
			gGamerPos.j = j;
			gBoard[gGamerPos.i][gGamerPos.j].gameElement = GAMER;
			renderCell(gGamerPos, GAMER_IMG);
		}
		else if (gGamerPos.i === gBoard.length - 1 && gGamerPos.j === 5) {
			gBoard[gGamerPos.i][gGamerPos.j].gameElement = null;
			renderCell(gGamerPos, '');
			gGamerPos.i = i;
			gGamerPos.j = j;
			gBoard[gGamerPos.i][gGamerPos.j].gameElement = GAMER;
			renderCell(gGamerPos, GAMER_IMG);
		}
	}
	else if (iAbsDiff === 0 && jAbsDiff === gBoard[i].length - 1) {
		if (gGamerPos.i === 4 && gGamerPos.j === gBoard[i].length - 1) {
			gBoard[gGamerPos.i][gGamerPos.j].gameElement = null;
			renderCell(gGamerPos, '');
			gGamerPos.i = i;
			gGamerPos.j = j;
			gBoard[gGamerPos.i][gGamerPos.j].gameElement = GAMER;
			renderCell(gGamerPos, GAMER_IMG);
		}
		if (gGamerPos.i === 4 && gGamerPos.j === 0) {
			gBoard[gGamerPos.i][gGamerPos.j].gameElement = null;
			renderCell(gGamerPos, '');
			gGamerPos.i = i;
			gGamerPos.j = j;
			gBoard[gGamerPos.i][gGamerPos.j].gameElement = GAMER;
			renderCell(gGamerPos, GAMER_IMG);
		}

	}
}
// else console.log('TOO FAR', iAbsDiff, jAbsDiff);

// Convert a location object {i, j} to a selector and render a value in that element
function renderCell(location, value) {
	var cellSelector = '.' + getClassName(location)
	var elCell = document.querySelector(cellSelector);
	elCell.innerHTML = value;
}

// Move the player by keyboard arrows
function handleKey(event) {

	var i = gGamerPos.i;
	var j = gGamerPos.j;
	var newMoveClass = 'new-move';
	GAMER_IMG = ` <img ${newMoveClass} src="img/gamer.png">`;

	// var strHTML+=
	switch (event.key) {
		case 'ArrowLeft':
			if (i === 4 && j === 0) moveTo(4, gBoard[i].length - 1);
			moveTo(i, j - 1);
			break;
		case 'ArrowRight':
			if (i === 4 && j === gBoard[i].length - 1) moveTo(4, 0);
			moveTo(i, j + 1);
			break;
		case 'ArrowUp':
			if (i === 0 && j === 5) moveTo(gBoard.length - 1, 5);
			moveTo(i - 1, j);
			break;
		case 'ArrowDown':
			if (i === gBoard.length - 1 && j === 5) moveTo(0, 5);
			moveTo(i + 1, j);
			break;

	}

}

// Returns the class name for a specific cell
function getClassName(location) {
	var cellClass = 'cell-' + location.i + '-' + location.j;
	return cellClass;
}

