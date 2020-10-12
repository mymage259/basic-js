const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // str - строка
  // options объяект содержит строки или нужно преобразовать к строкам
  // options.repeatTimes - число с указанием количества повторений строки
  // options.separator - строка содержит разделители повторений строки по умолчанию '+'
  // options.addition - приписка к строке, может отсутствовать
  // options.additionRepeatTimes - число сколько раз повторить приписку к строке
  // options.additionSeparator - строка содержит разделители повторений приписок к строке по умолчанию '|'
  if (str === null) {
    str = 'null';
  }
  let repeatTimes = options.repeatTimes;
  if (repeatTimes === undefined) {
    repeatTimes = 1;
  }
  let separator = options.separator;
  if (separator === undefined) {
    separator = '+';
  }
  let addition = options.addition;
  if (addition === undefined) {
    addition = '';
  }
  if (addition === null) {
    addition = 'null';
  }
  let additionRepeatTimes = options.additionRepeatTimes; 
  if (additionRepeatTimes === undefined) {
    additionRepeatTimes = 1;
  }
  let additionSeparator = options.additionSeparator;
  if (additionSeparator === undefined) {
    additionSeparator = '|';
  }
  let arrayAddition = [];
  for (let i = 0; i < additionRepeatTimes; i++) {
    arrayAddition.push(addition);
  }
  let mainStr = str + arrayAddition.join(additionSeparator);
  let arrayStr = [];
  for (let i = 0; i < repeatTimes; i++) {
    arrayStr.push(mainStr);
  }
  return arrayStr.join(separator);

};
  
