'use strict'
var gImgs;
var gidx = 0;
var gMeme = {
    lineUp: '',
    lineDown: '',
    size: 30,
    align: 'left',
    color: 'black',
    img: null
}

function createImgs() {
    gImgs = [
        createImg('img/1.jpg', ['dance']),
        createImg('img/2.jpg', ['trump']),
        createImg('img/3.jpg', ['dog']),
        createImg('img/4.jpg', ['baby','dog']),
        createImg('img/5.jpg', ['baby']),
        createImg('img/6.jpg', ['cat']),
        createImg('img/7.jpg', ['hat']),
        createImg('img/8.jpg', ['baby','fat']),
        createImg('img/9.jpg', ['walla']),
    ]
}

function createImg(url, keywords) {
    return {
        id: gidx++,
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

function getCurrMeme() {
    return gMeme;
}

function upgradeBackCanvas(img) {
    if (img) gMeme.img = img;
    else gMeme.img = null;

}

function clearCurrMeme() {
    gMeme.img = null;
    gMeme.lineDown = '';
    gMeme.lineUp = '';
    gMeme.color = 'black';
    gMeme.size = 30;
}