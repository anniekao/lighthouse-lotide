const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it("returns true when the objects are the same", () => {
    const obj1 = { c: "1", d: ["2", 3] };
    const obj2 = { d: ["2", 3], c: "1" };

    assert.strictEqual(eqObjects(obj1, obj2), true);
  });

  it("returns false when the objects are different", () => {
    const obj1 = { c: "1", d: ["2", 3] };
    const obj2 = { c: "1", d: ["2", 3], e: "4" };

    assert.strictEqual(eqObjects(obj1, obj2), false);
  });

  it("returns false when the objects are different", () => {
    const obj1 = { d: ["2", 3], c: "1", e: [5, 6, 7] };
    const obj2 = { c: "1", d: ["2", 3], e: "4" };

    assert.strictEqual(eqObjects(obj1, obj2), false);
  });

  it("returns true when the objects are the same", () => {
    const obj1 = { e: "7", f: [4, 28, 29], g: "!" };

    assert.strictEqual(eqObjects(obj1, obj1), true);
  });

  it("returns true when nested objects are the same", () => {
    const obj1 = { a: { z: 1 }, b: 2 }

    assert.strictEqual(eqObjects(obj1, obj1), true);
  });

  it("returns true when nested objects are the same", () => {
    const obj1 = { a: { y: 0, z: 1 }, b: 2 };

    assert.strictEqual(eqObjects(obj1, obj1), true);
  });

  it("returns false when nested objects are different", () => {
    const obj1 = { a: { y: 0, z: 1 }, b: 2 };
    const obj2 = { a: { z: 1 }, b: 2 };

    assert.strictEqual(eqObjects(obj1, obj2), false);
  });

  it("returns false when the elements of nested objects are different", () => {
    const obj1 = { a: { y: 0, z: 3 }, b: 2, c: 5, d: { e: 78 } };
    const obj2 = { a: { y: 0, z: 3 }, b: 2, c: 5, d: { e: 79 } };

    assert.strictEqual(eqObjects(obj1, obj2), false);
  });

  it("returns false when nested objects are different", () => {
    const obj1 = { a: { z: 3 }, b: 56 };
    const obj2 = { a: { z: 3 } };

    assert.strictEqual(eqObjects(obj1, obj2), false);
  });

  it("returns true when nested objects are the same", () => {
    const obj1 = { x: 1, y: { p: 23, r: 801, q: "t" }, z: 93 };
    const obj2 = { x: 1, y: { p: 23, r: 801, q: "t" }, z: 93 };

    assert.strictEqual(eqObjects(obj1, obj2), true);
  });

});