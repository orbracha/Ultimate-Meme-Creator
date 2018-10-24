'use strict'
var gCanvas = document.querySelector('.canvas');
var gCtx = gCanvas.getContext('2d');
var gIsMouseDown = false;

function onMouseDown(isDown) {
    gIsMouseDown = isDown;
}
function isMouseDown() {
    return gIsMouseDown;
}

function createCanvas() {
    gCtx.canvas.width = 380;
    gCtx.canvas.height = gCtx.canvas.width;
}

function getCanvas() {
    return gCanvas;
}

function getCtx() {
    return gCtx;
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

function readImage(files) {
    hideControls()
    if (files && files[0]) {
        var readFile = new FileReader();
        readFile.onload = e => {
            var img = new Image();
            img.addEventListener("load", () => {
                gCtx.drawImage(img, 0, 0, gCanvas.height, gCanvas.width);
            })
            img.src = e.target.result;
        }
        readFile.readAsDataURL(files[0]);
    }
}

function getMousePos(evt) {
    var canvas = getCanvas();
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}



