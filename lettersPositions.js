const lettersPositions = function(str) {
  const countIndex = {};
  str = str.split(' '). join('');
  for (let i = 0; i < str.length; i++) {
    if (countIndex[str[i]]) {
      countIndex[str[i]].push(i);
    } else {
      countIndex[str[i]] = [];
      countIndex[str[i]].push(i);
    }
  }

  return countIndex;
};

module.exports = lettersPositions;



