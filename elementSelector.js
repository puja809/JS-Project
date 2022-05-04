// Element selectors:
// Single selectors
let a=document.getElementById('child1').innerText='Puja';

 a=document.getElementById('child1').innerHTML='<h1>Hi Child 1</h2>';

 a=document.getElementById('child1');
//  a=a.className;
//  a=a.childNodes;
//  a=a.parentNode;
a.style.color='red';
a.style.background='yellow';
// console.log(a);

// querySelector:
// returns the first element
a=document.querySelector('div');
a=document.querySelector('.child');
a=document.querySelector('#child2');
a.style.color=('green');


// Multi-selectors:
let elem=document.getElementsByClassName('child');
// elem[0].style.color='blue';
// console.log(elem);

Array.from(elem).forEach(element=>{
    element.style.color='blue';
    // console.log(element);
})

// selects all elements with div tag
let element=document.getElementsByTagName('div');
console.log(element);