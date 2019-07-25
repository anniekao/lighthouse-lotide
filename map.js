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

const words = [
  "ground",
  "control",
  "to",
  "major",
  "tom",
  "arschgeige",
  "feigling",
  "schamhaar",
  "abartig"
];

const map = (arr, callback) => {
  const results = [];

  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t", "a", "f", "s", "a"]);

const results2 = map(words, word => word + " yippee");
assertArraysEqual(results2, [
  "ground yippee",
  "control yippee",
  "to yippee",
  "major yippee",
  "tom yippee",
  "arschgeige yippee",
  "feigling yippee",
  "schamhaar yippee",
  "abartig yippee"
]);

const results3 = map(words, word => word.slice(1));
assertArraysEqual(results3, ["round", "ontrol", "o", "ajor", "om", "rschgeige", "eigling", "chamhaar", "bartig"]);

const results4 = map(words, word => word.length);
assertArraysEqual(results4, [6, 7, 2, 5, 3, 10, 8, 9, 7]);