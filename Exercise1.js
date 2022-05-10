// Get the link of an HTML page and match if a string is present or not 
let str="google";
let a=document.links;
// console.log(a);
Array.from(a).forEach(element => {
    // console.log(element)
    if(element.href.includes(str)){
        console.log(element.href);
    }
    else{
        console.log("No match");
    }
});
