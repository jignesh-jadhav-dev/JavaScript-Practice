// ! how to convert Synchronous behavior into Asynchronous behavior (they are four ways)

// ~ setTimeout() and setInterval() - 1 ways = (this both are child of windows object)

// ^ setTimeout() - only one time executed and return one unique number

// ? setTimeout() return 1 unique number

let r1 = window.setTimeout(
  (a, b, ...c) => {
    console.log(a, b);
    console.log(c);
    console.log("Executed after 5 second");
    alert("alert message");
  },
  5000,
  20,
  50,
  40,
  50,
  "java",
  0.2,
  210,
  true,
  10
);
console.log(r1); // ? 1

clearTimeout(r1); // ? it's use to stop the setTimeout()

// & setInterval() - it executed again and again and return one unique number

let r2 = setInterval(
  (x, y, ...z) => {
    console.log(x, y, z);
    confirm("click here");
  },
  3000,
  50,
  40,
  77,
  "javascript",
  true
);
console.log(r2); // ? 2

// ? to stop the setInterval() we want to wrap inside th setTimeout()

setTimeout(() => {
  clearInterval(r2);
}, 9000);
