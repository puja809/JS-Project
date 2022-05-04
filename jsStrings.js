// JS String functions

// concatination of two or more strings

const str1='Hi!!';
const str2='Puja';
console.log(str1+''+str2);
console.log(str1.concat(str2));

let html="<h1>Hi JavaScript</h1>"+
"<p>Hi!You are awesome</p>"

console.log(html);
// Find the length of string
console.log(html.length);
// Converting string to lowe case
console.log(html.toLowerCase());
// Converting string to lowe case
console.log(html.toUpperCase());
// Finding the first index of a character or string 
console.log(html.indexOf("Hi"));
// Finding the last index of a character or string 
console.log(html.lastIndexOf("Hi"));
// Check if a partical string ends with a given string or not
console.log(html.endsWith("awesome</p>"));
// Searching for a string. If the position is mentioned it will search at the positions greater or equal to that else it will consider 0 as position. Returns true or false
console.log(html.includes("JavaScript",20));
// will replace the string with given string at first occurance
console.log(html.replace("Hi","Hola"));
// Slicing a string for the given positions
console.log(html.slice(1,5));
// sclicing the string from the end
console.log(html.slice(-5,-4));
// splitting the string in an 
console.log(html.split("Hi"));
// Returns a substring of a string. Unlike split it wont substring from end
console.log(html.substring(1,5));

// Template Literals
/*1.allows to print variable
  2. allows to print HTML tags
  3. Helps escaping special characters
  4.supported by ES6 version of JS*/
let fruit=['Orange','Apple']
console.log(`${fruit}`)
let html1= `<h1>Hi JavaScript</h1>
    <p>You are awesome`
document.body.innerHTML=html1;
