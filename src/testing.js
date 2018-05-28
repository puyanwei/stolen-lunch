function stolenLunch(note) {
    splitWord(note)
}

function splitWord(word){
    return word.split("")
}

function replaceNumbers(wordArray){
    let newWord = wordArray.map(function(element){
        return checkCharacter(element)
    })
    return newWord.join("");
}

function checkCharacter(character){
    let characterHash = {
        "0" : "a",
        "1" : "b",
        "2" : "c",
        "3" : "d",
        "4" : "e",
        "5" : "f",
        "6" : "g",
        "7" : "h",
        "8" : "i",
        "9" : "j",
    }
    let regex = /^[0-9]/g;
    if (regex.test(character) ) {
        return characterHash[character]
    }
    return character
}
