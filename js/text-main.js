'use strict'

function onChangeFont(font) {
    var meme = getCurrMeme();
    meme.font = font;
    onTextTop(meme.lineUp);
    onTextBottom(meme.lineDown);
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
