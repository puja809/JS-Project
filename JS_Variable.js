console.log('Variables');

// Keywords to craete variables

// var,let,const
var name='Puja'
var job;
job='Engineer';
// console.log(name,job);
name='Dona';
console.log(name,job);

// Rules for JS variable

// 1.Cannot start with Number
// 2.Can start with alphabet, _ and $
// 3.Are case sensitive.

// const keyword wont allow to change the value of the variable once it is assigned.
const nameOwner='Puja Chattopadhyay';
// nameOwner='Diya';
console.log(nameOwner);

// when we define an array with const we can perform push operation to add new element but we cannot reassign the values of the array
const array=[1,2,3,4];

// const variable should always be followed by '=' that is value should be assigned.
// const str;
// console.log(str);
array.push(3);
console.log(array);
// array=[1,6,8]


// let has a local/block scope but var has global/function scope
{
    let name='Diya';
    name='Dora';
    console.log(name);
} 

// Programming case types for variables
/*
1.camelCase
2.kebab-case
3.snake_case
4.PascalCase
*/