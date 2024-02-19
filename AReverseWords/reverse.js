// const s = "the sky is blue"
// const s = "a good   example"
const s = "  hello world  "
const reverseWords = function() {
    return s.split(" ").filter(word=>word!=="").reverse().join(" ")
};

reverseWords()