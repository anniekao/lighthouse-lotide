const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤖Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩Assertion Failed: ${ actual } !== ${ expected }`);
  }
};


const findKeyByValue = function(source, value) {
  for (let genre in source) {
    if (source.hasOwnProperty(genre)) {
      if (source[genre] === value) {
        return genre;
      }
    }
  }
};





