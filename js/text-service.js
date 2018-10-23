'use strict'

function onTextTop(val) {
    var text = $('.text-top').val(val)
    gCtx.font = `normal ${gFontSize} Verdana`
    gCtx.fillStyle = gColor;
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height / 2);
    // gCtx.fillText(val, posX, posY)
    gCtx.fillText(val, 50, 100)
}

function onTextBottom(val) {
    var text = $('.text-bottom').val(val)
    gCtx.font = `normal ${gFontSize} Verdana`
    gCtx.fillStyle = gColor;
    gCtx.clearRect(0, gCanvas.height / 2, gCanvas.width, gCanvas.height);
    // gCtx.fillText(val, posX, posY)
    gCtx.fillText(val, 50, 300)
}