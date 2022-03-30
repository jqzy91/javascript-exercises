const add = function (firstAdd, secondAdd) {
  result = firstAdd + secondAdd;
  return result;
};

const subtract = function (firstSub, secondSub) {
  result = firstSub - secondSub;
  return result;
};

const sum = function (sumArray) {
  let result = 0;
  for (let i = 0; i < sumArray.length; i++) {
    result += sumArray[i];
  }
  return result;
};

const multiply = function (multiArray) {
  let result = 1;
  for (let i = 0; i < multiArray.length; i++) {
    result *= multiArray[i];
  }
  return result;
};

const power = function (num, powerOf) {
  let result = num;
  for (let i = 1; i < powerOf; i++) {
    result *= num;
  }
  return result;
};

const factorial = function (num) {
  let result = 1;
  for (let i = num; 0 < i; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
