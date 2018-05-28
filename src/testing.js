function stolenLunch(note) {
    let wordArray = note.split("")
    return replaceChars(wordArray)
}

function replaceChars(wordArray){
    let newWord = wordArray.map(element => {
        return checkCharacter(element)
    })
    return newWord.join("");
}

function checkCharacter(character){
    let charCode = character.charCodeAt()
    // number
    if (isNumberOrAJ(charCode, 96, 107)) {
        return convert(charCode, 49)
    }
    // a or j
    if (isNumberOrAJ(charCode, 47, 58)) {
        return convert(charCode, -49)
    }
    return character
}

function isNumberOrAJ(charCode, min, max) {
    return (charCode > min && charCode < max)
}

function convert(charCode, number) {
        return String.fromCharCode(charCode - number)
    }
