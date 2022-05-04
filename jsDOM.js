let a=document;
// a=document.all;

// selecting the first link in html
a=document.links[0];

// selecting the first script in html document
a=document.scripts[0];
// selecting the first image in html document
a=document.images[0];
console.log(a);
// will select the body tag from html
// a=document.body;
// a=document.forms;
// console.log(a);
// convert the document in an array and print its element:
// Array.from(a).forEach(element => {
//     console.log(element);
// });