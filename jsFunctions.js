// Function and scopes
// Greeting function:

function greet(name){//greet is function name and 'name' is the argument of the function.
    let msg=`Hi ${name}!!!Happy Birthday`;
    return msg;
}
const name='Puja';
console.log(greet(name));

// Greeting function
// let greet=function(name){
//     console.log(`Hi ${name}!!Happy Birthday`);
//     return 'Thanks';//If we do not return a value it will display undefined after printing the console.log
// }

// const name='Diya';
// console.log(greet(name));

// Scope:
/*1. var: it has a function level scope
  2. let: it has a block level scope
  3. const: It has a block level scope. */

// If we are defining an element with 'let' or 'const' inside a block and trying to access it outside the block it will show error because let/const have block level scope
// {
//     const i=24;
//     console.log(i);
// }
// console.log(i);

// If we define the element with var it will have functional scope or in this case global scope hence it can be accessed anywhere in the code
// {
//     var i=24;
//     console.log(i);
// }
// console.log(i);

// function nameMy(name){
//     var name='Puja';
//     console.log(name);
//     return 1;
// }
// console.log(nameMy(name));