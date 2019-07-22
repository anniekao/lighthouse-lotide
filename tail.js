const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤖Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩Assertion Failed: ${ actual } !== ${ expected }`);
  }
};

const tail = function(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return [];
  } else {
    return arr.slice(1);
  }
};


