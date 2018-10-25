'use strict'

function init() {
    setFooter('false')
    clearMemeLines()
    createMemeLines()
    clearAllInputs();
    showGallery()
    createCanvas()
    createImgs()
    renderTags()
    renderImages()
    setLanguage()
}


function loadingDog() {
    $('.loading').fadeTo('slow', 1, () => { $('.loading').hide() })
}

function hideControls() {
    $('footer').show()
    $('.tags-container').hide()
    $('.footer-controls').show()
    $('.all-controls').hide()
    $('.canvas-container').show()
    $('.navbar-collapse').collapse('hide')
    $('.gallery').hide()
    $('.search-bar').hide()
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


function showMainControls() {
    $('.main-footer-nav').show()
    $('.all-controls').hide()
}

function showSocialMedia() {
    $('.all-controls').show()
    $('.social-media-container').show()
    $('.text-line-edit').hide()
    $('.font-color-container').hide()
    $('.main-footer-nav').hide()
}



function toggleContactModal() {
    $('#myModal').modal('show')
    $('.navbar-collapse').collapse('hide')
}

//////////////////////////////////Images//////////////////////////////////////////////////
function renderImages(currImg) {
    var isTrue = true
    if (!currImg) { var imgs = getImgs() } else var imgs = currImg
    var strHtmls = imgs.map(img => {
        return `<li class='hex'>
                    <div class='image-container'>      
                        <div class='image-item image-item-${img.id}' onclick='uploadImgToCanvas(${img.id})' onmouseup='setFooter(${isTrue})'>
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

function uploadImage() {
    $('#uploadInupt').trigger('click')
    $('.navbar-collapse').collapse('hide');

}

function downloadImg(elLink) {
    var canvas = getCanvas();
    var imgContent = canvas.toDataURL('image/jpeg');
    elLink.href = imgContent
}

function showGallery() {
    $('footer').hide()
    $('.footer-controls').hide()
    $('.about-section').hide()
    $('.navbar-collapse').collapse('hide')
    $('.tags-container').show()
    $('.all-controls').hide()
    $('.canvas-container').hide()
    $('.text-container').hide()
    $('.gallery').show()
    $('.search-bar').show()
}
/////////////////////////////////////Canvas//////////////////////////////////////////////////

function renderCanvas() {
    hideRenderCanvas()
    clearCanvas();
}

function hideRenderCanvas() {
    $('.tags-container').hide()
    $('.canvas-container').show()
    $('.navbar-collapse').collapse('hide')
    $('.gallery').hide()
    $('.search-bar').hide()
}

function setFooter(val) {
    isFooterOn(val)
}

function isFooterOn(isGallery) {
    if (isGallery) {
        console.log(isGallery);
        $('footer').show()
        $('.footer-controls').show()
        $('.main-footer-nav').show()
    } else showGallery()
}

/////////////////////////////////////search////////////////////////////////////////////////

function renderTags(val, enter) {
    var idx = 0;
    if (!localStorage.tags) { var tags = [{ key: 'Trump', id: idx++ }, { key: 'Dog', id: idx++ }, { key: 'Baby', id: idx++ }, { key: 'Cat', id: idx++ }, { key: 'Monkey', id: idx++ }, { key: 'Salt', id: idx++ }, { key: 'Java', id: idx++ }, { key: 'Dance', id: idx++ }, { key: 'Music', id: idx++ }, { key: 'Tough', id: idx++ }, { key: 'Code', id: idx++ }, { key: 'Nope', id: idx++ }] } else { var tags = JSON.parse(localStorage.getItem('tags')) }

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


function onTagClick(val) {
    var tag = val.toLowerCase()
    onSearchInput(tag)
}


function onSearchInput(val, key) {
    if (key) var enter = key.key
    var img = gImgs.filter((el) => {
        return el.keywords[0].includes(val)
    })
    renderImages(img)
    renderTags(val, enter)
}
////////////////////////////////////////Text/////////////////////////////////////

function createNewInput(width, height) {
    var canvas = getCanvas();
    var elContainer = document.querySelector('.container-input-text')
    $('.container-input-text').append(`<span id='line-${getNumLineEdit()}' type='text' 
    onclick='onTextChose(this,event)'></span>`);
    elContainer.style.width = canvas.width;
    elContainer.style.height = canvas.height;
    var elChoseInput = document.querySelector(`#line-${getNumLineEdit()}`)
    elChoseInput.style.width = width + 'px';
    elChoseInput.style.height = height + 'px';
    elChoseInput.style.left = '50px';
    elChoseInput.style.top = height * 2 + 'px';
}


function dragElement(elInputTxt, ev) {
    var lineId = (elInputTxt.id.split('-'))[1];
    var memeLine = getLineById(getNumLineEdit(lineId))
    var currPositionX = 0,
        currPositionY = 0,
        prevPositionX = 0,
        prevPositionY = 0;
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
        memeLine.align.y = elInputTxt.offsetTop - memeLine.size / 2;
        memeLine.align.x = elInputTxt.offsetLeft;
        rederText();
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function onTextChose(elText, ev) {
    console.log(elText)
    dragElement(elText, ev);
    var lineId = (elText.id.split('-'))[1];
    changeCurrTxt(lineId);

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


function clearAllInputs() {
    var elTextInput = document.querySelector('#textInput');
    elTextInput.value = '';
    var elColorInput = document.querySelector('#input-color-text');
    elColorInput.value = '#000000';
    var elSizeInput = document.querySelector('#size-font-text');
    elSizeInput.value = 20;
    document.querySelector('.bold-btn').innerText = '𝐁';
    document.querySelector('.shadow-btn').innerText = '	❏';
}



function onTextChange(txt) {
    var memeLine = getLineById(getNumLineEdit());
    var ctx = getCtx();
    var textWidth = ctx.measureText(memeLine.txt).width;
    if (textWidth + memeLine.size < 320) {
        changeTxtLine(txt, getNumLineEdit());
        createNewInput(textWidth + memeLine.size - 10, 30);

        // // var inputText = document.getElementById(`line-${getNumLineEdit()}`)
        // // inputText.value = txt;
        // memeLine.align.x = memeLine.size;
        // memeLine.align.y = parseInt(inputText.style.height);
    }
    rederText();
}


function rederText() {
    var memeLines = getMemeLines();
    var ctx = getCtx();
    uploadImgToCanvas(memeLines.imgId);
    memeLines.forEach(meme => {
        //bold
        if (meme.isBold) ctx.font = `bold ${meme.size}px ${meme.font}`
        else ctx.font = `${meme.size}px ${meme.font}`
            //color
        ctx.fillStyle = meme.color;
        //shadow
        if (meme.isShadow) makeShadow();
        else ctx.shadowColor = "rgba(0, 0, 0, 0)";
        if (meme.stroke.isStroke) {
            ctx.strokeStyle = meme.stroke.color;
            ctx.lineWidth = 5;
            ctx.strokeText(meme.txt, meme.align.x, meme.align.y);
        }
        ctx.lineWidth = 1;
        ctx.fillText(meme.txt, meme.align.x, meme.align.y)
    })

}


function onChangeFont(font) {
    changeFontTxt(font, getNumLineEdit())
    rederText()
}

function onChangeTextColor(colorTxt) {
    changeColorTxt(colorTxt, getNumLineEdit())
    rederText()
}


function onChangeStrokeColor(colorStroke) {
    changeColorStroke(colorStroke, getNumLineEdit())
    rederText()

}

function getNumLineEdit() {
    var elLine = document.querySelector('#edit-line-list');
    return +elLine.value;
}


function onClickBold(elBold) {
    if (elBold.innerText === 'B') {
        elBold.innerText = '𝐁';
        isBold(false, getNumLineEdit());
    } else {
        elBold.innerText = 'B';
        isBold(true, getNumLineEdit());
    }
    rederText()
}


function onClickShadow(elShadow) {
    if (elShadow.innerText === '□') {
        elShadow.innerText = '❏';
        isShadow(false, getNumLineEdit());
    } else {
        elShadow.innerText = '□';
        isShadow(true, getNumLineEdit());
    }
    rederText()
}

function onClickStroke(elStroke) {
    if (elStroke.innerText === 's') {
        elStroke.innerText = 'S';
        isStroke(false, getNumLineEdit());
    } else {
        elStroke.innerText = 's';
        isStroke(true, getNumLineEdit());
    }
    rederText()
}

function makeShadow() {
    var ctx = getCtx();
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 1;
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
}



function changeCurrTxt(lineId) {
    var elListLines = document.querySelector('#edit-line-list')
    var elColorInput = document.querySelector('#input-color-text');
    var elTextInput = document.querySelector('#textInput')
    var elSizeInput = document.querySelector('#size-font-text');
    var elBoldBtn = document.querySelector('.bold-btn')
    var elShadowBtn = document.querySelector('.shadow-btn')

    elListLines.value = lineId;
    var memeLine = getLineById(+lineId);
    elTextInput.value = memeLine.txt;
    elColorInput.value = memeLine.color;
    elSizeInput.innerText = memeLine.size;
    if (memeLine.isBold) elBoldBtn.innerText = 'bold-off';
    else elBoldBtn.innerText = 'bold-on';
    if (memeLine.isShadow) elShadowBtn.innerText = '❏';
    else elShadowBtn.innerText = '□';
}


function onDeceaseText() {
    var elFontSize = document.getElementById('size-font-text');
    var memeLine = getLineById(getNumLineEdit());
    var fontSize = +elFontSize.innerText;
    if (fontSize < 60) elFontSize.innerText = fontSize + 1;
    memeLine.size = fontSize;
    rederText();
}

function onInceaseText() {
    var elFontSize = document.getElementById('size-font-text');
    var memeLine = getLineById(getNumLineEdit());
    var fontSize = +elFontSize.innerText;
    if (fontSize > 10) elFontSize.innerText = fontSize - 1;
    memeLine.size = fontSize;
    rederText();
}


function onAddLineText() {
    var memeLines = getMemeLines();
    memeLines.push(createMemeLine());
    var elLine = document.querySelector('#edit-line-list');
    var strHtmls = memeLines.map(line => {
        return `<option value="${line.lineId}">line ${line.lineId}</option>`
    })
    elLine.innerHTML = strHtmls.join('');
    clearAllInputs();
    document.querySelector('#edit-line-list').value = memeLines.length;
}