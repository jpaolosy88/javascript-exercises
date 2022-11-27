const sumAll = function (num1, num2) {
  let numInit = num1;
  let numFinal = num2;
  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 != "number" ||
    typeof num2 != "number"
  ) {
    return "ERROR";
  } else {
    if (num1 > num2) {
      numInit = num2;
      numFinal = num1;
    }
    return ((numFinal - numInit + 1) * (numInit + numFinal)) / 2;
  }
};

// Do not edit below this line
module.exports = sumAll;
