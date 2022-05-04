// creating html element using js
let elem=document.createElement('li');
elem.className='list';
elem.id='item-5';
let ul=document.querySelector('ul');
// elem.innerText='item-5'
let text=document.createTextNode('item-5');
elem.appendChild(text);
ul.appendChild(elem);
// console.log(ul);
console.log(elem);

// replacing an element:
let elem2=document.createElement('h2');
elem2.innerText='I am replaced element';
elem.replaceWith(elem2);

// replacing a child element
let div1=document.getElementById('myFirstId');
div1.replaceChild(elem,document.getElementById('child1'));

// removing a child element
div1.removeChild(document.getElementById('child2'))

// setting attribute
elem2.setAttribute('style','color:red');

// checking whether an attribute is present or not:
let att=elem2.hasAttribute('href');
console.log(att);

// removing an attribure:
elem2.removeAttribute('style');