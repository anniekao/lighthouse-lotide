const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

describe('#findKeyByValue', () => {
  it("returns 'drama' when the value is 'The Wire'", () => {
    const input = 'The Wire';
    const expectedOutput = 'drama';

    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, input), expectedOutput);
  });

  it("returns undefined for non-existent values", () => {
    const input = "That '70s Show";
    
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, input), undefined);
  });

  it("returns 'comedy' when the value is 'Brooklyn Nine-Nine'", () => {
    const input = 'Brooklyn Nine-Nine';
    const expectedOutput = 'comedy';

    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, input), expectedOutput);
  });

  it("returns 'sci_fi' when the value is 'The Expanse'", () => {
    const input = 'The Expanse';
    const expectedOutput = 'sci_fi';

    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, input), expectedOutput);
  });
});
