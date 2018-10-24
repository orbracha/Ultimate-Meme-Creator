'use strict'

function init() {
    hideControls()
    showGallery()
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
        elImg.style.gridColumnEnd = 'span 4';
        elImg.style.gridRowStart = positionGridRow;
        elImg.style.gridRowEnd = 'span 4'
        positionGridColumn += 4
        if ((idx % 2)) {
            positionGridRow += 4    ;
            positionGridColumn = 1;
        }
        elImg.style.background = `url(${img.url}) no-repeat center`;
        elImg.style.backgroundSize = `cover`;
    })
}

function render() {
    renderImages()
}

function renderCanvas() {
    clearCanvas()
    clearAllInputs()
    clearCurrMeme()
    hideControls()
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

function changeTextColor() {
    var ctx = getCtx()
    // ctx.
}


function toggleContactModal() {
    $('#myModal').modal('show')
    $('.navbar-collapse').collapse('hide')
}

function uploadImage() {
    $('#uploadInupt').trigger("click")

}

function downloadImg(elLink) {
    var imgContent = canvas.toDataURL('image/jpeg');
    elLink.href = imgContent
}