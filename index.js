function areAnagrams(text1, text2) {
    if (!text1 || !text2) return false;
    if (text1.length !== text2.length) return false;

    /// abc | bcda

    /// 1 a bc | bcd
    /// 2 a b c | cd
    /// 2 ab c | d
    for (const letter of text1) {

    }

}

let a = "almafa";
let b = "afmala";
console.log({ a, b, same: areAnagrams(a, b) })
