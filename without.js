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

const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
};




