const convertToCelsius = function (degree) {
  timesTen = (degree - 32) * (5 / 9) * 10;
  return Math.round(timesTen) / 10;
};

const convertToFahrenheit = function (degree) {
  timesTen = (degree * (9 / 5) + 32) * 10;
  return Math.round(timesTen) / 10;
};

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

// 36.599999 turns into 365.99999.
// Then I Math.round it so it turns into a whole number 366.
// Then I divide by 10 so it outputs 36.6
