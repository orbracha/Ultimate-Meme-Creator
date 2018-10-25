'use strict'


function clearAllInputs() {
    var elTextInput = document.querySelector('#textInput');
    elTextInput.value = '';
    var elColorInput = document.querySelector('#input-color-text');
    elColorInput.value = '#000000';
    var elSizeInput = document.querySelector('#size-font-text');
    elSizeInput.value = 20;
    document.querySelector('.bold-btn').innerText = '𝐁';
    document.querySelector('.shadow-btn').innerText = '	❏';
}
