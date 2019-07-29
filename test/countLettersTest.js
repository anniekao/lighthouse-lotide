const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it("returns the correct letter count for 'lighthouse in the house'", () => {
    const input = "light house in the house";
    const output = {
      l: 1,
      i: 2,
      g: 1,
      h: 4,
      t: 2,
      o: 2,
      u: 2,
      s: 2,
      e: 3,
      n: 1
    };
    assert.deepEqual(countLetters(input), output);

  });

  it ("returns the correct letter count for 'hello you'", () => {
    const input = 'hello you';
    const output = {
      h: 1,
      e: 1,
      l: 2,
      o: 2,
      y: 1,
      u: 1
    };

    assert.deepEqual(countLetters(input), output);
  });
});

