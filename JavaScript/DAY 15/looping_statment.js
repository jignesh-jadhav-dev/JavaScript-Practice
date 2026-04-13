//~ looping statements

// !while loop

// let i = 0; // ? initialize the variable

// while (i < 5) {
// console.log("hi");
// i++; //? updating
// }

// ^ do while loop

// let j = 5; // ? initialize the variable
// do {
//   console.log("hi");
//   j++; // ? updating
// } while (j < 4);

// & for loop

// for (let k = 0; k < 5; k++) {
//   console.log("hello");
// }

// * for in loop   (to find index position of all array element in array)

let a1 = [100, 200, 300, 400, 500];

for (let i in a1) {
  console.log(i);
}

// ~ for of loop   (to find all array element in array)

for (let i of a1) {
  console.log(i);
}

// & reverse the array

let b1 = [10, 20, 30, 40, 50];
console.log(b1);
let m = 0;
let newArr = [];

while (m < b1.length) {
  newArr.unshift(b1[m]);
  m++;
}

console.log(newArr);

// ! other ways of reverse the array

let o = b1.length - 1;
let newa = [];
do {
  newa.push(b1[o]);
  o--;
} while (o >= 0);
console.log(newa);

// ^ reverse the array using for loop

let arrr = [10, 20, 2, 1, 30, 45, 54, 58];
let jig = [];

for (let i = 0; i < arrr.length; i++) {
  jig.unshift(arrr[i]);
}
console.log(arrr);
console.log(jig);
