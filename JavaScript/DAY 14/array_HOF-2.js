// ~ map() - perform same operation for every array element

let arr = [20, 30, 10, 50, 60];

let r1 = arr.map((v) => {
  return v > 10 ? "java" : "python";
});
console.log(r1);

let r2 = arr.map(function (v) {
  return v * 2;
});
console.log(r2);

// ! forEach() - same like map but it's return void, so we are stored in the array manually using ".push()"

let newArr = [];

arr.forEach((v) => {
  let c = v * 2;
  newArr.push(c);
});

console.log(newArr);

// ^ reduce() - reduce the array and return into single values left-right

let r3 = arr.reduce((pv, cv) => {
  console.log(pv, cv);
  return pv + cv;
});
console.log(r3);

let r4 = arr.reduce((pv, cv) => {
  console.log(pv, cv);
  return pv + cv;
}, 100);
console.log(r4);

// & reduceRight() - reduce the array and return into single values right-left

let r5 = arr.reduceRight((pv, cv) => {
  console.log(pv, cv);
  return pv + cv;
}, 100);

console.log(r5);

// ? sort() - sort the array element based on "ASCII values"

let fr = ["apple", "Banana", "mango", "Pine apple", "Kiwi", "water melon"];
fr.sort();
console.log(fr);

let a1 = [20, 9, 400, 32, 1000, 1, 10, 69, -1100];
a1.sort();
console.log(a1);

// ? for ascending order

let a2 = [20, 9, 400, 32, 1000, 1, 10, 69, -1000];
a2.sort((a, b) => a - b);
console.log(a2);

// ? for descending order

let a3 = [20, 9, 400, 32, 1000, 1, 10, 69, -1000];
a3.sort((a, b) => b - a);
console.log(a3);
