// Create Div element:

let divElem=document.createElement('div');

// setting sttributes for div element
divElem.setAttribute('class','divElem');
divElem.setAttribute('id','divElem');
divElem.setAttribute('style','border:2px solid black; width: 150px;height:80px; display:flex;justify-content:center; align-items:center');

// creating inner text for div
let text;
let val=localStorage.getItem('text');
if(val==null){
    text=document.createTextNode('This is edittable');
}
else{
    text=document.createTextNode(val);
}
divElem.appendChild(text);
// console.log(divElem);

// adding div to the html body
document.querySelector('body').appendChild(divElem);

divElem.addEventListener('click',function(){
    let noTextArea=document.getElementsByClassName('textarea').length;
    if(noTextArea===0){
    divElem.innerHTML=`<textarea class="textarea" id="textarea" rows="3" cols="10"></textarea>`;
   }
    let textarea=document.getElementById('textarea');textarea.addEventListener('blur',function(){
        divElem.innerHTML=textarea.value;
        localStorage.setItem('text',textarea.value)
    })
});