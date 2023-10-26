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



const middle = function(array) {
  let newArray = [];
  if (array.length <= 2) {
    return newArray;
  }
  else if (array.length % 2 === 0) {
    newArray.push((array.length / 2));
    newArray.push((array.length / 2) + 1);
  }
  else {
    newArray.push(Math.ceil(array.length / 2));
  }
  return newArray;
};
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]));// => [5]
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));// => [4, 5]
console.log(middle([1, 2]));// => []
console.log(middle([1]));// => []

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);// => true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);// => true
assertArraysEqual(middle([1, 2]), []);// => true
assertArraysEqual(middle([1]), []);// => true
console.log(eqArrays(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]));// => true
console.log(eqArrays(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]));// => true
console.log(eqArrays(middle([1, 2]), []));// => true
console.log(eqArrays(middle([1]), []));// => true