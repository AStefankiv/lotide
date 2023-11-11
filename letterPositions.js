const assertArraysEqual = require('./assertArraysEqual');


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i += 1) {
    let letter = sentence[i];
    let positionNumber = i;
    if (results[letter]) {
      results[letter].push(positionNumber);
    } else {
      results[letter] = [positionNumber];
    }
  }
  return results;
};
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("lighthouse in the house")["l"], [0]);
assertArraysEqual(letterPositions("lighthouse in the house")["i"], [1, 11]);


module.exports = letterPositions;