'use strict'

function openTextEditor(){
    $('.main-footer-controls').hide()
    $('.all-controls').show()
    $('.main-text-controls').show()
}
function backToMainControls(){
    $('.main-footer-controls').show()
    $('.main-text-controls').hide()
}