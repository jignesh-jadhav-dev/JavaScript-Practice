function f1(a, b, c) {
  console.log(a, b);
  console.log(c);
  console.log("Start");
  var x = 100;
  console.log(x);
  console.log("end");
}
// f1(10n, null);
// f1();
// f1(0.101, 20, 200, 40);

//~ How to Set Default values for parameter

function f2(x = 100, y = 200, z = 300) {
  console.log(x, y, z);
}
f2("java", "js");
f2();

var z = 9000;
function f3() {
  let c = 200 + 300;
  console.log(c);
  return c;
}

// let r1 = f3();
// console.log(r1);
console.log(f3());

