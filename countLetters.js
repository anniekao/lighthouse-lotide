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

// Tests
const str = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1
};

const result = countLetters("light house in the house");

for (let char in str) {
  assertEqual(str[char], result[char]);
}

const str2 = {
  h: 1,
  e: 1,
  l: 2,
  o: 2,
  y: 1,
  u: 1
};

const result2 = countLetters("hello you");

for (let char in str) {
  assertEqual(str2[char], result2[char]);
}



