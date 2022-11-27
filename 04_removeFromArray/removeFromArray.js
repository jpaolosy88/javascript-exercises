const removeFromArray = function (arr, ...items) {
  for (let item of items) {
    let toRemove = arr.indexOf(item);
    if (toRemove != -1) {
      arr.splice(toRemove, 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
