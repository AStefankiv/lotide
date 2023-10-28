const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.split(" ").join("");
  for (let i = 0; i < sentence.length; i += 1) {
    let letter = sentence[i];
    let positionNumber = i;
    if (results[letter]) {
      results[letter].push(positionNumber);
    }
    else {
      results[letter] = [positionNumber];
    }
  }
  return results;
};
console.log(letterPositions("hello"));