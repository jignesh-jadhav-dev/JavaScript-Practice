// ! how many ways we can create an object

// ~ literal way

let obj1 = {
  name: "abc",
  id: 10,
  age: 23,
  salary: 9000,
  isMarried: true,
  skill: ["java", "js"],
  getname() {
    console.log("getname function");
  },
};

// ^ Class And Constructor - 1

class Employee {} // ? default constructor with zero parameterized

let e1 = new Employee();
e1.name = "abc";
e1.id = 12;
e1["skill"] = ["java", "SQL"];

// ^ Class And Constructor - 2

class Student {
  constructor(name, id, skills) {
    this.eName = name;
    this.eId = id;
    this.eSkill = skills;
  }
}

let s1 = new Student("xyz", 10, ["java"]);
console.log(s1);

let s2 = new Student("mno", 20, ["SQL"]);
console.log(s2);

class Users {
  bonus = 200;
  static a = 9000;
  constructor(name) {
    this.Uname = name;
  }
  demo() {
    console.log("demo function");
  }
  static staticMethod() {
    console.log("static method");
  }
}

Users.a = 1000; // ? calling static member with class name
console.log(Users.a);

let u1 = new Users("pqr");
u1.bonus = 500; //? calling non static member with object reference
console.log(u1);

let u2 = new Users("xyz");
u2.bonus = 800;
console.log(u2);
u2.demo();
u1.demo();

// & Constructor function

function Constru(name, salary) {
  this.Sname = name;
  this.Csalary = salary;
}

let c1 = new Constru("mno", 70000);
console.log(c1);

let c2 = new Constru("BON", 80000);
console.log(c2);

// * Object constructor

let a = new Object();
a.salary = 80000;
a.id = 10;
a.name = "lon";
a["skill"] = ["java", "SQL"];

console.log(a);