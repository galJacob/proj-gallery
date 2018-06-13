var GHOST = '&#9772;';
var gIntervalGhosts;
var gGhosts;
var gOriginalColors = [];
function createGhost(board) {

    var ghost = {
        color: getRandomColor(),
        location: {
            i: 3,
            j: 3
        },
        currCellContent: FOOD
    };
    gGhosts.push(ghost);
    gOriginalColors.push(ghost.color);
    board[ghost.location.i][ghost.location.j] = GHOST;
}


function createGhosts(board) {
    gGhosts = [];

    createGhost(board);
    createGhost(board);
    createGhost(board);

    gIntervalGhosts = setInterval(function moveGhosts() {

        // TODO, if there are less than 3 ghosts, create one

        gGhosts.forEach(function moveGhost(ghost) {

            var nextLocation = {
                i: ghost.location.i + getRandomIntInclusive(-1, 1),
                j: ghost.location.j + getRandomIntInclusive(-1, 1)
            }
            // console.log('nextLocation', nextLocation);

            if (board[nextLocation.i][nextLocation.j] === WALL) return;
            if (board[nextLocation.i][nextLocation.j] === GHOST) return;

            var isGameOver = checkEngage(board[nextLocation.i][nextLocation.j], PACMAN);
            if (isGameOver) {
                displayRestart();
            }
            // set back what we stepped on
            board[ghost.location.i][ghost.location.j] = ghost.currCellContent;
            renderCell(ghost.location, ghost.currCellContent);

            // move the ghost
            ghost.location = nextLocation;

            // keep the contnet of the cell we are going to
            ghost.currCellContent = board[ghost.location.i][ghost.location.j];

            // move the ghost model and update dom
            board[ghost.location.i][ghost.location.j] = GHOST;
            renderCell(ghost.location, getGhostHTML(ghost));


        });

    }, 1000);

}

function getGhostHTML(ghost) {
    return `<span style="color:${ghost.color};">${GHOST}</span>`
}
function displayRestart() {
    var elModal = document.querySelector('.modal');
    var elBanner = document.querySelector('.banner');
    var elBtn = document.querySelector('.restartBtn')
    elBanner.classList.add('slide');
    elModal.classList.add('shown');
    elBtn.style.display = 'block';
}

