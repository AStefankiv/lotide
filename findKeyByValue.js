const assertEqual = require('./assertEqual');

// const findKeyByValue = function(object, value) {
//   for (let i of Object.keys(object)) {
//     if (object[i] === value) {
//       return i;
//     }
//   }
// };
// This is the same as above, but using a for...in loop instead of Object.keys():

const findKeyByValue = function(object, value) {
  for (let i in object) {
    if (object[i] === value) {
      return i;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


module.exports = findKeyByValue;