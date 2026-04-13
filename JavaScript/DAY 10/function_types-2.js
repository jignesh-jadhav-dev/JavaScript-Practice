// ~ Higher oder function

function demo(a, b) {
  console.log(a, b);
  a();
  b();
}

demo(
  function () {
    // ! callback function
    console.log("anonymous function");
  },
  () => {
    // ! callback function
    console.log("arrow function");
  }
);

// ^ immediate invoke function expression

(function (a, b) {
  console.log("IIFE");
  console.log(a, b);
})(10, 20);

// & curring function

function f1(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

let m = f1(10)(20)(30);
console.log(m);

// * pure function

var sum = (x, y) => {
  let z = x + y;
  return z;
};

console.log(sum(10, 49));

// ? impure function

var i = 10;

function a1(j, k) {
  i++;
  return j + k + i;
}
console.log(a1(20, 30));
console.log(a1(20, 30));

// ^ nested function

function m1() {
  var j1 = 100;
  console.log(j1);
  function m2() {
    var j2 = 2000;
    console.log(j2);
    console.log("nested function");
  }
  m2();
}
m1();
