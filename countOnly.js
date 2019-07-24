const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🤖Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩Assertion Failed: ${ actual } !== ${ expected }`);
  }
};

// Takes in a collection of items and returns a count for a specific subset of those items
const countOnly = function(allItems, itemsToCount) {
  const itemCount = allItems.reduce((total, val) => {
    if (itemsToCount[val] === true) {
      total[val] = total[val] || 0;
      total[val] += 1;
    }
    return total;
  }, {});
  return itemCount;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {
  "Jason": true,
  "Karima": true,
  "Fang": true
});
