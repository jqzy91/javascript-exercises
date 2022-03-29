const sumAll = function (startNum, endNum) {
  let totalNum = 1;
  if (
    startNum < 0 ||
    typeof startNum === "string" ||
    typeof startNum === "object" ||
    endNum < 0 ||
    typeof endNum === "string" ||
    typeof endNum === "object"
  ) {
    return "ERROR";
  } else if (startNum < endNum) {
    for (let i = startNum; i < endNum; i++) {
      addNum = i + startNum;
      totalNum += addNum;
    }
  } else if (startNum > endNum) {
    for (let o = startNum; o > endNum; o--) {
      totalNum += o;
    }
  }
  return totalNum;
};

// Do not edit below this line
module.exports = sumAll;
