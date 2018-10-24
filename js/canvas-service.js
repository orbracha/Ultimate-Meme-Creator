'use strict'
var gCanvas = document.querySelector('.canvas');
var gCtx = gCanvas.getContext('2d');



function createCanvas() {
    gCtx.canvas.width = 375
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

function readImage(files) {hideControls()
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


function hideControls() {
    $('.tags-container').hide()
    $('.all-controls').hide()
    $('.canvas-container').show()
    $('.navbar-collapse').collapse('hide')
    $('.gallery').hide()
    $('footer').show()
    $('.footer-controls').show()
    $('.search-bar').hide()
}

function showGallery() {
    $('.tags-container').show()
    $('.footer-controls').hide()
    $('.canvas-container').hide()
    $('.text-container').hide()
    $('.gallery').show()
    $('.search-bar').show()
}