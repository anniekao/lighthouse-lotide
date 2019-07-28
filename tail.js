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

const tail = function(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return [];
  } else {
    return arr.slice(1);
  }
};

// Tests
assertArraysEqual(tail([0, 1, 2, 3, 4]), [1, 2, 3, 4]);
assertArraysEqual(tail([2, 3, 4]), [3, 4]);
assertArraysEqual(tail([3, 4]), [4]);
assertArraysEqual(tail(["a", "b", "c", "d"]), ["b", "c", "d"]);