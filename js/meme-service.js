'use strict'
var gImgs;
var gidxImg = 0;
var gidxLine = 1;
var gLocationX = 0;
var gLocationY = 0;
var gMemeLines;



function createImgs() {
    gImgs = [
        createImg('img/1.jpg', ['dance']),
        createImg('img/2.jpg', ['trump']),
        createImg('img/3.jpg', ['dog']),
        createImg('img/4.jpg', ['baby', 'dog']),
        createImg('img/5.jpg', ['baby']),
        createImg('img/6.jpg', ['cat']),
        createImg('img/7.jpg', ['hat']),
        createImg('img/8.jpg', ['baby', 'fat']),
        createImg('img/9.jpg', ['walla']),
    ]
}

function createImg(url, keywords) {
    return {
        id: gidxImg++,
        url,
        keywords
    }
}

function getImgs() {
    return gImgs;
}


function getImgById(idx) {
    var img = gImgs.find(function (img) {
        return img.id === idx;
    });
    return img;
}

function createMemeLines() {
    gMemeLines = [createMemeLine(), createMemeLine(), createMemeLine()];
}


function createMemeLine() {
    return {
        lineId: gidxLine++,
        txt: '',
        font: 'Ariel',
        isBold: false,
        isShadow: false,
        size: 30,
        align: { x: gLocationX = 50, y: gLocationY += 100 },
        color: 'black',
    }
}




function getCurrMemeLines() {
    return gMemeLines;
}

function saveCurrImg(id) {
    gMemeLines.imgId = id;
}

function clearCurrMeme() {
    gidxLine = 1;
}