'use strict'

function init() {
    clearCurrMeme()
    createMemeLines()
    clearAllInputs();
    showGallery()
    createCanvas()
    createImgs()
    renderTags()
    render()
    setLanguage()
}

function renderImages(currImg) {
    if (!currImg) { var imgs = getImgs() } else var imgs = currImg
    var strHtmls = imgs.map(img => {
        return `<li class='hex'>
                    <div class='image-container'>      
                        <div class='image-item image-item-${img.id}' onclick='uploadImgToCanvas(${img.id})'>
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
    hideRenderCanvas()
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
    $('#uploadInupt').trigger('click')
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


function createNewInput(ev) {
    var canvas = getCanvas();
    var muousePos = getMousePos(ev)
    var elContainer = document.querySelector('.container-input-text')
    $('.container-input-text').append(`<input id='line-${getNumLineEdit()}' type='text' 
    onmousemove='onTextChose(this,event)' onmousedown='dragMouseDown(event)'
            onmouseup='onMouseDown(false)'>`);
    elContainer.style.width = canvas.width;
    elContainer.style.height = canvas.height;
    var elChoseInput = document.querySelector(`#line-${getNumLineEdit()}`)
    elChoseInput.style.width = '50px';
    elChoseInput.style.height = '30px';
    elChoseInput.style.left = muousePos.x + 'px';
    elChoseInput.style.top = muousePos.y + 'px';
}

function onAddTextCanvas(ev) {
    onAddLineText();
    createNewInput(ev);

}


function dragElement(elInputTxt) {
    var currPositionX = 0, currPositionY = 0, prevPositionX = 0, prevPositionY = 0;
    elInputTxt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        prevPositionX = e.clientX;
        prevPositionY = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        currPositionX = prevPositionX - e.clientX;
        currPositionY = prevPositionY - e.clientY;
        prevPositionX = e.clientX;
        prevPositionY = e.clientY;
        // set the element's new position:
        elInputTxt.style.top = (elInputTxt.offsetTop - currPositionY) + "px";
        elInputTxt.style.left = (elInputTxt.offsetLeft - currPositionX) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function onTextChose(elText, ev) {
    console.log(elText)
    dragElement(elText, ev);
}


function hideRenderCanvas() {
    $('.tags-container').hide()
    $('footer').show()
    $('.footer-controls').show()
    $('.canvas-container').show()
    $('.navbar-collapse').collapse('hide')
    $('.gallery').hide()
    $('.search-bar').hide()
}
function hideControls() {
    $('.tags-container').hide()
    $('footer').show()
    $('.footer-controls').show()
    $('.all-controls').hide()
    $('.canvas-container').show()
    $('.navbar-collapse').collapse('hide')
    $('.gallery').hide()
    $('.search-bar').hide()
}

function showGallery() {
    $('.about-section').hide()
    $('.navbar-collapse').collapse('hide')
    $('.tags-container').show()
    $('.footer-controls').hide()
    $('.all-controls').hide()
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


function setLanguage(lang) {
    if (!localStorage.lang) gLang = 'en'
    else if (lang) gLang = lang
    localStorage.lang = JSON.stringify(gLang)

    doTrans()
}


function showMainControls() {
    $('.main-footer-nav').show()
    $('.all-controls').hide()


}
function showTextAdd() {
    $('.all-controls').show()
    $('.text-line-edit').show()
    $('.main-footer-nav').hide()
    $('.font-color-container').hide()
    $('.social-media-container').hide()
}
function showTextColor() {
    $('.all-controls').show()
    $('.font-color-container').show()
    $('.social-media-container').hide()
    $('.text-line-edit').hide()
    $('.main-footer-nav').hide()
}
function showSocialMedia() {
    $('.all-controls').show()
    $('.social-media-container').show()
    $('.text-line-edit').hide()
    $('.font-color-container').hide()
    $('.main-footer-nav').hide()
}



