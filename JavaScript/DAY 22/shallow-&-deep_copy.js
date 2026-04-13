// ! shallow copy - if we changed the values of the original object/array the values get modify in copy object - (both primitive & Non-primitive)

let emp = {
  name: "sachin",
  id: 800,
  skill: ["java", "SQL"],
  address: {
    location: "JSpiders thane",
  },
  salary: 140000,
};

// ~ by coping the object reference - (it modify primitive and non-primitive values)

// let copy1 = emp;
// console.log(emp == copy1); // ? true
// emp.name = "dhoni"; // ? primitive values
// emp.address.location = "QSpider thane"; // ? Non-primitive values
// console.log(copy1);

// ^ by spread operator - (it modify only non-primitive values)

// let copy2 = { ...emp };
// console.log(copy2 == emp); // ? false
// emp.name = "dhoni"; // ? primitive values
// emp.address.location = "QSpider thane"; // ? Non-primitive values
// console.log(copy2);

// & by using for in loop - (it modify only non-primitive values)

// let copy3 = {};
// for (let a in emp) {
//   copy3[a] = emp[a];
// }
// console.log(copy3 == emp); // ? false
// emp.name = "dhoni"; // ? primitive values
// emp.address.location = "QSpider thane"; // ? Non-primitive values
// console.log(copy3);

// * by using Object.assign() - (it modify only non-primitive values)

// let copy4 = Object.assign({}, emp);
// console.log(copy4 == emp); // ? false
// emp.name = "dhoni"; // ? primitive values
// emp.address.location = "QSpider thane"; // ? Non-primitive values
// console.log(copy4);

// ! deep copy - if we changed the values of the original object/array the values get not-modify in copy object - (both primitive & Non-primitive)

// ~ by using structuredClone(object_reference)

// let copy5 = structuredClone(emp);
// emp.name = "dhoni"; // ? primitive values
// emp.address.location = "QSpider thane"; // ? Non-primitive values
// console.log(copy5 == emp);
// console.log(copy5);

// ^ by using JSON.stringify(object_reference)  to convert Object to JSON

// let str = JSON.stringify(emp);
// emp.name = "dhoni"; // ? primitive values
// emp.address.location = "QSpider thane"; // ? Non-primitive values
// console.log(str);

// & JSON.parse(object_reference) - to convert JSON to Object

// let copy6 = JSON.parse(str);
// emp.name = "dhoni"; // ? primitive values
// emp.address.location = "QSpider thane"; // ? Non-primitive values
// console.log(copy6);
