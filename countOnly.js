const countOnly = function(allItems, itemsToCount) {
  const itemCount = allItems.reduce((total, val) => {
    if (itemsToCount[val] === true) {
      total[val] = total[val] || 0;
      total[val] += 1;
    }
    return total;
  }, {});
  return itemCount;
};

module.exports = countOnly;