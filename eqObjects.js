const eqArrays = require('./eqArrays');

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let ele in obj1) {
    if (Array.isArray(obj1[ele]) && Array.isArray(obj2[ele])) {
      if (eqArrays(obj1[ele], obj2[ele]) === false) {
        return false;
      }
    } else if (typeof obj1[ele] === 'object') {
      if (eqObjects(obj1[ele], obj2[ele]) === false) {
        return false;
      }
    } else if (obj1[ele] !== obj2[ele]) {
      return false;
    }    
  }
  return true;
};

module.exports = eqObjects;