let s1 = "javascript";

// ~ slice()
let r1 = s1.slice(4, 7);
console.log(r1);
console.log(s1.slice(-4 - 1));

// ! substring()

let r2 = s1.substring(0, 4);
console.log(r2);

// ^ includes()
console.log(s1.includes("ava", 4));

// & indexOf()
console.log(s1.indexOf("vas", 4));

// * lastIndexOf()
console.log(s1.lastIndexOf("a", 2));

// ? charAt()
console.log(s1[s1.length - 1]);
console.log(s1.charAt(2));

// ~ charCodeAt()
console.log(s1.charCodeAt(1));

// ! toUpperCase()
console.log(s1.toUpperCase());

//^ toLowerCase()
let s2 = "HELLO WORLD";
console.log(s2.toLowerCase());

// & replace()
let s3 = "This is javascript notes and javascript lecture";
let r3 = s3.replace("javascript", "python");
console.log(r3);

// * replaceAll()
let r4 = s3.replaceAll("javascript", "python");
console.log(r4);

let s4 =
  "                             welcome all                                 ";

// ? trim()
console.log(s4.trim());

// ~ trimStart()
console.log(s4.trimStart());

// ^ trimEnd()
console.log(s4.trimEnd());

// & concat()

let a1 = "java";
let a2 = "javascript";
let a3 = "reacts";

let r5 = a1.concat(a1, a2, a3);
console.log(r5);

// * split() - use to convert string into array

let r6 = a2.split("");
console.log(r6);

// ? join() - this is a array methods which is use to convert array into string

let j1 = "hello";
let j2 = j1.split("");
let r7 = j2.join("");
console.log(r7);

// ~ how to reverse the string

let rev = "jignesh jadhav";
let out = rev.split("").reverse().join("");

console.log(out);

let revs1 = rev.split("").reduceRight((pv, cv) => {
  pv + cv, "";
});
console.log(rev);
console.log(revs1);
