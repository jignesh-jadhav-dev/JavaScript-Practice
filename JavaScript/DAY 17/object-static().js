// ! Static methods in object - in static we use class references

let emp = {
  name: "xyz",
  id: 900,
  age: 23,
  salary: 90000,
  isMarried: false,
  kind: null,
  skill: ["js", "SQL"],
};

// ~ object.freeze() - in that you can not add,update,deleted the key-values in existing object

// Object.freeze(emp);

// ^ object.isFrozen() - it check the object is an "freeze mode" or not , it return boolean values

// console.log(Object.isFrozen(emp));

// & object.seal() - in that you can update the key-values but you can not add,deleted the key-values in existing object

// Object.seal(emp);

// * object.isSealed() - it check the object is an "seal and freeze mode" or not , it return boolean values

// console.log(Object.isSealed(emp));

// ? object.keys() - it use to check the keys of an object , it return into new array

let ke = Object.keys(emp);
console.log(ke);

// ? how to iterated keys - (only using for-in loop)

for (let q1 in emp) {
  console.log(q1);
}

// ~ object.values() - it use to check the values of an object , it return into new array

let value = Object.values(emp);
console.log(value);

for (let v of value) {
  console.log(v);
}

// ^ object.entity() - it use to check the both keys and values of an object , it return into new two dimensional array

let en = Object.entries(emp);
console.log(en);

// * object.assign() - it is use to add the source object into target object , it return target object

let a = { name: "abc" };
let b = { id: 12, age: 25 };
let c = { skill: "java", age: 12 };

let r1 = Object.assign(a, b, c);
console.log(r1);

// ! how to copy the object

let demo = { some: "data-copy", id: 878, skill: "javascript" };

// ^ first-way - by copying the reference of objects

let copy1 = demo;
console.log(copy1);

// & second-way - using Object.assign()  (in that we pass one empty object in target object)

let copy2 = Object.assign({}, demo);
console.log(copy2);

// * third-way - for in loop (in that we iterate the keys and stored in the empty object)

let copy3 = {};

for (let i in demo) {
  copy3[i] = demo[i];
}
console.log(copy3);
