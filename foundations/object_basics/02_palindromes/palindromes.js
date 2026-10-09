const palindromes = (string) => {
  const cleaned = string.toLowerCase().replace(/[^\w]/g, '');
  const reverse = cleaned.split('').reverse().join('');

  if (cleaned == reverse) {
    return true;
  }
  return false;
};
// Do not edit below this line
module.exports = palindromes;
