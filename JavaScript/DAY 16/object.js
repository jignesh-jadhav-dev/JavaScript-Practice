// ~ object declaration

var std = {
  name: "xyz",
  id: 800,
  fn: function () {
    console.log("demo function");
  },
  arr: () => {},
  skill: ["js", "java"],
  getname() {
    console.log("getname functions");
  },
  address: {
    location: "Jspiders thane",
    pincode: 4000301,
  },
  id: 1000, // ? values will be updated
};

console.log(std);

// * how to find particular values in object - the are two ways
// ? using (.notation)
// ? using ([]notation)

console.log(std.name); // ? using (.notation)

console.log(std["skill"]); // ? using ([]notation)

console.log(std["skill"][1]);

console.log(std.address.location);

std.arr(); // ? calling the function using (.notation)

std["getname"](); // ? calling the function using ([]notation)

std["fn"](); // ? calling the function using ([]notation)

std.getname(); // ? calling the function using (.notation)

// ! how to add property / method in existing object (two ways)

std.percentage = 90; // ? using (.notation)
std["category"] = "male"; // ? using ([]notation)

// ^ how to update values in existing object (two ways)

std.id = 400; // ? using (.notation)
std["name"] = "abc"; // ? using ([]notation)

// & how to deleted the property and method (two ways)

delete std.name; // ? using (.notation)
delete std["id"]; // ? using ([]notation)

// * in for-of loop the object are not iterable

// for (let i of std) {
//   console.log(i); // ? uncaught TypeError : std is not iterable
// }

// * in for-in loop the object are iterable their all keys

for (let i in std) {
  console.log(i); // ? only for-in loop object are be iterable and the output of iterable is "keys"
}
