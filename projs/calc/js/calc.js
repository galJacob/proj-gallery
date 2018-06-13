'use strict';
var gOp;
var gMemoryNum;
var gNum1 = '';
var gNum2 = '';
var gRes;
var gElNumberDisplay = document.querySelector('.numberDisplay');
function addDigit(elBtn) {
    if (!gOp && !gMemoryNum) {
        gNum1 += elBtn.innerText;
        gElNumberDisplay.innerText = gNum1;
    }
    else if (!gRes) {
        gNum2 += elBtn.innerText;
        gElNumberDisplay.innerText = gNum1 + '' + gOp + '' + gNum2;
    }
    else {

        gNum2 += elBtn.innerText;
        gElNumberDisplay.innerText = gRes + '' + gOp + '' + gNum2;
    }
}
function setOp(op) {
    var elOp = op.innerText;
    switch (elOp) {
        case '+':
            if (!gOp && !gRes) {
                gOp = '+';
                gElNumberDisplay.innerText = gNum1 + gOp;
            }
            else {
                gElNumberDisplay.innerText = gRes + gOp;
            }
            break;
        case '*':
            if (!gOp) {
                gOp = '*';
                gElNumberDisplay.innerText = gNum1 + gOp;
            }
            else {
                gElNumberDisplay.innerText = gRes + gOp;
            }
            break;
        case '/':
            if (!gOp) {
                gOp = '/';
                gElNumberDisplay.innerText = gNum1 + gOp;
            }
            else {
                gElNumberDisplay.innerText = gRes + gOp;
            }
            break;
    }
}

function calcResult() {
    gNum1 = +gNum1;
    gNum2 = +gNum2;
    switch (gOp) {
        case '+':
            if (!gRes) {
                gRes = gNum1 + gNum2;
                gElNumberDisplay.innerText = gRes;
                gNum2 = '';
                gOp = '';
            }
            else {
                gRes += gNum2;
                gElNumberDisplay.innerText = gRes;
                gNum2 = '';
                gOp = '';
            }
            break;
        case '/':
            if (!gRes) {
                gRes = gNum1 / gNum2;
                gElNumberDisplay.innerText = gRes;
                gNum2 = '';
            }
            else {
                gRes /= gNum2;
                gElNumberDisplay.innerText = gRes;
                gNum2 = '';
            }
            break;
        case '*':
            if (!gRes) {
                gRes = gNum1 * gNum2;
                gElNumberDisplay.innerText = gRes;
                gNum2 = '';
            }
            else {
                gRes *= gNum2;
                gElNumberDisplay.innerText = gRes;
                gNum2 = '';
            }
            break;
            gRes = gNum1 * gNum2;
            gElNumberDisplay.innerText = gRes;
            break;
    }
}
function setMemory(memory) {
    var elMemory = memory.innerText;
    switch (elMemory) {
        case 'MC':
            gElNumberDisplay.innerText = '';
            gNum1 = '';
            gNum2 = '';
            gOp = '';
            break;
        case 'MR':
            gNum1 = gMemoryNum;
            gElNumberDisplay.innerText = gMemoryNum;
            break;
        case 'MS':
            gMemoryNum = +gElNumberDisplay.innerText;
            console.log(gMemoryNum);
            break;
        case 'M+':
            gMemoryNum += +gElNumberDisplay.innerText;
            console.log(gMemoryNum);
            break;
    }
}