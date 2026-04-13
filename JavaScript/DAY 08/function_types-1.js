//~ Anonymous Function

// function(){}

//! Name function

function f1() {
  console.log("name function");
}
f1();

// ^ function with expression

let a = function () {
  console.log("function with expression");
};
a();

// * arrow function

//  ? arrow function syntax :- () => {};

var g1 = () => console.log("arrow function");
g1();

var g2 = (v) => {v};
console.log(g2("js"));
