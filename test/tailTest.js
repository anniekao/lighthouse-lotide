const assert = require('chai').assert;
const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');

describe("#tail", () => {
  it("returns [1, 2, 3, 4] for [0, 1, 2, 3, 4]", () => {
    assert.deepEqual(tail([0, 1, 2, 3, 4]), [1, 2, 3, 4]);
  });

  it("returns [3, 4] for [2, 3, 4]", () => {
    assert.deepEqual(tail([2, 3, 4]), [3, 4]);
  });

  it("returns [4] for [3, 4]", () => {
    assert.deepEqual(tail([3, 4]), [4]);
  });

  it("returns ['b', 'c', 'd'] for ['a', 'b', 'c', 'd']", () => {
    assert.deepEqual(tail(['a', 'b', 'c', 'd']), ['b', 'c', 'd']);
  });
});