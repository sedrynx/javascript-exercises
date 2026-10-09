const fibonacci = function (num) {
  num = Number(num);
  if (num < 0) return 'OOPS';
  if (num === 0) return 0;
  let firstPrevious = 1;
  let secondPrevious = 1;
  for (let i = 1; i < num; i++) {
    let temp = secondPrevious;
    secondPrevious = firstPrevious + secondPrevious;
    firstPrevious = temp;
  }
  return firstPrevious;
};

// Do not edit below this line
module.exports = fibonacci;
