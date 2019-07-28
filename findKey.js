const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤖Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (obj, callback) => {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

// Tests
const obj1 = {
  'Blue Hill': { stars: 1 },
  'Akaleri': { stars: 3 },
  'noma': { stars: 2 },
  'elBulli': { stars: 3 },
  'Ora': { stars: 2 },
  'Akelarre': { stars: 3 }
};

assertEqual(findKey(obj1, x => x.stars === 2), 'noma');
assertEqual(findKey(obj1, x => x.stars > 1), 'Akaleri');
assertEqual(findKey(obj1, x => x.stars === 1), 'Blue Hill');