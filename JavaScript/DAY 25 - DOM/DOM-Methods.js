// ! DOM - (Document Object Model)

console.log(window);
console.log(window.document);
console.log(document.location.port);
console.log(document.location.href);
console.log(document.location.hostname);
console.log(document.location.host);
console.log(document.location.protocol);
console.log(document.URL);

// ^ method of DOM

// ~ document.getElementById() - (it target only one html element based around ID attributed) - return that element otherwise null

let h1 = document.getElementById("head");
console.log(h1);

let pa = document.getElementById("para");
console.log(pa);

// & Style property - (it give the CSS to html element)

h1.style.background = "red";
pa.style.background = "green";

// ! innerHTML property - (it add the text contain and also add the children for html element)

pa.innerHTML = "<h1> hello word</h1>";

// * innerText property - (it add the text contain for html element)

pa.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim culpa aperiam facere doloribus eum vel fuga incidunt, sapiente deserunt nam.";

setTimeout(() => {
  pa.style.background = "pink";
  h1.style.background = "yellow";
}, 4000);

// ^ document.getElementsByClassName() - (it target multiple html element based around Class name attributed) - it return HTML Collection otherwise empty HTML collect

let para = document.getElementsByClassName("para");
console.log(para);

// ? to check this is array or not
console.log(Array.isArray(para)); // ? false -- this is a "array like object"

// ? for all values which have same class name

for (let a of para) {
  a.style.color = "white";
  a.style.background = "red";
  a.style.padding = "20px";
}

// ? how to convert index data structure datatype into array

let arr = [...para]; // ? using spread operator
console.log(arr);

let arr1 = Array.from(para); // ? using Array.from()
console.log(arr1);

// * document.getElementsByTagName() - (it target multiple html element based around TagName name attributed) - it return HTML Collection

let span = document.getElementsByTagName("span");
console.log(span);

span[0].innerText = "span data"; // ? to add content (we use index position)

// & document.querySelector() - (it target first element based around argument and return that element)

let demo = document.querySelector(".demo");
console.log(demo);

let demo1 = document.querySelector("#h2");
console.log(demo1);

// & document.querySelectorAll() - (it target all element based around argument and return NodeList otherwise empty NodeList)

let h2 = document.querySelectorAll("#h2");
console.log(h2);

// ? we can use foreach() for NodeList

h2.forEach((v) => {
  console.log(v);
});

// ?  otherwise we can also convert NodeList to Array

let nodearray = [...h2];
console.log(nodearray);

// ~ document.createElement() - use to create html element using tagname

let div = document.createElement("div");
console.log(div);
div.innerText = "div content";

let p = document.createElement("p");
console.log(p);
p.innerHTML = "paragraph content ";

// ^ target_element.append() - it is use to make multiple child for html element

let section = document.querySelector(".section");
section.append(div, p);

// & target_element.append() - it is use to make only one child for html element

section.appendChild(aside);
