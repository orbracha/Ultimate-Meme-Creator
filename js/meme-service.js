'use strict'
var gImgs;
var gidxImg = 0;
var gidxLine = 1;
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
        createImg('img/9.jpg', ['salt']),
        createImg('img/10.jpg', ['dance']),
        createImg('img/11.jpg', ['code']),
        createImg('img/12.jpg', ['nope']),
        createImg('img/13.jpg', ['salt']),
        createImg('img/14.jpg', ['monkey']),
        createImg('img/15.jpg', ['nope']),
        createImg('img/16.jpg', ['java']),
        createImg('img/17.jpg', ['dog']),
        createImg('img/18.jpg', ['tough']),
        createImg('img/19.jpg', ['dog']),
        createImg('img/20.jpg', ['baby']),
        createImg('img/21.jpg', ['monkey']),
        createImg('img/22.jpg', ['music']),
        createImg('img/23.jpg', ['nope']),
        createImg('img/24.jpg', ['dog']),
        createImg('img/25.jpg', ['nope']),
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
    var img = gImgs.find(function(img) {
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
        align: { x: 50, y: 30 },
        color: '#000000',
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