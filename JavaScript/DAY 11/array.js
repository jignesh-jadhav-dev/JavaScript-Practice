// ~ homogenous array (type 1)

var arr = [20, 10, 30, 40, 50, 60, 2, 70];
console.log(arr);
console.log(typeof arr);
console.log(arr.length);
console.log(arr[3]);
console.log(arr[20]);

// ! how to add array element

arr[8] = 500;
arr[14] = 400;
console.log(arr[9]);
console.log(arr);

// ^ how to update array element

arr[1] = 1000;

// & how to deleted array element

delete arr[3];

// * heterogenous array (type 2)

var a = [
  100,
  "string",
  false,
  () => "arr",
  [10, 29],
  { name: "abc" },
  undefined,
];

// ? check wither values is array or not

let n = { name: "abc" };
let res = Array.isArray(n);
console.log(res);

// ~ Three ways we can create array

// * literal (1 way)

let arr1 = [100, 50, 2020, 20, 1022, 40];
console.log(arr1);

// * using array constructor (2 way)

let arr2 = new Array(3);
console.log(arr2);

// * using Array.of() (3 way)

let arr3 = Array.of(20);
console.log(arr3);