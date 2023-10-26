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
    let middleIndex = array.length / 2;
    newArray.push(array[middleIndex - 1]);
    newArray.push((array[middleIndex]));
  }
  else {
    newArray.push(array[Math.floor(array.length / 2)]);
  }
  return newArray;
};
console.log(middle(["a", "b", "c", "d", "e"]));// => ["c"]
console.log(middle(["a", "b", "c", "d", "e", "f"]));// => ["c", "d"]
console.log(middle(["a", "b"]));// => []
console.log(middle(["a"]));// => []

assertArraysEqual(middle(["a", "b", "c", "d", "e"]), ["c"]);// => ["c"]
assertArraysEqual(middle(["a", "b", "c", "d", "e", "f"]), ["c", "d"]);
assertArraysEqual(middle(["a", "b"]), []);
assertArraysEqual(middle(["a"]), []);