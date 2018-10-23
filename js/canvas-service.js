'use strict'
var gCanvas = document.querySelector('.canvas');
var gCtx = gCanvas.getContext('2d');



function createCanvas() {
    gCtx.canvas.width = window.innerWidth - 12
    gCtx.canvas.height = gCtx.canvas.width
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
    if (files && files[0]) {
        var readFile = new FileReader();
        readFile.onload = function(e) {
            var img = new Image();
            img.addEventListener("load", function() {
                gCtx.drawImage(img, 0, 0);
            })
            img.src = e.target.result;
        }
        readFile.readAsDataURL(files[0]);
    }
}