// Loops
// for loop:
// for(let i=0;i<100;i++){
//     console.log(i);
// }

// while loop:
// let j=0;
// while(j<10){
//     console.log(j);
//     if(j===5){
//         break;//break statement will break out of the loop once a condition is satisfied
//     }
//     j++;
// }

// Do while:
// let k=1;
// do{
//     if(k===5){
//         k+=1;
//         continue;//use to skip one iteration and continue from next
//     }
//     console.log(k+1);
//     k+=1;
// }
// while(k<21);


// Iterating and array with for:
// let arr=[1,2,3,4,5,6,7,8,9];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// Iterating an array with for each:
// arr.forEach(function(element, index, array) {
//     console.log(element, index, array);
// });

// 'for in' to iterate an object
let obj={
    name:'Puja',
    age:24,
    job:'Engineer'
}
for (let key in obj) {
    // if (Object.hasOwnProperty.call(object, key)) {
        console.log(`The ${key} of the object is ${obj[key]}`);
        
    // }
}