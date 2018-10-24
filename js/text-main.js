'use strict'



function onTextTop(txt) {
    var currMeme = getCurrMeme();
    var ctx = getCtx();
    var canvas = getCanvas();
    var x, y;
    //change txt up
    changeTxtLine(txt, 'up');
    //bold
    if (currMeme.isBold) ctx.font = `bold ${currMeme.size}px ${currMeme.font}`
    else ctx.font = `${currMeme.size}px ${currMeme.font}`
    //color
    ctx.fillStyle = currMeme.color;
    //clear img or empty
    if (!currMeme.img) ctx.clearRect(0, 0, gCanvas.width, gCanvas.height / 2);
    else ctx.drawImage(currMeme.img, 0, 0, currMeme.img.width, currMeme.img.height,     // source rectangle
        0, 0, canvas.width, canvas.height); // destination rectangle
    //shdow
    if (currMeme.isShadow) makeShadow();
    [x, y] = getUpPostion(currMeme.lineUp.position);
    ctx.fillText(txt, x, y)
    [x, y] = getDownPostion(currMeme.lineDown.position);
    ctx.fillText(currMeme.lineDown.txt, x, y)

}


function onTextBottom(txt) {
    var ctx = getCtx();
    var canvas = getCanvas();
    var currMeme = getCurrMeme();
    var x, y;
    //change txt down
    changeTxtLine(txt, 'down');
    //bold
    if (currMeme.isBold) ctx.font = `bold ${currMeme.size}px ${currMeme.font}`
    else ctx.font = `${currMeme.size}px ${currMeme.font}`
    //color
    ctx.fillStyle = currMeme.color;
    //clear img or empty
    if (!currMeme.img) ctx.clearRect(0, gCanvas.height / 2, gCanvas.width, gCanvas.height);
    else ctx.drawImage(currMeme.img, 0, 0, currMeme.img.width, currMeme.img.height,     // source rectangle
        0, 0, canvas.width, canvas.height); // destination rectangle
    //shdow
    if (currMeme.isShadow) makeShadow();
    [x, y] = getDownPostion(currMeme.lineDown.position);
    ctx.fillText(txt, x, y)
    [x, y] = getUpPostion(currMeme.lineUp.position);
    ctx.fillText(currMeme.lineUp.txt, x, y)
}


function onChangeFont(font) {
    var meme = getCurrMeme();
    changeFontTxt(font)
    onTextTop(meme.lineUp.txt);
    onTextBottom(meme.lineDown.txt);
}

function onChangeTextColor(color) {
    var meme = getCurrMeme();
    meme.color = color;
    onTextTop(meme.lineUp.txt);
    onTextBottom(meme.lineDown.txt);
}


function onChangeFontSize(size) {
    var meme = getCurrMeme();
    changeSizeTxt(size);
    onTextTop(meme.lineUp.txt);
    onTextBottom(meme.lineDown.txt);
}


function onClickBorder(elBorder) {
    var meme = getCurrMeme();
    if (elBorder.innerText === 'border-off') {
        elBorder.innerText = 'border-on';
        isBold(false);
    }
    else {
        elBorder.innerText = 'border-off';
        isBold(true);
    }
    onTextTop(meme.lineUp);
    onTextBottom(meme.lineDown);
}


function onClickShadow(elShadow) {
    var meme = getCurrMeme();
    var ctx = getCtx();
    if (elShadow.innerText === 'shadow-off') {
        elShadow.innerText = 'shadow-on';
        isShadow(false);
        ctx.shadowColor = "rgba(0, 0, 0, 0)";
    }
    else {
        elShadow.innerText = 'shadow-off';
        isShadow(true);
    }
    onTextTop(meme.lineUp);
    onTextBottom(meme.lineDown);
}

function makeShadow() {
    var ctx = getCtx();
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 1;
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
}


function onClickUpPosition(elBtn) {
    var meme = getCurrMeme();
    setPositionLineUp(elBtn.innerText);
    onTextTop(meme.lineUp.txt);
}
function onClickDownPosition(elBtn) {
    var meme = getCurrMeme();
    setPositionLineDown(elBtn.innerText);
    onTextBottom(meme.lineDown.txt);
}

function onClickDownPosition(elBtn) {
    setPositionLineDown(elBtn.innerText);
}

