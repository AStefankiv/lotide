const { assert } = require("console");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.split(" ").join("");
  for (let i = 0; i < sentence.length; i += 1) {
    let letter = sentence[i];
    let positionNumber = i;
    if (results[letter]) {
      results[letter].push(positionNumber);
    }
    else {
      results[letter] = [positionNumber];
    }
  }
  return results;
};
console.log(letterPositions("lighthouse in the house"));
assertEqual(letterPositions("lighthouse in the house")["l"], [0]);
assertEqual(letterPositions("lighthouse in the house")["i"], [1, 11]);
assertEqual(letterPositions("lighthouse in the house")["g"], [2]);