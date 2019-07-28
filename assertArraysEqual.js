const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✔✔✔ Array Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Array Assertion Failed: ${actual} !== ${expected}`);
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

// Tests
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays([3, 6, 9], [2, 4, 6]), false);
assertArraysEqual(eqArrays([5, 10, 15, 28], [5, 10, 15, 28]), true);
assertArraysEqual(eqArrays(['a', 'x', 'l'], ['x', 'o', 'x', 'o']), false);