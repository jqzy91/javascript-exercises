// const people = [
//   {
//     name: "Carly",
//     yearOfBirth: 1942,
//     yearOfDeath: 1970,
//   },
//   {
//     name: "Ray",
//     yearOfBirth: 1962,
//     yearOfDeath: 2011,
//   },
//   {
//     name: "Jane",
//     yearOfBirth: 1912,
//     yearOfDeath: 1941,
//   },
// ];

// const findTheOldest = function (array) {
//   array.map((people) => people);

// };

const findTheOldest = function (array) {
  const age = [];

  let today = new Date().getFullYear();

  for (let i = 0; i < people.length; i++) {
    if (people[i].yearOfDeath === undefined) {
      age.push((people[i]["present"] = today));
      age[i] = today - people[i].yearOfBirth;
    } else {
      age.push(people[i].yearOfDeath - people[i].yearOfBirth);
    }
  }
  let result = age.indexOf(Math.max(...age));
  return people[result];
};

// const findTheOldest = function (array) {
//   let oldest;
//   let today = new Date().getFullYear();
//   if (
//     array.map((people) => people.yearOfDeath - people.yearOfBirth) === undefined
//   ) {
//     console.log(today);
//     oldest = array.map((people) => today - people.yearOfBirth);
//   } else {
//     oldest = array.map((people) => people.yearOfDeath - people.yearOfBirth);
//   }

//   let result = oldest.indexOf(Math.max(...oldest));
//   console.log(result);
//   return people[result];
// };

//////////////

// const findTheOldest = function (array) {
//   const oldest = array.map((people) => people.yearOfDeath - people.yearOfBirth);

//   let result = oldest.indexOf(Math.max(...oldest));

//   return people[result];
// };

// Do not edit below this line
module.exports = findTheOldest;
