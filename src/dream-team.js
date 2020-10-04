const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members === null || typeof members !== 'object' || members.length === 0) {
    return false;
  }
  let membersSort = [];
  let result = '';
  let memberChar = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      membersSort.push(members[i].trim().toUpperCase());
    }
  }
  for (let i = 0; i < membersSort.length; i++) {
    memberChar.push(membersSort[i][0]);
  }
  let memberCharMin = 'a';
  let j;
  for (let i = 0; i < memberChar.length; i++) {
    for (let i = 0; i < memberChar.length; i++) {
      if (memberChar[i].charCodeAt() < memberCharMin.charCodeAt()) {
        memberCharMin = memberChar[i];
        j = i;
      }
    }
    result += memberCharMin;
    memberChar[j] = 'a';
    memberCharMin = 'a';
  }
  return result;
};
