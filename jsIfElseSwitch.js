// const age=18;
// If else:

// if(age==18){
//     console.log("You are 18");
// }
// else{
//     console.log("You are not 18");
// }

// nested if else:
// const age=65;
// if(age==18){
//     console.log("You are 18");
// }
// else if(age==60){
//     console.log("you are 60");
// }
// else{
//     console.log("you are senior citizen");
// }


// difference between '==' and '===':
// '==' will only compare the vakue of the cariable but '===' will compare the value as well as the type of the variable:

// const str='65';
// '==':
// if(str==65){
//     console.log("the value is 65");
// }
// else{
//     console.log("the value is not 65");

// }

// '==='
// if(str===65){
//     console.log("the value and type both are same");
// }
// else{
//     console.log("either value or type is mismatching");

// }


// Switch Case:break statement helps to break the switch statement once the condition is matched. Default id shown when neither of the value matches
// let age=100;
// switch (age) {
//     case 100:
//         console.log("Age is 100");
//         break;
        
//         default:
//         console.log("Age is not 100");
//         break;
// }


// Checking if a variable is defined or not

// let variable;
// if(typeof (variable)=='undefined'){
//     console.log("variable is not defined");
// }
// else{
//     console.log("variable is defined");

// }

// Note: we can compare 2 or more conditions in if else using '&&' (AND) and '||'(OR) operator. && will return true if both conditions are true and || will return true if either conditions are true. '!=' is not equals to which checks if the value is not equal while '!==' checks if bothe value and type is not equal


// Checking a boolean value
// let canDrive=false;
// if(canDrive){
//     console.log("You can drive");
// }
// else{
//     console.log("You cannot drive");
// }

// Ternary Operator
let age=29;
console.log(age==24?'Age is 24':'Age is not 24');