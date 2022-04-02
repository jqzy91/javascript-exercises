const fibonacci = function (input) {
  parseInt(input);
  let aFib = 0;
  let bFib = 1;
  let result = "OOPS";
  for (let i = 1; i <= input; i++) {
    if (input < 0) {
      result = "OOPS";
    } else if (i === 1) {
      result = 1;
    } else {
      result = aFib + bFib;
      aFib = bFib;
      bFib = result;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = fibonacci;

// most probably need a loop to do the calculations.

// input 6, loop will do the calculation 6 times.

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811
