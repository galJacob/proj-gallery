'use strict';

var gQuests = [];
var gCurrQuestIdx = 0;
function initGame() {
    var strToHtmlbody = '';
    var elBody = document.querySelector('body').innerHTML;
    strToHtmlbody = '<img class="num1" src="img/1.png" />' + ' <button id="1" onclick="checkAnswer(this)"> </button>' +
        ' <button id="2 " onclick="checkAnswer(this)"> </button>';
    document.querySelector('body').innerHTML = strToHtmlbody;
}
function createQuests() {
    gQuests[0] = { id: 1, opts: ['car', 'dog'], correctOptsIndex: 0 };
    gQuests[1] = { id: 2, opts: ['computer', 'motorcycle'], correctOptIndex: 1 };
    gQuests[2] = { id: 3, opts: ['pasta', 'hamburger'], correctOptIndex: 1 };
}
function renderQuest() {

    switch (gCurrQuestIdx) {
        case 0:

    }
}
function checkAnswer(elBtn) {
}
