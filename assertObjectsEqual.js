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


const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i of keys1) {
    if (Array.isArray(object1[i])) {
      if (!eqArrays(object1[i], object2[i])) {
        return false;
      }
    } else {
      if (object1[i] !== object2[i]) {
        return false;
      }
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

let object1 = {
  a: 1,
  b: 2,
  c: 3
};

let object2 = {
  a: 1,
  b: 2,
  c: 3
};

let object3 = {
  a: 1,
  b: 2,
  c: 4
};

let object4 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};


assertObjectsEqual(object1, object2);// => true
assertObjectsEqual(object1, object3);// => false
assertObjectsEqual(object1, object4);// => false

module.exports = assertObjectsEqual;