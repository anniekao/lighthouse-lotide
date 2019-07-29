const assert = require('chai').assert;
const head = require('../head');

describe('#head', () => {
  it("it returns '5' for [5, 6, 7]", () =>{
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("it returns '5' for [5]", () => {
    assert.strictEqual(head([5]), 5);
  });

  it("it returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("it returns '!' for ['!', 'p', 'q']", () => {
    assert.strictEqual(head("!", "p", "q"), "!");
  });
});