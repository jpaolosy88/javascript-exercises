const repeatString = function (word, qty) {
  if (qty < 0) {
    return "ERROR";
  }
  let result = "";
  for (let i = 0; i < qty; i++) {
    result += word;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
