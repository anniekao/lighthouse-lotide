const assert = require('chai').assert;
const lettersPositions = require('../lettersPositions');


describe('#lettersPositions', () => {
  it("returns the array [3, 5, 13, 15] for the letter 'h' in 'lighthouse in the house'", () => {
    const input = 'lighthouse in the house';
    const expectedOutput = [3, 5, 13, 15];

    assert.deepEqual(lettersPositions(input).h, expectedOutput);
  });

  it("returns the array [4, 12] for the letter 't' in 'lighthouse in the house'", () => {
    const input = 'lighthouse in the house';
    const expectedOutput = [4, 12];

    assert.deepEqual(lettersPositions(input).t, expectedOutput);
  });

  it("returns the array [2, 3] for the letter 'l' in 'hello you'", () => {
    const input = 'hello you';
    const expectedOutput = [2, 3];

    assert.deepEqual(lettersPositions(input).l, expectedOutput);
  });

  it("returns the array [1] for the letter 'e' in 'hello you'", () => {
    const input = 'hello you';
    const expectedOutput = [1];

    assert.deepEqual(lettersPositions(input).e, expectedOutput);
  });

  it("returns and empty object if given an empty string", () => {
    const input = '';
    const expectedOutput = {};

    assert.deepEqual(lettersPositions(input), expectedOutput);
  });
});


