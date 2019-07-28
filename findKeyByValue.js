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

// Tests

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Curb Your Enthusiasm"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");




