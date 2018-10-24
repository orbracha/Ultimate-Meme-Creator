'use strict'
var gCanvas = document.querySelector('.canvas');
var gCtx = gCanvas.getContext('2d');



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
    if (files && files[0]) {
        var readFile = new FileReader();
        readFile.onload = e => {
            var img = new Image();
            img.addEventListener("load", () => {
                gCtx.drawImage(img, 0, 0);
            })
            img.src = e.target.result;
        }
        readFile.readAsDataURL(files[0]);
    }
}


function textClicked(ev) {
    console.log(ev)
    var memeLine = gMemeLines.find(function (line) {
        return (
            ev.clientX > 0 &&
            ev.clientX < line.align.x&&
            ev.clientY > 0 &&
            ev.clientY < line.align.y 
        )
    })
    console.log(memeLine);
}

