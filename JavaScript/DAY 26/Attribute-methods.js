// ! attribute methods

// ~ setAttribute() - it use to set the attribute name and attribute values for HTMl element

let h2 = document.querySelector(".head");
console.log(h2);

h2.setAttribute("id", "h2");
h2.setAttribute("class", "demo");
h2.setAttribute("title", "this is a heading for html element");

// let video = querySelector("video");
// video.setAttribute("controls", null); // ? this is use when we have only attribute name
// video.setAttribute("controls", "");

// ^ getAttribute() - it return att-values based on att-name if it present otherwise null
let h2Values = h2.getAttribute("class");
console.log(h2Values);

// & removeAttribute() - it remove att-name if it present in HTMl element

h2.removeAttribute("id");
h2.removeAttribute("style");

// * hasAttribute() - it check the attribute is present or not and it return boolean values

console.log(h2.hasAttribute("class")); // ? true
console.log(h2.hasAttribute("id")); // ? false

// ~ also we have some inbuilt method to give id , className , title and style

let span = document.querySelector("span");
console.log(span);

span.id = "s1"; // ? id attribute
span.className = "span demo"; // ? className attribute
span.title = "this is a span contain"; // ? title attribute
span.style.background = "red"; // ? style attribute
