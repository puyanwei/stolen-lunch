describe('#StolenLunch', () => {
    it('Returns the decoded message', () => {
        expect(stolenLunch("you'll n4v4r 6u4ss 8t: cdja")).toEqual("you'll never guess it: 2390")
        expect(stolenLunch("")).toEqual("")
        expect(stolenLunch("0123456789")).toEqual("abcdefghij")
        expect(stolenLunch("jihgfedcba")).toEqual("9876543210")
        expect(stolenLunch("you won't know!!")).toEqual("you won't know!!")
        expect(stolenLunch("just 63jd73 some random note jkhdf83 ds823 that you, dfj238 dsf38 little one?, will abjk38 s83    skdu3 29never get!")).toEqual("9ust gd93hd som4 r0n3om not4 9k735id 3sicd t70t you, 359cdi 3s5di l8ttl4 on4?, w8ll 019kdi sid    sk3ud cjn4v4r 64t!")
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
