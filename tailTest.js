const tail = require('./tail');
const assertEqual = require('./assertEqual');

let result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
let singleElementArray = tail(["Hello"]);
assertEqual(singleElementArray.length, 0);
let emptyArray = tail([]);
assertEqual(emptyArray.length, 0);