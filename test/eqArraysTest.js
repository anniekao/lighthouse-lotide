const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Tests non-nested arrays
assertEqual(eqArrays([2, 3], [4, 5]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

// Tests nested arrays
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);