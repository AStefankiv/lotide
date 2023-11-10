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
// assertArraysEqual([1, 2, 3], [1, 2, 3]);// => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]);// => false
// assertArraysEqual(["1", "2"], ["1", "2", "3"]);// => true


const without = (source, itemsToRemove) => {
  let newArray = [];
  for (let i = 0; i < source.length; i += 1) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

let array123 = [1, 2, 3];
console.log(without(array123, [1]));
let array123String = ["1", "2", "3"];
console.log(without(array123String, [1, "2"]));

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);// => true



module.exports = without;