const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');



const middle = function(array) {
  let newArray = [];
  if (array.length <= 2) {
    return newArray;
  } else if (array.length % 2 === 0) {
    let middleIndex = array.length / 2;
    newArray.push(array[middleIndex - 1]);
    newArray.push((array[middleIndex]));
  } else {
    newArray.push(array[Math.floor(array.length / 2)]);
  }
  return newArray;
};
// console.log(middle([1, 2, 3, 4, 5, 6]));// => [3, 4]
// console.log(middle([1, 2, 3, 4, 5]));// => [3]


module.exports = middle;

module.exports = {
  middle,
  assertArraysEqual,
  eqArrays
};