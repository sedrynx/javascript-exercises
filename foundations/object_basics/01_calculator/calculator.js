const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (sumAll) => {
  return sumAll.reduce((total, value) => total + value, 0);
};

const multiply = (multiplied) => {
  return multiplied.reduce((total, value) => total * value, 1);
};

const power = (a, b) => a ** b;

const factorial = (num) => {
  let result = 1;
  for (let i = num; i > 1; i--) {
    console.log(i);
    result = result * i;
    console.log(result);
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
