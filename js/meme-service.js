'use strict'
var gImgs;
var gidx = 1;


function createImgs() {
    gImgs = [
        createImg('img/banana.jpeg', ['happy']),
        createImg('img/banana.jpeg', ['happy']),
        createImg('img/banana.jpeg', ['happy']),
        createImg('img/banana.jpeg', ['happy'])
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