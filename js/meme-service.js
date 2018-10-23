'use strict'
var gImgs;
var gidx = 1;
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
        createImg('img/banana.jpeg', ['happy']),
        createImg('img/funny-baby.jpg', ['happy']),
        createImg('img/doll-boy.jpeg', ['happy']),
        createImg('img/dog-cerrot.jpg', ['happy'])]
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