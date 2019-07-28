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


const letterPositions = function(str) {
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

// Tests
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").t, [4, 12]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 13, 15]);
