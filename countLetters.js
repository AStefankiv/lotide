const assertEqual = require('./assertEqual');



const countLetters = function(sentence) {
  sentence = sentence.split(" ").join("");
  let result = {};
  for (let i = 0; i < sentence.length; i += 1) {
    if (result[sentence[i]]) {
      result[sentence[i]] += 1;
    } else {
      result[sentence[i]] = 1;
    }
  }
  return result;
};
console.log(countLetters("lighthouse in the house"));

assertEqual(countLetters("lighthouse in the house")["l"], 1);
assertEqual(countLetters("lighthouse in the house")["i"], 2);
assertEqual(countLetters("lighthouse in the house")["g"], 1);
assertEqual(countLetters("lighthouse in the house")["h"], 4);
assertEqual(countLetters("lighthouse in the house")["t"], 2);

module.exports = countLetters;