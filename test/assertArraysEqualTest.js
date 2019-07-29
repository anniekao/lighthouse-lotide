const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([3, 6, 9], [2, 4, 6]);
assertArraysEqual([5, 10, 15, 28], [5, 10, 15, 28]);
assertArraysEqual(["a", "x", "l"], ["x", "o", "x", "o"]);

