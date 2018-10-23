'use strict'

function createCanvas(idx) {
    $('.navbar-collapse').collapse('hide');
    $('.gallery').hide()
    $('footer').show()
    var newCanvas =
        ` <div class="canvas-container">
    <canvas class="canvas"> </canvas>
    </div>
    `
    $('.editor-container').html(newCanvas)

    var canvas = document.querySelector('.canvas')
    var ctx = canvas.getContext('2d')
    canvas.style.border = '1px solid black'
}