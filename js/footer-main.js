'use strict'

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
    var meme = getCurrMeme();
    meme.color = color;
    onTextTop(meme.lineUp);
    onTextBottom(meme.lineDown);

}


function onChangeFontSize(size) {
    var meme = getCurrMeme();
    meme.size = size;
    onTextTop(meme.lineUp);
    onTextBottom(meme.lineDown);
}

function getCurrFont() {
    return 'Ariel';
}