//~ global scope

var a = 100;
function f1() {}

//! Script scope

let b = 900;
const c = "Jignesh";

// ^ local scope

function f2() {
  //~ global scope
  let x = 90; // ^ local scope
  const y = 78; // ^ local scope
  var a = "js"; // ^ local scope
  console.log(x, y, a);
  function inner() {
    // ^ local scope
    let v = "python"; // ^ local scope
    console.log("nested function");
  } // ^ local scope
  inner();
}
f2();

// * block scope

{
  let m = "javascript"; // * block scope
  console.log(m);
  const n = 45; // * block scope
  console.log(n);
  var o = "java"; //~ global scope
}

// & closure

function d1() {
  let j = 1021;
  console.log(j);
  function d2() {
    // & closure
    let k = 313;
    console.log(k);
    console.log(j); // & closure
  }
  d2();
}
d1();

// ? lexical scoping / scope changing

var n1 = 100; //~ global scope

function g1() {
  // var n1 = 200; // ^ local scope
  function g2() {
    // var n1 = 300; // ^ local scope
    console.log(n1);
  }
  g2();
}
g1();
