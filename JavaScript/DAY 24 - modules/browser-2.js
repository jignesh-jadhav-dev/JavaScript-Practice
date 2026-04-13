// ! ES6 modules - ( exporting the data from one file to another file with browser side only)

// ~ default exporting - (only one data should be export but with the help of Array we can send multiple data)

function sum(a, b) {
  return a + b;
}

let arr1 = [10, 20, 30];

let obj1 = { name: "nmk" };

export default a; // ? only one data

// export default [a, obj1]; // ? multiple data using array

// ^ named export - (multiple data should be export and all data should be prefix with "export" keyword)

export function sub(a, b) {
  if (a > b) return a - b;
  return b - a;
}
export function multy(a, b) {
  return a * b;
}
export function div(a, b) {
  if (a > b) return b / a;
  return a / b;
}

export let obj = {
  name: "abc",
  id: 12,
};

export let arr = [10, 20, 40, 50];
