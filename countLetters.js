const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤖Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩Assertion Failed: ${ actual } !== ${ expected }`);
  }
};

const countLetters = function(str) {
  const count = str.replace(/\s/g, '').split('').reduce((total, char) => {
    total[char] ? total[char]++ : total[char] = 1;
    return total;
  }, {});
  return count;
};






