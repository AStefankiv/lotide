const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]).length, 2);
  });

  it("returns 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(['Hello', 'Lighthouse', 'Labs'])[0], 'Lighthouse');
  });

  it("returns 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(['Hello', 'Lighthouse', 'Labs'])[1], 'Labs');
  });

  it("check if array length is not modified", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });
});