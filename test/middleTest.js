const { middle, assertArraysEqual } = require('../middle');
const assert = require('chai').assert;



describe("#middle", () => {
  it("returns ['c'] for ['a', 'b', 'c', 'd', 'e']", () => {
    assert.deepEqual(middle(['a', 'b', 'c', 'd', 'e']), ['c']);
  });

  it("returns ['c', 'd'] for ['a', 'b', 'c', 'd', 'e', 'f']", () => {
    assert.deepEqual(middle(['a', 'b', 'c', 'd', 'e', 'f']), ['c', 'd']);
  });

  it("returns [] for ['a', 'b']", () => {
    assert.deepEqual(middle(['a', 'b']), []);
  });

  it("returns [] for ['a']", () => {
    assert.deepEqual(middle(['a']), []);
  });
});