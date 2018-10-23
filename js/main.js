'use strict'

function init() {
    $('.all-controls').hide()
    $('.canvas-container').hide()
    $('footer').hide()
    $('.text-container').hide()
    $('.gallery').show()
    createImgs();
    render();
}


function renderImages() {
    var imgs = getImgs();
    var strHtmls = imgs.map(function(img) {
        return `<div class="image-item image-item-${img.id}" onclick="openImageOnCanvas(${img.id})"></div>`;
    })
    $('.gallery section').html(strHtmls.join(''));
}

function renderStyleImgs() {
    var imgs = getImgs();
    let positionGridColumn = 1;
    let positionGridRow = 1;
    imgs.forEach(function(img, idx) {
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
    clearCanvas()
    $('.canvas-container').show()
    $('.navbar-collapse').collapse('hide');
    $('.gallery').hide()
    $('footer').show()
}

function openImageOnCanvas(idx) {
    var currImg = gImgs.filter(img => img.id === idx)
    var img = new Image()
    img.src = currImg[0].url
    img.onload = () => gCtx.drawImage(img, 0, 0)
    createCanvas()
}


function changeTextColor() {
    var ctx = getCtx()
        // ctx.
}