const reverseString = function (string) {
  let reverse = "";
  for (i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
    console.log(string.length);
  }
  return reverse;
};

// Do not edit below this line
module.exports = reverseString;

// 1. Assign numbers to each letters from the string input.
// 2. Return the numbers starting from the back using loop.
