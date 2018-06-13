'use strict';

var gQuests = [];
createQuests();
var gCurrQuestIdx = 0;
function initGame() {
    var possibleAnswer1 = gQuests[gCurrQuestIdx].opts[0];
    var possibleAnswer2 = gQuests[gCurrQuestIdx].opts[1];

    var strToHtmlbody = '';
    strToHtmlbody = '<img src="img/1.png" /> <button id="0" onclick="checkAnswer(this)">' + possibleAnswer1 + ' </button>' +
        '  <button id="1" onclick="checkAnswer(this)">' + possibleAnswer2 + '</button>';
    document.querySelector('body').innerHTML = strToHtmlbody;
}
function createQuests() {
    gQuests[0] = { id: 1, opts: ['car', 'dog'], correctOptsIndex: 0 };
    gQuests[1] = { id: 2, opts: ['computer', 'motorcycle'], correctOptsIndex: 1 };
    gQuests[2] = { id: 3, opts: ['pasta', 'hamburger'], correctOptsIndex: 1 };
}
function renderQuest() {
    var currPicture = (gCurrQuestIdx + 1).toString();
    if (gCurrQuestIdx === 1) {
        var possibleAnswer1 = gQuests[gCurrQuestIdx].opts[0];
        var possibleAnswer2 = gQuests[gCurrQuestIdx].opts[1];
        var strToHtmlbody = '<img src="img/' + currPicture + '.jpg" /> <button id="0" onclick="checkAnswer(this)">' + possibleAnswer1 + ' </button>' +
            '  <button id="1" onclick="checkAnswer(this)">' + possibleAnswer2 + '</button>';
        document.querySelector('body').innerHTML = strToHtmlbody;
    }
    if (gCurrQuestIdx === 2) {
        var possibleAnswer1 = gQuests[gCurrQuestIdx].opts[0];
        var possibleAnswer2 = gQuests[gCurrQuestIdx].opts[1];
        var strToHtmlbody = '<img src="img/' + currPicture + '.jpg" /> <button id="0" onclick="checkAnswer(this)">' + possibleAnswer1 + ' </button>' +
            '  <button id="1" onclick="checkAnswer(this)">' + possibleAnswer2 + '</button>';
        document.querySelector('body').innerHTML = strToHtmlbody;
    }
    if (gCurrQuestIdx === 3) {
        alert('congrats!');
    }
}

function checkAnswer(elBtn) {
    if (+elBtn.id === gQuests[gCurrQuestIdx].correctOptsIndex) {
        gCurrQuestIdx++;
        renderQuest();
    }
}
