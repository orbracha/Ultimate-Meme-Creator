'use strict'

function init() {
    $('.about-section').hide()
    $('.footer-controls').hide()
    $('.canvas-container').hide()
    // $('.text-container').hide()
    $('.gallery').show()
    $('.search-bar').show()
    clearCurrMeme()
    createMemeLines()
    clearAllInputs();
    hideControls()
    showGallery()
    createCanvas()
    createImgs()
    renderTags()
    render()
}

function renderImages(currImg) {
    if (!currImg) { var imgs = getImgs() } else var imgs = currImg
    var strHtmls = imgs.map(img => {
        return `<li class="hex">
                    <div class="image-container">      
                        <div class="image-item image-item-${img.id}" onclick="uploadImgToCanvas(${img.id})">
                        </div>
                    </div>
                </li>`
    })
    $('.gallery-list').html(strHtmls.join(''));
    renderStyleImgs(imgs)
}

function renderStyleImgs(imgs) {
    imgs.forEach((img) => {
        let elImg = document.querySelector(`.image-item-${img.id}`);
        elImg.style.background = `url(${img.url}) no-repeat center`;
        elImg.style.backgroundSize = `cover`;
    })
}

function render() {
    renderImages()
}

function renderCanvas() {
    clearCanvas();
    $('.canvas-container').show()
    $('.navbar-collapse').collapse('hide');
    $('.gallery').hide()
    $('footer').show()
    $('.footer-controls').show();
    $('.all-controls').show();
    $('.search-bar').hide()
    $('.tags-container').hide()
}


function uploadImgToCanvas(id) {
    renderCanvas()
    var ctx = getCtx()
    var canvas = getCanvas()
    var img = new Image
    var currImg = getImgById(id)
    img.src = currImg.url
    ctx.drawImage(img, 0, 0, img.width, img.height, // source rectangle
        0, 0, canvas.width, canvas.height); // destination rectangle
    saveCurrImg(id)
}


function toggleContactModal() {
    $('#myModal').modal('show')
    $('.navbar-collapse').collapse('hide')
}

function uploadImage() {
    $('#uploadInupt').trigger("click")
    $('.navbar-collapse').collapse('hide');

}

function downloadImg(elLink) {
    var canvas = getCanvas();
    var imgContent = canvas.toDataURL('image/jpeg');
    elLink.href = imgContent
}

function renderTags(val, enter) {
    var idx = 0;
    if (!localStorage.tags) { var tags = [{ key: 'Trump', id: idx++ }, { key: 'Dog', id: idx++ }, { key: 'Baby', id: idx++ }, { key: 'Cat', id: idx++ }, { key: 'Monkey', id: idx++ }, { key: 'Salt', id: idx++ }, { key: 'Java', id: idx++ }, { key: 'Dance', id: idx++ }, { key: 'Music', id: idx++ }, { key: 'Tough', id: idx++ }, { key: 'Code', id: idx++ }, { key: 'Nope', id: idx++ }] }
    else { var tags = JSON.parse(localStorage.getItem('tags')) }

    var strHtmls = tags.map(tag => {
        return `
        <li onclick="onTagClick('${tag.key}')"
        style="font-size:${randomTextSize()}px;">  ${tag.key}
        </li>
        `
    })
    $('.tags-list').html(strHtmls.join(''))
    if (val) {
        tags.push({ key: val, id: idx++ })
        if (enter === 'Enter') localStorage.setItem('tags', JSON.stringify(tags))
    }
}

function randomTextSize() {
    return Math.floor(Math.random() * (35 - 15 + 1)) + 15;
}

function onTagClick(val) {
    var tag = val.toLowerCase()
    onSearchInput(tag)
}

function loadingDog() {
    $('.loading').fadeTo('slow', 1, () => { $('.loading').hide() })
}

function onAddTextCanvas(ev) {
    onAddLineText();
    var canvas = getCanvas();
    var muousePos = getMousePos(ev)
    var elContainer = document.querySelector('.container-input-text')
    $(".container-input-text").append(`<input id="line-${getNumLineEdit()}" type="text" 
    onmousemove="onTextChose(this,event)" onmousedown="onMouseDown(true)"
            onmouseup="onMouseDown(false)">`);
    elContainer.style.width = canvas.width;
    elContainer.style.height = canvas.height;
    var elChoseInput = document.querySelector(`#line-${getNumLineEdit()}`)
    elChoseInput.style.width = '50px';
    elChoseInput.style.height = '30px';
    elChoseInput.style.left = muousePos.x + 'px';
    elChoseInput.style.top = muousePos.y + 'px';
    elChoseInput.style.background = 'unset';
}


function onTextChose(elText, ev) {
    if (isMouseDown()) {
        var muousePos = getMousePos(ev);
        var direction = ""
        var oldx = 0
        if (muousePos.x < oldx) {
            direction = "left"
        } else if (muousePos.x > oldx) {
            direction = "right"
        }
        debugger
        elText.style[direction] = muousePos.x + 'px';
        oldx = muousePos.x;
        // elText.style.top = muousePos.y + 'px';
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

function rederInputsByLine(lineId) {
    var memeLine = getLineById(lineId);
    var elColorInputs = document.querySelector('#input-color-text');
    elColorInputs.value = memeLine.color;
    var elTextInputs = document.querySelector('#size-font-text');
    elTextInputs.value = memeLine.size;
    if (memeLine.isBold) $('.border-btn').Text = 'bold-off';
    else $('.border-btn').Text = 'bold-off';
    if (memeLine.isShadow) $('.border-btn').Text = 'shadow-off';
    else $('.border-btn').Text = 'shadow-on';
}

function aboutPage() {
    $('footer').hide()
    $('.gallery').hide()
    $('.canvas-container').hide()
    $('.search-bar').hide()
    $('.tags-container').hide()
    $('.navbar-collapse').collapse('hide')
    $('.about-us').show()
    $('.about-section').show()
}


