const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

console.log(middle(["a", "b", "c", "d", "e"]));// => ["c"]
console.log(middle(["a", "b", "c", "d", "e", "f"]));// => ["c", "d"]
console.log(middle(["a", "b"]));// => []
console.log(middle(["a"]));// => []

assertArraysEqual(middle(["a", "b", "c", "d", "e"]), ["c"]);// => ["c"]
assertArraysEqual(middle(["a", "b", "c", "d", "e", "f"]), ["c", "d"]);
assertArraysEqual(middle(["a", "b"]), []);
assertArraysEqual(middle(["a"]), []);