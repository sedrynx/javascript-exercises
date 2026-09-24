const sumAll = function (num1, num2) {
  if (
    typeof num1 !== 'number' ||
    typeof num2 !== 'number' ||
    num1 < 0 ||
    num2 < 0 ||
    !Number.isInteger(num1) ||
    !Number.isInteger(num2)
  ) {
    return 'ERROR';
  }
  let sumOfAll = 0;
  if (num1 > num2) {
    for (let i = num2; i <= num1; i++) {
      sumOfAll += i;
    }
  } else {
    for (let i = num1; i <= num2; i++) {
      sumOfAll += i;
    }
  }
  return sumOfAll;
};

console.log(sumAll(1.5, 4));
// Do not edit below this line
module.exports = sumAll;
