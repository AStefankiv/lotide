const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i += 1) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`)
  }
};


const letterPositions = function(sentence) {
  const results = {};
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
assertArraysEqual(letterPositions("lighthouse in the house")["l"], [0]);
assertArraysEqual(letterPositions("lighthouse in the house")["i"], [1, 11]);