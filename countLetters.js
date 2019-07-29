const countLetters = function(str) {
  const count = str.replace(/\s/g, '').split('').reduce((total, char) => {
    total[char] ? total[char]++ : total[char] = 1;
    return total;
  }, {});
  return count;
};

module.exports = countLetters;





