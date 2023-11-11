const eqArraysRecursion = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if (!eqArraysRecursion(array1[i], array2[i])) {
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

// Test cases
console.log(eqArraysRecursion([[2, 3], [4]], [[2, 3], [4]]));      // true
console.log(eqArraysRecursion([[2, 3], [4]], [[2, 3], [4, 5]]));   // false
console.log(eqArraysRecursion([[2, 3], [4]], [[2, 3], 4]));        // false



module.exports = eqArraysRecursion;