const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');


assertArraysEqual(tail([0, 1, 2, 3, 4]), [1, 2, 3, 4]);
assertArraysEqual(tail([2, 3, 4]), [3, 4]);
assertArraysEqual(tail([3, 4]), [4]);
assertArraysEqual(tail(["a", "b", "c", "d"]), ["b", "c", "d"]);