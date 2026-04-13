// ! classList -it's a property used to access and manipulate the list of css classes of html element

let span = document.querySelector("span");
console.log(span);

// ~ classList.add() -it use to add the multiple class att-values

span.classList.add("demo", "active", "span");
span.classList.add("s2");

// ^ classList.remove() - it use to remove the multiple class att-values

span.classList.remove("demo", "active");

// & classList.contains() -it check whether class name is present or not

let r1 = span.classList.contains("demo");
console.log(r1); // ? false

console.log(span.classList.contains("s2")); //? true

// * classList.toggle() - that add class name if it not present and that remove class name if it is present

let r2 = span.classList.toggle("s2");
console.log(r2);

// ~ classList.replace() - is use to replace class name with another class name return boolean values

let r3 = span.classList.replace("span", "demo1");
console.log(r3); //? true

let container = document.querySelector(".container");

// ? giving some style based for two second

setTimeout(() => {
  container.style.background = "blue";
}, 2000);

// ? giving some different style for different timing

setInterval(() => {
  let test = container.classList.toggle("color");
  if (test) {
    container.style.background = "purple";
  } else {
    container.style.background = "pink";
  }
}, 3000);
