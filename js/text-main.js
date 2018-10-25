'use strict'



function onTextChange(txt) {
    changeTxtLine(txt, getNumLineEdit());
    rederText();
}


function rederText() {
    var memeLines = getCurrMemeLines();
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
        ctx.fillText(meme.txt, meme.align.x, meme.align.y)
    })

}


function onChangeFont(font) {
    changeFontTxt(font, getNumLineEdit())
    rederText()
}

function onChangeTextColor(color) {
    changeColorTxt(color, getNumLineEdit())
    rederText()
}

function getNumLineEdit() {
    var elLine = document.querySelector('#edit-line-list');
    return +elLine.value;
}


function onClickBold(elBold) {
    if (elBold.innerText === 'bold-off') {
        elBold.innerText = 'bold-on';
        isBold(false, getNumLineEdit());
    }
    else {
        elBold.innerText = 'bold-off';
        isBold(true, getNumLineEdit());
    }
    rederText()
}


function onClickShadow(elShadow) {
    if (elShadow.innerText === 'shadow-off') {
        elShadow.innerText = 'shadow-on';
        isShadow(false, getNumLineEdit());
    }
    else {
        elShadow.innerText = 'shadow-off';
        isShadow(true, getNumLineEdit());
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


function onClickPosition(elBtn) {
    setPositionLine(elBtn.innerText, getNumLineEdit());
    render();
}

function changeCurrTxt(lineId) {
    var memeLine = getLineById(+lineId);
    var elColorInput = document.querySelector('#input-color-text');
    var elTextInput = document.querySelector('#textInput')
    var elSizeInput = document.querySelector('#size-font-text');
    var elBoldBtn = document.querySelector('.bold-btn')
    var elShadowBtn = document.querySelector('.shadow-btn')

    elTextInput.value = memeLine.txt;
    elColorInput.value = memeLine.color;
    elSizeInput.innerText = memeLine.size;
    if (memeLine.isBold) elBoldBtn.innerText = 'bold-off';
    else elBoldBtn.innerText = 'bold-on';
    if (memeLine.isShadow) elShadowBtn.innerText = 'shadow-off';
    else elShadowBtn.innerText = 'shadow-on';
}


function onDeceaseText() {
    var elFontSize = document.getElementById('size-font-text');
    var memeLine = getLineById(getNumLineEdit());
    var fontSize = +elFontSize.innerText;
    if (fontSize < 40) elFontSize.innerText = fontSize + 1;
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
    var memeLines = getCurrMemeLines();
    memeLines.push(createMemeLine());
    var elLine = document.querySelector('#edit-line-list');
    var strHtmls = memeLines.map(line => {
        return `<option value="${line.lineId}">line ${line.lineId}</option>`
    })
    elLine.innerHTML = strHtmls.join('');
    clearAllInputs();
    document.querySelector('#edit-line-list').value = memeLines.length;
}