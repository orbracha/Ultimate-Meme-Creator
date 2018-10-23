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
    $('.text-controls').hide()
}


function clearAllInputs() {
    var elTextInputs = document.querySelectorAll('.text-container input');
    elTextInputs.forEach(input => {
        input.value = '';
    })
    var elColorInputs = document.querySelector('#input-color-text');
    elColorInputs.value = '#000000';
    var elTextInputs = document.querySelector('#size-font-text');
    elTextInputs.value = 30;
}