// ~ Variable Hoisting

console.log("Start");

// console.log(a); //^ undefine
// console.log(b); //^ Uncaught ReferenceError: Cannot access 'b' before initialization
// console.log(c); //^ Uncaught ReferenceError: Cannot access 'c' before initialization

var a = 10;
let b = 20;
const c = 30;

console.log(a, b, c);

// ! function hoisting

d1();
function d1() {
  let x = 909;
  console.log(x);
  console.log("demo function");
}

arr(); // ^ Uncaught TypeError: arr is not a function
var arr = () => {
  console.log("arrow function");
};
