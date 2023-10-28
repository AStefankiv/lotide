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



// let newNumberArray = [1, 2, [3, 4, 5], 6, [7, 8, 9]];

// function flatten (array) {
//   let newArray = [].concat(...array);
//   return newArray;
// }
// console.log(flatten(newNumberArray));
// assertArraysEqual(flatten(newNumberArray), [1, 2, 3, 4, 5, 6, 7, 8, 9]);// => true
// console.log(eqArrays(flatten(newNumberArray), [1, 2, 3, 4, 5, 6, 7, 8, 9]));// => true


let newNumberArray = [1, 2, [3, 4, 5], 6, [7, 8, 9]];
function flatten (array) {
  let newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j += 1) {
        newArray.push(array[i][j]);
      }
    }
    else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
console.log(flatten(newNumberArray));