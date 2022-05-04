// Type Coversion: converting one data type to another

// converting number to string
let num=34
console.log(num);

// Below process can be used to conver to string
console.log(String(num));
console.log(num.toString());

// Converting a nuber to a string
var str="6789";
console.log(Number(str));

// While converting a string to a number if JS encounters with a character it will show NaN which means not a number
var str1="67try89";
console.log(Number(str1));


// converting boolean to string
var bool=true;
console.log(bool, typeof(bool));
console.log(String(bool), typeof(String(bool)));

// converting array to string. Array.length will show the no.of elements present in an array whereas the Sting(array).length will ahow the count of all the characters including ','
var arr=[2,3,4,5];
console.log(arr, typeof(arr),arr.length);
console.log(String(arr), typeof(String(arr)),String(arr).length);

// parseInt() will show the interger value and not the float or decimel value
var num1=567.89897;
var str2="Puja"
console.log(parseInt(num1),typeof(parseInt(num1)));
// parseFloat() will show the decimal as well
console.log(parseFloat(num1),typeof(parseFloat(num1)));

// to display a number to a particular decimal point
console.log(num1.toFixed(3));




// Type coercion
let number1="60";
let number2=30;
// Concatination will be done and output will be 6030
console.log(number1+number2);

// addition of to numbers
console.log(Number(number1)+number2);