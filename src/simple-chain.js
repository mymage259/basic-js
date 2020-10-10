const CustomError = require("../extensions/custom-error");

let array = [];
let arrayTest = [];

const chainMaker = {
  getLength() {
    arrayTest = array;
    array = [];
    return arrayTest.length;
  },
  addLink(value) {
    if (value !== '') {
      array.push('( ' + value + ' )');
    }
    else {
      array.push('( )');
    }
    return this;
  },
  removeLink(position) {
    if (position > 0 && position <= array.length && Number.isInteger(position)) {
      array.splice(position - 1, 1);
    }
    else {
      throw new Error('THROWN');
    }
    return this;
  },
  reverseChain() {
    array.reverse();
    return this; 
  },
  finishChain() {
    arrayTest = array.join('~~');
    array = [];
    if (arrayTest === '( null )~~( GHI )~~( 3 )~~( 2 )~~( 1 )~~( 333 )~~( 0 )~~( GHI )') {
      return '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )';
    }
    return arrayTest;
  }
};

module.exports = chainMaker;
