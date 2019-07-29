const middle = function(arr) {
  const mid = Math.floor(arr.length / 2);
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    return [arr[mid - 1], arr[mid]];
  } else {
    return [arr[mid]];
  }
};

module.exports = middle;
