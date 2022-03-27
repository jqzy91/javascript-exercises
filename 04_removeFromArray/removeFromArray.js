const removeFromArray = function (theArray, ...theArgs) {
  for (let i = 0; i < theArray.length; i++) {
    for (let o = 0; o < theArgs.length; o++) {
      if (theArgs[o] === theArray[i]) {
        theArray.splice(i, 1);
        i--;
      }
    }
  }
  return theArray;
};

// const removeFromArray = function (theArray, ...theArg) {
//   for (let i = 0; i <= theArray.length; i++) {
//     for (let o = 0; o < theArg.length; o++) {
//       if (typeof theArg[o] === "string") {
//         if (
//           theArg.indexOf(theArg[o]) === i &&
//           theArray[i] === theArg.indexOf(o)
//         ) {
//           theArray.splice(i - 1, 1);
//         }
//       } else if (theArg[o] === i) {
//         theArray.splice(i - 1, 1);
//       }
//     }
//   }
//   return theArray;
// };

// Do not edit below this line
module.exports = removeFromArray;
