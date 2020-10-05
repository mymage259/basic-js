const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

let array = arr;
let arrayTest = [];
let count = 0;
let index;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === '--discard-next' || arr[i] === '--discard-prev' || arr[i] === '--double-next' || arr[i] === '--double-prev') {
    count++;
  }
}
for (let i = 0; i < count; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[j] === '--discard-next') {
      for (let k = 0; k < array.length; k++) {
        if (k !== j) {
          arrayTest.push(array[k]);
        }
        else {
          if (j !== array.length - 1 && array[j + 1] !== null) {
            arrayTest.push(null);
            k++;
          }
        }
      }
      array = arrayTest;
      arrayTest = [];
      break;
    } 
    else if (array[j] === '--discard-prev') {
      for (let k = 0; k < array.length; k++) {
        if (k !== j) {
          arrayTest.push(array[k]);
        }
        else {
          if (j !== 0 && array[j - 1] !== null) {
            arrayTest.pop();
            arrayTest.push(null);
          }
        }
      }
      array = arrayTest;
      arrayTest = [];
      break;
    }
    else if (array[j] === '--double-next') {
      for (let k = 0; k < array.length; k++) {
        if (k !== j) {
          arrayTest.push(array[k]);
        }
        else {
          if (j !== array.length - 1 && array[j + 1] !== null) {
            arrayTest.push(array[k + 1]);
          }
        }
      }
      array = arrayTest;
      arrayTest = [];
      break;
    } 
    else if (array[j] === '--double-prev') {
      for (let k = 0; k < array.length; k++) {
        if (k !== j) {
          arrayTest.push(array[k]);
        }
        else {
          if (j !== 0 && array[j - 1] !== null) {
            arrayTest.push(array[k - 1]);
          }
        }
      }
      array = arrayTest;
      arrayTest = [];
      break;
    }
  }
}
for (let i = 0; i < array.length; i++) {
  if (array[i] !== null) {
    arrayTest.push(array[i]);
  }
}
array = arrayTest;
return array;
}; 
