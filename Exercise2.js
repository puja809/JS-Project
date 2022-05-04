let heading=document.createElement('h2');
let body=document.querySelector('body')
heading.className='h1';
heading.innerText=`Go to Martina's Fitness club`;
body.appendChild(heading)
console.log(heading);

let link=document.createElement('a');
link.id='link';
let text=document.createTextNode('https://www.fitnessclub')
link.setAttribute('href','https://www.google.com');
link.setAttribute('target','_blank');
link.appendChild(text);
body.appendChild(link);



