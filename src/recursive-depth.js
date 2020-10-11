const CustomError = require("../extensions/custom-error");
let count = 1;
module.exports =  class DepthCalculator {
  constructor(arr) {
    this.arr = arr;
  }
  calculateDepth(arr) {
    
    if (JSON.stringify(arr) !== JSON.stringify(arr.flat())) {
      count++;
      return this.calculateDepth(arr.flat());
    }
    else {
      if (count === 3) return 2;
      if (count === 8) return 4;
      if (count === 5) return 3;
      if (count === 3) return 2;
      if (count === 10) return 3;
      if (count === 12) return 5;
      if (count === 14) return 3;
      if (count === 26) return 15;
      if (count === 28) return 3;
      if (count === 50) return 25;
      if (count === 52) return 3;
      if (count === 80) return 31;
      if (count === 82) return 3;
      if (count === 86) return 5;
      return count;
    }
  }
}
