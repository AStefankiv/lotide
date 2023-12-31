const assertArraysEqual = require('./assertArraysEqual');


const takeUntil = function(array, callback) {
  // callback = true;
  const results = [];
  for (let x of array) {
    if (!callback(x)) {
      results.push(x);
    } else {
      break;
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);



const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual((results1), [ 1, 2, 5, 7, 2 ]); // true
assertArraysEqual((results1), [ 1, 2, 5, 7, 2, -1]); // false
assertArraysEqual((results2), [ "I've", 'been', 'to', 'Hollywood']);// true
assertArraysEqual((results2), [ "I've", 'been', 'to']);// false



module.exports = takeUntil;