// ! common JS modules - ( importing the data from another file with server side only)

let x = requird("./server-2.js"); // ? this is line for importing the data
console.log(x);

let { sub, sum, multy, div, arr, obj } = x;  // ? destructuring

console.log(sum(10, 20));
console.log(sub(110, 20));
console.log(multy(2, 4));
console.log(div(4, 2));

console.log(arr);
console.log(obj);
