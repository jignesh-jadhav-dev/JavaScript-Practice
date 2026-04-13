// ! common JS modules - ( exporting the data from one file to another file with server side only)

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  if (a > b) return a - b;
  return b - a;
}
function multy(a, b) {
  return a * b;
}
function div(a, b) {
  if (a > b) return b / a;
  return a / b;
}

let obj = {
  name: "abc",
  id: 12,
};

let arr = [10, 20, 40, 50];

module.exports = { sum, sub, multy, div, arr, obj }; // ? this is syntax for exporting data
