const caesar = function (phrases, shift) {
  const result = [];
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";

  // (for .match) / indicates start/end of Regular expression
  // ^ means 'start with'
  // [] means 'character set'. it will match any characters between [ and ]

  if (shift > 0) {
    for (let i = 0; i < phrases.length; i++) {
      if (phrases[i].match(/^[.,:!? ]/)) {
        result.push(phrases[i]);
      } else if (phrases[i] === phrases[i].toUpperCase()) {
        for (let o = 0; o < upperCase.length; o++) {
          if (phrases[i] === upperCase[o]) {
            let encrypt = (upperCase.indexOf(upperCase[o]) + shift) % 26;
            result.push(upperCase[encrypt]);
          }
        }
      } else if (phrases[i] === phrases[i].toLowerCase()) {
        for (let p = 0; p < lowerCase.length; p++) {
          if (phrases[i] === lowerCase[p]) {
            let encrypt = (lowerCase.indexOf(lowerCase[p]) + shift) % 26;
            result.push(lowerCase[encrypt]);
          }
        }
      }
    }
    return result.join("");
  } else if (shift < 0) {
    for (let i = 0; i < phrases.length; i++) {
      if (phrases[i].match(/^[.,:!? ]/)) {
        result.push(phrases[i]);
      } else if (phrases[i] === phrases[i].toUpperCase()) {
        for (let o = 0; o < upperCase.length; o++) {
          if (phrases[i] === upperCase[o]) {
            let encrypt = upperCase.indexOf(upperCase[o]) + (shift % 26);
            if (encrypt < 0) {
              encrypt += 26;
            }
            result.push(upperCase[encrypt]);
          }
        }
      } else if (phrases[i] === phrases[i].toLowerCase()) {
        for (let p = 0; p < lowerCase.length; p++) {
          if (phrases[i] === lowerCase[p]) {
            let encrypt = lowerCase.indexOf(lowerCase[p]) + (shift % 26);
            if (encrypt < 0) {
              encrypt += 26;
            }
            result.push(lowerCase[encrypt]);
          }
        }
      }
    }
    return result.join("");
  }
};

// Do not edit below this line
module.exports = caesar;

//
