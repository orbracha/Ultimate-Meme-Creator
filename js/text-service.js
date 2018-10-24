'use strict'




function isBold(boldBool) {
    var meme = getCurrMeme()
    meme.isBold = boldBool;
}

function isShadow(shadowBool) {
    var meme = getCurrMeme();
    meme.isShadow = shadowBool;
}

function changeTxtLine(txt, line) {
    var meme = getCurrMeme();
    if (line === 'up') meme.lineUp.txt = txt;
    else meme.lineDown.txt = txt;
}

function changeFontTxt(font) {
    var meme = getCurrMeme();
    meme.font = font;
}

function changeSizeTxt(size) {
    var meme = getCurrMeme();
    meme.size = size;
}

function setPositionLineUp(position) {
    var meme = getCurrMeme();
    meme.lineUp.position = position;
}
function setPositionLineDown(position) {
    var meme = getCurrMeme();
    meme.lineDown.position = position;
}

function getUpPostion(position) {
    var meme = getCurrMeme();
    meme.lineUp.position = position;
    if (position === 'left') return [50, 100];
    if (position === 'middel') return [150, 100];
    if (position === 'right') return [250, 100];
}
function getDownPostion(position) {
    var meme = getCurrMeme();
    meme.lineDown.position = position;
    if (position === 'left') return [50, 300];
    if (position === 'middel') return [150, 300];
    if (position === 'right') return [250, 300];
}