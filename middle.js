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


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✔✔✔ Array Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Array Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(arr) {
  const mid = Math.floor(arr.length / 2);
  if (arr.length < 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    return [arr[mid - 1], arr[mid]];
  } else {
    return [arr[mid]];
  }
};

