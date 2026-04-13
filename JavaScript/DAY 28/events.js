let div = document.querySelector(".container");
console.log(div);

// div.onclick = function (event) {
//   console.log(event);
//   console.log("clicked");
//   window.alert("alert massages");
//   div.style.background = "red";
//   event.target.style.background = "red";
// };

// div.addEventListener(
//   "click",
//   (e) => {
//     console.log("clicked");
//   },
//   true
// );

// let handleClick = (e) => {
//   console.log(e);
//   console.log("clicked");
// };

// div.addEventListener("mouseover", function (e) {
//   console.log(e);
//   e.target.style.background = "blue";
// });

// div.onmouseout = (e) => {
//   console.log(e);
//   e.target.style.background = "none";
// };

let text = document.querySelector("textarea");
// console.log(text);

// text.addEventListener("keyup", (e) => {
//   console.log(e);
//   console.log(e.target.value);
// });

// text.addEventListener("keydown", (e) => {
//   console.log(e);
//   console.log(e.target.value);
// });

// text.addEventListener("keypress", (e) => {
//   console.log(e);
//   console.log(e.target.value);
// });

let btn = document.querySelector("button");
console.log(btn);

btn.onclick = function (e) {
  e.target.style.background = "green";
};

text.addEventListener("keypress", (e) => {
  //   console.log(e);
  console.log(e.target.value);
});
