console.log("Date and Time");

let today=new Date();
// console.log(today);

let otherDate=new Date('10 Jun 2003');
otherDate=new Date('02/09/1998 6:30:00');
let a=otherDate.getMonth();
a=otherDate.getDay();
a=otherDate.getFullYear();
a=otherDate.getHours();
a=otherDate.getMinutes();
// console.log(a);

// setting a date
console.log(otherDate);
otherDate.setDate(3);
otherDate.setMonth(3);
otherDate.setFullYear(2003);
console.log(otherDate);