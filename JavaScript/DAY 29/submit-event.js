// ! Submit Event - this get trigger when thr user submit the form - (the are two ways)

// ~ values property - 1 way

// let form = document.querySelector("form");
// let userInput = document.getElementById("name");
// let userPassword = document.getElementById("password");
// let userEmail = document.getElementById("email");

// form.addEventListener("submit", (e) => {
//   e.preventDefault(); // ? use to prevent default behavior
//   console.log("hello");
//   console.log(userInput.value, userPassword.value, userEmail.value);
// });

// ^ Formdata Object() - by creating new FormData object

let form = document.querySelector("form");

form.onsubmit = function (e) {
  e.preventDefault(); // ? use to prevent default behavior
  let data = new FormData(form); // ? formdata object ()
  let finaldata = Object.fromEntries(data); // ? to convert formdata object into JS object
  let data1 = data.getAll("skills");
  finaldata.skills = data1;
  console.log(finaldata);
};
