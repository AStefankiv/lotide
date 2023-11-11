const eqArrays = require('./eqArrays');


const eqObjectsRecursion = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i of keys1) {
    if (typeof object1[i] === "object" && !Array.isArray(object1[i])) {
      if (!eqObjectsRecursion(object1[i], object2[i])) {
        return false;
      }
    } else if (Array.isArray(object1[i])) {
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


console.log(eqObjectsRecursion({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));// => true

console.log(eqObjectsRecursion({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));// => false
console.log(eqObjectsRecursion({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));// => false


module.exports = eqObjectsRecursion;