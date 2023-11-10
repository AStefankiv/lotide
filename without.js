const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


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