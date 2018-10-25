
function onSearchInput(val, key) {
    if (key) var enter = key.key
    var img = gImgs.filter((el) => {
        return el.keywords[0].includes(val)
    })
    renderImages(img)
    renderTags(val, enter)
}

