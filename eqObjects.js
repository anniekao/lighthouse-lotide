const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤖Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩Assertion Failed: ${ actual } !== ${ expected }`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (eqArrays(arr1[i], arr2[i]) === false) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let ele in obj1) {
    if (obj1.hasOwnProperty(ele) && obj2.hasOwnProperty(ele)) {
      if (Array.isArray(obj1[ele]) && Array.isArray(obj2[ele])) {
        return eqArrays(obj1[ele], obj2[ele]);
      } else if (typeof obj1[ele] === 'object') {
        if (eqObjects(obj1[ele], obj2[ele]) === false) {
          return false;
        }
      } else if (obj1[ele] !== obj2[ele]) {
        return false;
      }
    }
  }
  return true;
};

// assertEqual Tests
// assertEqual("Lighthouse Labs", "Bootcamp"); // Fail
// assertEqual(1, 1); // Pass

// eqArrays Tests
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

// // EqObjects Tests
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3], e: "4" };
// assertEqual(eqObjects(cd, cd2), false);

// const dc2 = { d: ["2", 3], c: "1", e:[5, 6, 7] };
// assertEqual(eqObjects(dc, dc2), false);

// const ef = {e: "7", f: [4, 28, 29], g: "!"};
// const ef2 = {e: "7", f: [4, 28, 29], g: "!"};
// assertEqual(eqObjects(ef, ef2), true); // => true

// Tests nested objects
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 3}, b: 2, c: 5, d: { e: 78 }}, { a: { y: 0, z: 3}, b: 2, c: 5, d: { e: 79 }}), false);
assertEqual(eqObjects({ a: { z: 3}, b: 56 }, {a: {z: 3}}), false);
assertEqual(eqObjects({ x: 1, y: {p: 23, r: 801, q: 't'}, z: 93}, { x: 1, y: {p: 23, r: 801, q: 't'}, z: 93}), true);