var gLang = 'en'
var gTrans = {
    upload: {
        en: 'UPLOAD',
        he: 'העלה',
    },
    gallery: {
        en: 'GALLERY',
        he: 'גלריה',
    },
    about: {
        en: 'ABOUT',
        he: 'עוד מידע',
    },
    bold: {
        en: 'Bold',
        he: 'כהה',
    },
    shadow: {
        en: 'Shadow',
        he: 'הצללה',
    },
    'get-in-touch': {
        en: 'GET IN TOUCH',
        he: 'דברו איתנו',
    },
    'add-line': {
        en: 'Add Line',
        he: 'הוסף שורה',
    },
    search: {
        en: 'Find Image',
        he: 'חפש תמונה',
    },
}

function doTrans() {
    var doc = document.querySelectorAll('[data-trans]')
    for (let i = 0; i < doc.length; i++) {
        var el = doc[i];
        var transKey = el.getAttribute('data-trans')
        var txt = getTrans(transKey)
        if (el.nodeName === 'INPUT') {
            el.setAttribute('placeholder', txt);
        } else {
            el.innerText = txt;
        }
    }
}

function getTrans(transKey) {
    var keyTrans = gTrans[transKey];
    if (!keyTrans) return 'UNKNOWN';
    var txt = keyTrans[gLang];
    if (!txt) txt = keyTrans['en'];
    return txt;
}