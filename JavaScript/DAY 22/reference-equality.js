// ! reference equality - in js the memory allocating is depends on datatypes

// ~ primitive datatype - it compared the data or values (NAN and Symbol are not consider)

let a = 100;
let b = 100;
console.log(a == b); //? true

// console.log((NAN = NAN)); //? false

let c = Symbol("data");
let d = Symbol("data");
console.log(c == d); //? false

// ~ non-primitive datatype - it compared the object address

let ar = [10, 20, 30];
let br = [10, 20, 30];
console.log(ar == br); //? false

console.log([] == []); //? false
console.log({} == {}); //? false
console.log((() => {}) == (() => {})); //? false

// const y = "str";
// y = "str";

const std = {
  name: "abc",
  id: 111,
};
std.name = "xyz";
console.log(std);
