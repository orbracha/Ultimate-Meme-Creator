'use strict'



function onTextChange(txt) {
    changeTxtLine(txt, getNumLineEdit());
    // debugger
    // var inputText = document.getElementById(`line-${getNumLineEdit()}`)
    // inputText.value = txt;
    rederText();
}


function rederText() {
    var memeLines = getCurrMemeLines();
    var ctx = getCtx();
    uploadImgToCanvas(memeLines.imgId);
    memeLines.forEach(meme => {
        // meme.align.x = x;
        // meme.align.y = y;
        //bold
        if (meme.isBold) ctx.font = `bold ${meme.size}px ${meme.font}`
        else ctx.font = `${meme.size}px ${meme.font}`
        //color
        ctx.fillStyle = meme.color;
        //shadow
        if (meme.isShadow) makeShadow();
        else ctx.shadowColor = "rgba(0, 0, 0, 0)";
        // debugger
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
    }
    else {
        elBold.innerText = 'B';
        isBold(true, getNumLineEdit());
    }
    rederText()
}


function onClickShadow(elShadow) {
    if (elShadow.innerText === '□') {
        elShadow.innerText = '❏';
        isShadow(false, getNumLineEdit());
    }
    else {
        elShadow.innerText = '□';
        isShadow(true, getNumLineEdit());
    }
    rederText()
}

function onClickStroke(elStroke) {
    if (elStroke.innerText === 's') {
        elStroke.innerText = 'S';
        isStroke(false, getNumLineEdit());
    }
    else {
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