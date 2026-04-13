// ! Destructuring - it pattern of giving unique ID

// ~ Destructuring of array

let arr = [10, 20, 30, 40, 50];

var [a, b, c, ...d] = arr;
console.log(a, b, c); // ? 10,20,30
console.log(d); // ? [40,50]

// ~ Destructuring of object

let degree = "B.TECH";

let obj = {
  name: "abc",
  id: 10,
  skill: ["java", "SQL"],
  degree: "IT",
  percentage: 70,
};

let { skill, degree: sdegree, ...j } = obj;

console.log(skill); //? [ 'java', 'SQL' ]
console.log(j); //? { name: 'abc', id: 10, percentage: 70 }
console.log(sdegree); // ? IT
console.log(degree); // ? B.TECH
