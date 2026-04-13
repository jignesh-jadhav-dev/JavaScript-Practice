// ~ Conditional Statement

//! if esle Statement

let n = 23;
if (n % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

if (n > 10) {
  console.log("10");
} else if (n > 20) {
  console.log("20");
} else if (n > 30) {
  console.log("30");
} else {
  console.log("end");
}

// ^ switch statement

let n1 = 20;

switch (n1) {
  case 10: {
    console.log("10");
    break; //? Break tag is mandatory for switch case statement
  }
  case 20: {
    console.log("20");
    break;
  }
  case 30: {
    console.log("30");
    break;
  }
  case 40: {
    console.log("40");
    break;
  }
  case 50: {
    console.log("50");
    break;
  }
  default: {
    console.log("default");
  }
}

// & ternary operator/statement

let a = n > 10 ? "grater than 10" : "less than 10";
