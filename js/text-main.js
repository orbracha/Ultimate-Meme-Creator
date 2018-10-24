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
        // ctx.rect(meme.align.x, 20, meme.align.x, meme.align.y);
        ctx.stroke();

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

function onChangeFontSize(size) {
    changeSizeTxt(size, getNumLineEdit())
    rederText()
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
    document.querySelector('#textInput').value = memeLine.txt;
}