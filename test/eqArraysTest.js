const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


console.log(eqArrays([1, 2, 3], [1, 2, 3]));// => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]));// => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));// => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));// => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false); // => should PASS