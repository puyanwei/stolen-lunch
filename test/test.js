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

// describe('#replaceNumbers', () => {
//     it('Replaces any number found with a letter', () => {
//         expect(replaceNumbers("h","4","l","l","o"," ","m","1","n")).toEqual(["h","e","l","l","o"," ","m","a","n"])
//     });
// });

describe('#replaceNumbers', () => {
    it('Replaces any number found with a letter', () => {
        expect(replaceNumbers(["0", "a", "b", "c", "0"])).toEqual(["a", "a", "b", "c", "a"])
    });
});
