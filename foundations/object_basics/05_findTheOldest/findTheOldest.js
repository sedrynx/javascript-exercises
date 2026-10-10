const findTheOldest = (people) => {
  return people.reduce((oldestSoFar, currentPerson) => {
    let currentYear = new Date().getFullYear();

    let currentPersonAge =
      (currentPerson.yearOfDeath || currentYear) - currentPerson.yearOfBirth;
    let oldestSoFarAge =
      (oldestSoFar.yearOfDeath || currentYear) - oldestSoFar.yearOfBirth;

    return oldestSoFarAge > currentPersonAge ? oldestSoFar : currentPerson;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
