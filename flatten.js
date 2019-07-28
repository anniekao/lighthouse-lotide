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

const flatten = function(arr) {
  // simplified answer with .reduce(): return arr.reduce((arr, ele) => arr.concat(ele), []);

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        result.push(arr[i][j]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

// Tests

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(["a", ["b", "c"], "d", "e", ["f", "g"]]), ["a", "b", "c", "d", "e", "f", "g"]);
assertArraysEqual(flatten(["!", [2, 3], 4, 8, [2], [1], [6, 6, 6], "q"]), ["!", 2, 3, 4, 8, 2, 1, 6, 6, 6, "q"]);


