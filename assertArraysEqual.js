const eqArrays = function (arr1, arr2) {
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


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✔✔✔ Array Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😡😡😡 Array Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


