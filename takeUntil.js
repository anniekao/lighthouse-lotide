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

const takeUntil = (arr, callback) => {
  const results = [];

  for (let item of arr) {
    if (!callback(item)) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};


//Tests

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1, [1, 2, 5, 7, 2]);

// console.log("---");

// const data2 = [
//   "I've",
//   "been",
//   "to",
//   "Hollywood",
//   ",",
//   "I've",
//   "been",
//   "to",
//   "Redwood"
// ];
// const results2 = takeUntil(data2, x => x === ",");
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

const data3 = ['a', 'z', 'y', 'k', 2, 3, 4];
const result3 = takeUntil(data3, x => x === 'k');
assertArraysEqual(result3, ['a', 'z', 'y']);
