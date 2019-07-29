const findKeyByValue = function(source, value) {
  for (let genre in source) {
    if (source.hasOwnProperty(genre)) {
      if (source[genre] === value) {
        return genre;
      }
    }
  }
};

module.exports = findKeyByValue;






