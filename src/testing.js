function stolenLunch(note) {
    let wordArray = note.split('');
    return replaceChars(wordArray);
}

function replaceChars(wordArray) {
    let newWord = wordArray.map((char) => {
        return checkCharacter(char);
    });
    return newWord.join('');
}

function checkCharacter(char) {
    let charCode = char.charCodeAt();
    switch (true) {
        case charCode > 96 && charCode < 107:
            return String.fromCharCode(charCode - 49);
        case charCode > 47 && charCode < 58:
            return String.fromCharCode(charCode + 49);
        default:
            return char;
    }
}
