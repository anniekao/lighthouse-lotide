const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  
  it("returns [1, 2, 3, 4, 5, 6] when given [1, 2, [3, 4], 5, [6]]", () => {
    const input = [1, 2, [3, 4], 5, [6]];
    const expectedOutput = [1, 2, 3, 4, 5, 6];

    assert.deepEqual(flatten(input), expectedOutput);
  });

  it("returns ['a', 'b', 'c', 'd', 'e', 'f', 'g'] when given ['a', ['b', 'c'], 'd', 'e', ['f', 'g']]", () => {
    const input = ["a", ["b", "c"], "d", "e", ["f", "g"]];
    const expectedOutput = ["a", "b", "c", "d", "e", "f", "g"];

    assert.deepEqual(flatten(input), expectedOutput);
  });

  it("returns ['!', 2, 3, 4, 8, 2, 1, 6, 6, 6, 'q'] when given ['!', [2, 3], 4, 8, [2], [1], [6, 6, 6], 'q']", () => {
    const input = ["!", [2, 3], 4, 8, [2], [1], [6, 6, 6], "q"];
    const expectedOutput = ["!", 2, 3, 4, 8, 2, 1, 6, 6, 6, "q"];

    assert.deepEqual(flatten(input), expectedOutput);
  });

  it("returns an empty array when given an empty array", () => {
    const input = [];

    assert.deepEqual(flatten(input), input);
  });
});


// assertArraysEqual(flatten(["!", [2, 3], 4, 8, [2], [1], [6, 6, 6], "q"]), [
//   "!",
//   2,
//   3,
//   4,
//   8,
//   2,
//   1,
//   6,
//   6,
//   6,
//   "q"
// ]);
