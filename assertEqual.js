// const age = 25;
// console.assert(age >= 18, 'You must be 18 or older to access this content');

// console.assert(1 === 1.1);


// FUNCTION IMPLEMENTATION
const sum = function(a, b) { 
  return a + b;
}

// TEST CODE
console.assert(sum(1, 2) === 3);
console.assert(sum(1, 20) === 3); // bad / incorrect assertion, and we see it fail!