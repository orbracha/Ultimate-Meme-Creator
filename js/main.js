'use strict'

function init() {
    $('.all-controls').hide()
    $('.canvas-container').hide()
    $('footer').hide()
    $('.gallery').show()
    createImgs();
    render();
}


function renderImages() {
    var imgs = getImgs();
    var strHtmls = imgs.map(function (img) {
        return `<div class="image-item image-item-${img.id}" onclick="uploadImgToCanvas(${img.id})"></div>`;
    })
    $('.gallery section').html(strHtmls.join(''));
}

function renderStyleImgs() {
    var imgs = getImgs();
    let positionGridColumn = 1;
    let positionGridRow = 1;
    imgs.forEach(function (img, idx) {
        let elImg = document.querySelector(`.image-item-${img.id}`);
        elImg.style.gridColumnStart = positionGridColumn;
        elImg.style.gridColumnEnd = 'span 3';
        elImg.style.gridRowStart = positionGridRow;
        elImg.style.gridRowEnd = 'span 3'
        positionGridColumn += 3
        if (idx % 2) {
            positionGridRow += 4;
            positionGridColumn = 3;
        }
        elImg.style.background = `url(${img.url}) no-repeat center`;
        elImg.style.backgroundSize = `cover`;
    })
}

function render() {
    renderImages();
    renderStyleImgs();
}

function createCanvas() {
    $('.navbar-collapse').collapse('hide');
    $('.gallery').hide()
    $('footer').show()
    getCanvas().style.border = '1px solid black';
}

function uploadImgToCanvas(idx) {
    createCanvas();
    var ctx = getCtx();
    var canvas = getCanvas();
    var img = new Image;
    var currImg = getImgById(idx);
    img.src = currImg.url;
    ctx.drawImage(img, 0, 0, img.width, img.height,     // source rectangle
        0, 0, canvas.width, canvas.height); // destination rectangle
}



