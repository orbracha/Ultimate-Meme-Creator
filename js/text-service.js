'use strict'



function onTextTop(txt) {
    var currMeme = getCurrMeme();
    var ctx = getCtx();
    var canvas = getCanvas();
    currMeme.lineUp = txt;
    ctx.font = `${currMeme.size}px ${currMeme.font}`
    ctx.fillStyle = currMeme.color;
    if (!currMeme.img) ctx.clearRect(0, 0, gCanvas.width, gCanvas.height / 2);
    else ctx.drawImage(currMeme.img, 0, 0, currMeme.img.width, currMeme.img.height,     // source rectangle
        0, 0, canvas.width, canvas.height); // destination rectangle
    ctx.fillText(txt, 50, 100)
    ctx.fillText(currMeme.lineDown, 50, 300)

}

function onTextBottom(txt) {
    var ctx = getCtx();
    var canvas = getCanvas();
    var currMeme = getCurrMeme();
    currMeme.lineDown = txt;
    ctx.font = `${currMeme.size}px ${currMeme.font}`
    ctx.fillStyle = currMeme.color;
    if (!currMeme.img) ctx.clearRect(0, gCanvas.height / 2, gCanvas.width, gCanvas.height);
    else ctx.drawImage(currMeme.img, 0, 0, currMeme.img.width, currMeme.img.height,     // source rectangle
        0, 0, canvas.width, canvas.height); // destination rectangle
    ctx.fillText(txt, 50, 300)
    ctx.fillText(currMeme.lineUp, 50, 100)
}