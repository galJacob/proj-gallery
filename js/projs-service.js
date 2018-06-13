'use strict';
var gProjs = createProjs();
function createProjs() {
    var projs = [{
        id: 'pacman',
        name: 'pacman game',
        title: 'pacman game,since 1967',
        desc: 'yellow little buddy who eats dots',
        url: '<a href="projs/Pacman/pacman-starter/index.html">link to game</a>',
        publishedAt: 12312312312,
        labels: ['yellow', 'katzin', 'afraid of ghosts'],
        img: '<img class="img-fluid" src="projs/img/pacman.png" />'
    },
    {
        id: 'touch-nums',
        name: 'touch-nums game',
        title: 'touch nums,since 2054',
        desc: 'click fast!!!',
        url: '<a href="projs/touch-nums/touch-nums.html">link to game </a>',
        publishedAt: 12839238921,
        labels: ['nums', 'fast'],
        img: '<img class="img-fluid" src="projs/img/touch-nums.png" />'
    },
    {
        id: 'balls-board',
        name: 'balls-board game',
        title: 'ball board, nice game',
        desc: 'collect those balls',
        url: '<a href="projs/ball-board/index.html">link to game</a>',
        publishedAt: 12312121754312312,
        labels: ['green', 'collecting balls', 'slow'],
        img: '<img class="img-fluid" src="projs/img/balls-board.png" />'
    },
    {
        id: 'chess',
        name: 'chess game',
        title: 'chess,thinking game',
        desc: 'defeat the other player by check-mate',
        url: '<a href="projs/chess/index.html">link to game</a>',
        publishedAt: 12312121754312312,
        labels: ['thinking', 'strategy','board'],
        img: '<img class="img-fluid" src="projs/img/chess.png" />'
    },
    {
        id: 'game-of-life',
        name: 'game of life game',
        title: '1 player,no victory or loss',
        desc: 'player chooses the area of living cells,and watch them generate',
        url: '<a href="projs/game of life/index.html">link to game</a>',
        publishedAt: 12312121754312312,
        labels: ['1 player', 'nothing much to do'],
        img: '<img class ="img-fluid" src="projs/img/game-of-life.png" >'
    },{
        id: 'in-picture',
        name: 'in picture game',
        title: 'the most awesome game in the world',
        desc: 'answer 3 questions and mabye you will win 1 million $',
        url: '<a href="projs/in-picture/in-picture.html">link to game</a>',
        publishedAt: 12312121754312312,
        labels: ['boring', 'nothing much to do'],
        img: '<img class="img-fluid" src="projs/img/in-picture.png" '
    },
    ];
    return projs;
}
function setUserDetails() {
    var eMail = $('.e-mailIn').val();
    var subject = $('.subjectIn').val();
    var message = $('.messageIn').val();
    var linkStr = `https://mail.google.com/mail/?view=cm&fs=1&to=${eMail}&su=${subject}&body=${message}`;
    window.location.assign(linkStr);
    $('.e-mailIn').val('');
    $('.subjectIn').val('');
    $('.messageIn').val('');
}

