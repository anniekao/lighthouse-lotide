const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays([3, 6, 9], [2, 4, 6]), false);
assertArraysEqual(eqArrays([5, 10, 15, 28], [5, 10, 15, 28]), true);
assertArraysEqual(eqArrays(["a", "x", "l"], ["x", "o", "x", "o"]), false);
