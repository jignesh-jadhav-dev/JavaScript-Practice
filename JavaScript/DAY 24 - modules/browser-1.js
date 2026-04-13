// ! ES6 modules - (importing data from another file with only browser side)

// ~ default exporting - (only one data should be import )

// import a from "./browser-2";

// console.log(add(10, 20));
// console.log(a);

// ^ named export - (multiple data should be import and identifier name must be same in importing data)

import { sub, multy, arr, obj } from "./browser-2";
console.log(sub(50, 5));
