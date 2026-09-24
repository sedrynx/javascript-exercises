const removeFromArray = function (arr, ...args) {
  let remainingItems = [];
  for (let i = 0; i < arr.length; i++) {
    if (!args.includes(arr[i])) {
      remainingItems.push(arr[i]);
    }
  }
  return remainingItems;
};

removeFromArray([1, 2, 3, 4], 3, 2);
// Do not edit below this line
module.exports = removeFromArray;
