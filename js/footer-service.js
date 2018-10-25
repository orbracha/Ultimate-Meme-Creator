'use strict'


function clearAllInputs() {
    var elTextInputs = document.querySelectorAll('.text-container input');
    elTextInputs.forEach(input => {
        input.value = '';
    })
    var elColorInputs = document.querySelector('#input-color-text');
    elColorInputs.value = '#000000';
    var elTextInputs = document.querySelector('#size-font-text');
    elTextInputs.value = 20;
    document.querySelector('.bold-btn').innerText = '𝐁';
    document.querySelector('.shadow-btn').innerText = '	❏';
}
