// const s = "leetcode"
const s = "hello"
const reverseVowels = function() {
    const vow = s.match(/[aeiou]/gi);
    return s.replace(/[aeiou]/ig, el=> vow.pop());
};
reverseVowels()