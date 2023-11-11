const middle = function(array) {
  let newArray = [];
  if (array.length <= 2) {
    return newArray;
  } else if (array.length % 2 === 0) {
    let middleIndex = array.length / 2;
    newArray.push(array[middleIndex - 1]);
    newArray.push((array[middleIndex]));
  } else {
    newArray.push(array[Math.floor(array.length / 2)]);
  }
  return newArray;
};



module.exports = middle;