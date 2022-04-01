const palindromes = function (input) {
  let inputFormat = input.toLowerCase();
  let palindrome = inputFormat.replace(/,|\.|!|\s/g, "");
  let o = palindrome.length - 1;
  checkPalindrome: for (let i = 0; i < palindrome.length; i++) {
    if (palindrome[i] === palindrome[o]) {
      o--;
      continue checkPalindrome;
    } else {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;

//required: remove commas, fullstops, exclamations and spaces. Lowercase conversion.

//for(let i = 0; i < result.length; i++) {
//  if (result[i] !== `\w`) {

//  }
// }
