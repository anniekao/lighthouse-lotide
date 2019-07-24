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


const letterPosition = function(str) {
  const countIndex = {};
  str = str.split(' '). join('');
  for (let i = 0; i < str.length; i++) {
    if (countIndex[str[i]]) {
      countIndex[str[i]].push(i);
    } else {
      countIndex[str[i]] = [];
      countIndex[str[i]].push(i);
    }
  }

  return countIndex;
};

console.log(letterPosition('lighthouse in the house'));



