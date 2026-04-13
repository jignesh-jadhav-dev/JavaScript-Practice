// ! rest parameters

// ? A rest parameter must be last in a parameter list & suffice with (...)

let arr = (a, b, ...c) => {
  console.log(a, b);
  console.log(c);
};
arr(10, 20, 30, 40, 50, 60, 70, 80, 90);

// ~ spread operator - only we spread which are iterable data structure (array and string only)

let s = "javascript";
console.log(...s);

let a1 = [10, 20, 30, 50, 80, 800];
console.log(...a1);

// * use case of spread

let str1 = "java";
let arr1 = [...str1];
console.log(arr1);

let x = [10, 20];
let y = [30, 40];
let z = [50, 60];
console.log([...x, ...y, ...z]);

let arr2 = [90, 80, 70, 40, 50, 60];
function f2(a, ...b) {
  console.log(a, b);
}
f2(...arr2);

// ~ copy the array and object

let copy1 = [...arr2];
console.log(copy1);

// ! how to convert array into object

console.log({ ...arr2 });

let obj = {
  ename: "abc",
  id: 40,
  salary: 80000,
};

let copy2 = { ...obj };
console.log(copy2);
