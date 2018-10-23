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
    console.log($('.gallery section'))
    var imgs = getImgs();
    var strHtmls = imgs.map(function (img) {
        return `<div class="image-item image-item-${img.id}" onclick="createCanvas(${img.id})"></div>`;
    })
    console.log(strHtmls)
    $('.gallery section').html(strHtmls.join(''));
}

function renderStyleImgs() {
    var imgs = getImgs();
    let positionGridColumn = 1;
    let positionGridRow = 1;
    imgs.forEach(function (img, idx) {
        let elImg = document.querySelector(`.image-item-${img.id}`);
        console.log(elImg);
        elImg.style.gridColumnStart = positionGridColumn;
        elImg.style.gridColumnEnd = 'span 3';
        elImg.style.gridRowStart = positionGridRow;
        elImg.style.gridRowEnd = 'span 3'
        elImg.style.background = `url(${img.url}) no-repeat center`;
        elImg.style.backgroundSize = `cover`;
        positionGridColumn += 3
        if (idx % 2) {
            positionGridRow += 4;
            positionGridColumn = 3;
        }
    })
}

function render() {
    renderImages();
    renderStyleImgs();
}

// function onUpload() {
//     elImages =
// }

    
