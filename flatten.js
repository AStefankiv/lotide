const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');



// let newNumberArray = [1, 2, [3, 4, 5], 6, [7, 8, 9]];

// function flatten (array) {
//   let newArray = [].concat(...array);
//   return newArray;
// }
// This is the same as above, but using a different method. It's also the same as the function below:


let newNumberArray = [1, 2, [3, 4, 5], 6, [7, 8, 9]];
const flatten = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j += 1) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

console.log(flatten(newNumberArray));
assertArraysEqual(flatten(newNumberArray), [1, 2, 3, 4, 5, 6, 7, 8, 9]);// => true
console.log(eqArrays(flatten(newNumberArray), [1, 2, 3, 4, 5, 6, 7, 8, 9]));// => true

module.exports = flatten;