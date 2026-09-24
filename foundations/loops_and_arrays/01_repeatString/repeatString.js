const repeatString = function (string, num) {
  if (num < 0) {
    return 'ERROR';
  }
  let repeatedString = '';
  for (let i = 0; i < num; i++) {
    repeatedString += string;
  }
  return repeatedString;
};

console.log('   03: ', repeatString('hey', 3));
console.log('   00: ', repeatString('hey', 0));
console.log('   -1: ', repeatString('hey', -1));
console.log('Blank: ', repeatString());
// Do not edit below this line
module.exports = repeatString;
