'use strict'
var gCanvas = document.querySelector('.canvas');
var gCtx = gCanvas.getContext('2d');


gCtx.canvas.width = window.innerWidth - 12
gCtx.canvas.height = gCtx.canvas.width


function getCanvas() {
    return gCanvas;
}

function getCtx() {
    return gCtx;
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}