const { assert } = require("console");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const countLetters = function(sentence) {
  sentence = sentence.split(" ").join("");
  let result = {};
  for (let i = 0; i < sentence.length; i += 1) {
    if (result[sentence[i]]) {
      result[sentence[i]] += 1;
    }
    else {
      result[sentence[i]] = 1;
    }
  }
  return result;
}
console.log(countLetters("lighthouse in the house"));

assertEqual(countLetters("lighthouse in the house")["l"], 1);
assertEqual(countLetters("lighthouse in the house")["i"], 2);
assertEqual(countLetters("lighthouse in the house")["g"], 1);
assertEqual(countLetters("lighthouse in the house")["h"], 4);
assertEqual(countLetters("lighthouse in the house")["t"], 2);