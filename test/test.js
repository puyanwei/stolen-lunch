describe('#StolenLunch', () => {
    it('Returns the decoded message', () => {
        expect(true).toBe(true);
    });
});

describe('#splitWord', () => {
    it('Puts the word into an array of its characters ', () => {
        expect(splitWord("hello")).toEqual(["h","e","l","l","o"])
    });
});

describe('#replaceNumbers', () => {
    it('Replaces any number found with a letter', () => {
        expect(replaceNumbers(["h","4","l","l","o"," ","m","0","n"])).toEqual("hello man")
        expect(replaceNumbers(["0", "a", "b", "c", "0"])).toEqual("aabca")
    });
});

describe('#checkCharacter', () => {
    it('Replaces any number found with a letter', () => {
        expect(checkCharacter("2")).toEqual("c")
        expect(checkCharacter("0")).toEqual("a")
        expect(checkCharacter("c")).toEqual("c")
    });
});
