'use strict'

function openTextEditor() {
    $('.main-footer-controls').hide()
    $('.all-controls').show()
    $('.main-text-controls').show()
    gCtx.fillText("Hello World", 10, 50);
}
function backToMainControls() {
    $('.main-footer-controls').show()
    $('.main-text-controls').hide()
}

function onChangeTextColor(color) {
    var canvas = getCanvas();
    var ctx = getCtx();
    var location=getLocation();
    ctx.fillStyle = color;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText("Hello World", 10, 50);
}


function onChangeFontSize(size) {
    var canvas = getCanvas();
    var ctx = getCtx();
    ctx.font = `${size}px ${getCurrFont()}`;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gCtx.fillText("Hello World", 10, 50);
}

function getCurrFont() {
    return 'Ariel';
}