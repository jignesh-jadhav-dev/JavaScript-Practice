// ~ Array HOF

// ! find ()

let ar = [10, 20, 30, 40, 50, 60];

let demo = function (v, i, arr) {
  console.log(v, i, arr);
  return v >= 30;
};
let r1 = ar.find(demo);
console.log(r1);

//^ findindex()

let index = ar.findIndex((c) => c >= 45);
console.log(index);

// & filter()

let r2 = ar.filter((v) => v > 30);
console.log(r2);

// * some()

let r3 = ar.some((v) => v > 300);
console.log(r3);

// ? every()

let r4 = ar.every((v) => {
  return v < 5;
});
console.log(r4);
