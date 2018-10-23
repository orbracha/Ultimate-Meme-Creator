'use strict'

var gColor = "#000000"
var gFontSize = '36px'

function openTextEditor() {
    $('.main-footer-controls').hide()
    $('.all-controls').show()
    $('.main-text-controls').show()
    $('.text-container').show()
}

function backToMainControls() {
    $('.main-footer-controls').show()
    $('.main-text-controls').hide()
    $('.text-container').hide()
}

function onChangeTextColor(color) {
    gColor = color
}


function onChangeFontSize(size) {
    gFontSize = size
}

function getCurrFont() {
    return 'Ariel';
}