'use strict'

function onTextTop(val) {
    var text = $('.text-top').val(val)
    gCtx.font = "normal 36px Verdana";
    gCtx.fillStyle = "#000000";
    gCtx.fillText(val, 50, 50)

}

function onTextBottom(val) {
    var text = $('.text-bottom').val(val)
    gCtx.font = "normal 36px Verdana";
    gCtx.fillStyle = "#000000";
    gCtx.fillText(val, 50, 50)
}