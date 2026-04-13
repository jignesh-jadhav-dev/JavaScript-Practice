//~ push() - use to add array element in end

var arr = [20, 30, 10, 50, 70];
let r1 = arr.push(100, 200, 300);
console.log(r1);

//! unshift() - use to add array element in start

let r2 = arr.unshift(100, 200, 300);
console.log(r2);

//^ pop() - use to remove array element in end

let r3 = arr.pop();
console.log(r3);
arr.pop;

// & shift() - use to remove array element in start

let r4 = arr.shift();
console.log(r4);
console.log(arr);

// * slice() - extract the path of array and return into new array

let ar = [20, 30, 10, 50, 80, 90, 70, 60, 100, 40];
console.log(ar.slice(2, 6));
console.log(ar.slice(7));
console.log(ar.slice(-4));
console.log(ar);

// ? splice() - add , remove deleted the element at same time

ar.splice(3, 3, 500, 400, 600, 800, 900);
let r5 = ar.splice(4, 4);
console.log(r5);
console.log(ar);

// ~ reverse()
var d1 = [10, 20, 20, 30, 40, 50];
d1.reverse();
console.log(d1);

// ! concat()

let x = [10, 20, 30];
let y = [40, 50, 60];
let z = [70, 80, 90];

let r6 = x.concat(y, z);
let r7 = x.concat(x, y, z, x);
console.log(r6);
console.log(r7);

// ^ include() - use to search the element

console.log(d1.includes(70, 2));

// * indexOf()

let j1 = new Array(10, 20, 30, 40, 50, 10, 60);
console.log(j1);

console.log(j1.indexOf(10, 2));

// ? lastIndexOf()

console.log(j1.lastIndexOf(10, 4));

//~ fill()

j1.fill("str", 4, 4);
j1.fill("str", 4);
j1.fill("str");
console.log(j1);

// ! flat()

let j2 = [10, 20, [30, 40, [[40, 30], 50], 60], 90, 100];
let result = j2.flat(2);
let result1 = j2.flat(Infinity);
console.log(result);
console.log(result1);
