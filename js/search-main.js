function onSearchInput(val) {
    var idx = []
    var img = gImgs.map((el) => {
        var imgString = el.keywords.toString()
        return imgString.indexOf((val))
    })
    for (let i = 0; i < gImgs.length; i++) {
        if (img[i] === 0) {
            idx.push(i)
        }
    }
    if (val == '') renderImages()
    else getImgsFromSearch(idx)
}

function getImgsFromSearch(idx) {
    var currImg = []
    for (let i = 0; i < idx.length; i++) {
        currImg.push(gImgs.filter(item => {return item.id === idx[i]}))
    }
    var imgArray = currImg.flat()
    renderImages(imgArray)
}
