const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✔✔✔ Array Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Array Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;