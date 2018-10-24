'use strict'

function init() {
    $('.footer-controls').hide()
    $('.canvas-container').hide()
    $('.text-container').hide()
    $('.gallery').show()
    $('.search-bar').show()
    clearCurrMeme()
    createCanvas()
    createImgs()
    render()
}

function renderImages(currImg) {
    if (!currImg) { var imgs = getImgs() }
    else var imgs = currImg
    var strHtmls = imgs.map(img => {
        return `<div class="image-item image-item-${img.id}" onclick="uploadImgToCanvas(${img.id})"></div>`;
    })
    $('.gallery section').html(strHtmls.join(''));
    renderStyleImgs(imgs)
}

function renderStyleImgs(imgs) {
    let positionGridColumn = 1;
    let positionGridRow = 1;
    imgs.forEach((img, idx) => {
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
    renderImages()
    // renderStyleImgs()
}

function renderCanvas() {
    clearCanvas()
    clearAllInputs()
    clearCurrMeme()
    $('.all-controls').hide()   
    $('.canvas-container').show()
    $('.navbar-collapse').collapse('hide')
    $('.gallery').hide()
    $('footer').show()
    $('.footer-controls').show()
    $('.search-bar').hide()
}

function uploadImgToCanvas(idx) {
    renderCanvas()
    var ctx = getCtx()
    var canvas = getCanvas()
    var img = new Image
    var currImg = getImgById(idx)
    img.src = currImg.url
    ctx.drawImage(img, 0, 0, img.width, img.height,     // source rectangle
        0, 0, canvas.width, canvas.height); // destination rectangle
    upgradeBackCanvas(img);
}

// function openImageOnCanvas(idx) {
//     var currImg = gImgs.filter(img => img.id === idx)
//     var img = new Image()
//     img.src = currImg[0].url
//     img.onload = () => gCtx.drawImage(img, 0, 0)
//     renderCanvas()
//     upgradeBackCanvas(img);
// }


function changeTextColor() {
    var ctx = getCtx()
    // ctx.
}


function toggleContactModal() {
    $('#myModal').modal('show')
}

function uploadImage() {
    
}