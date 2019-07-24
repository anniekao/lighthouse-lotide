const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤖Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩Assertion Failed: ${ actual } !== ${ expected }`);
  }
};

const eqArrays = function (arr1, arr2) {
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

const eqObjects = function (obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let ele in obj1) {
    if (obj1.hasOwnProperty(ele) && obj2.hasOwnProperty(ele)) {
      if (Array.isArray(obj1[ele]) && Array.isArray(obj2[ele])) {
        if (!eqArrays(obj1[ele], obj2[ele])) {
          return false;
        }
      } else if (obj1[ele] !== obj2[ele]) {
        return false;
      }
    }
  }
  return true;
};


