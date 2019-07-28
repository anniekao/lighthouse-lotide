const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✔✔✔ Object Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😡😡😡 Object Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length !== arr2.length || arr1[i] !== arr2[i]) {
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
      } else if (typeof obj1[ele] === "object") {
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

// Tests
assertObjectsEqual({a: 2, b: 3}, {b: 3, a: 2});
assertObjectsEqual({z: 2, b: {c: 8, d: 9} }, { z: 2, b: {c: 8, d: 9} });