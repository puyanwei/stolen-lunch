function stolenLunch(note) {
}

function splitWord(word){
    return word.split("")
}

function replaceNumbers(wordArray){
    let newWord = wordArray.map(function(element){
        if (element === "0") {
            return "a"
        }
        return element;
    })
    return newWord;
}
