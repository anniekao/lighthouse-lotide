const findKey = require('../findKey');
const assert = require('chai').assert;
const obj1 = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 }
};

describe('#findKey', () => {
  it("returns 'noma' when x => x.stars === 2", () => {
    assert.strictEqual(findKey(obj1, x => x.stars === 2), 'noma');
  });

  it("returns 'Akaleri' when x => x.stars > 1", () => {
    assert.strictEqual(findKey(obj1, x => x.stars > 1), 'Akaleri');
  });

  it("returns 'Blue Hill' when x.stars === 1", () => {
    assert.strictEqual(findKey(obj1, x => x.stars === 1), 'Blue Hill');
  });
});

