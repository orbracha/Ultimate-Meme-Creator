'use strict'




function getLineById(lineId) {
    return gMemeLines.find(meme => {
        return meme.lineId === lineId;
    })
}

function changeTxtLine(txt, lineId) {
    var currMeme = getLineById(lineId)
    currMeme.txt = txt;
}

function changeFontTxt(font, lineId) {
    var currLine = getLineById(lineId)
    currLine.font = font;
}

function changeSizeTxt(size, lineId) {
    var currLine = getLineById(lineId)
    currLine.size = size;
}
function changeColorTxt(colorTxt, lineId) {
    var currLine = getLineById(lineId)
    currLine.color = colorTxt;
}

function changeColorStroke(colorStroke, lineId) {
    var currLine = getLineById(lineId)
    currLine.stroke.color = colorStroke;
}

function setPositionLine(position, lineId) {
    var currLine = getLineById(lineId)
    currLine.position = position;
}

function isBold(boldBool, lineId) {
    var currLine = getLineById(lineId)
    currLine.isBold = boldBool;
}

function isShadow(shadowBool, lineId) {
    var currLine = getLineById(lineId)
    currLine.isShadow = shadowBool;
}
function isStroke(strokeBool, lineId) {
    var currLine = getLineById(lineId)
    currLine.stroke.isStroke = strokeBool;
}

