// document.getElementById('child1').addEventListener('mouseover',function(e){
//     let elem=document.getElementById('child2');
//     elem.setAttribute('style','background-color:red');
//     console.log('Event Occurred on mouseover');
//     let elem2=e.target.id;//gives the id of target element
//     console.log(elem2)
// });

document.getElementById('myFirstId').addEventListener('mousemove',function(e){
    // console.log(e.offsetX)
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},${e.offsetX})`;
    console.log('Working')
});

// preventing default behaviour
document.getElementById('btn').addEventListener('click',function(e){
    e.preventDefault();//on clicking submit button by default the form gets submitted but preventDefault prevents the form from submitting
    console.log('click Working')
});

document.getElementById('btn').addEventListener('dblclick',function(e){
    e.preventDefault();//on clicking submit button by default the form gets submitted but preventDefault prevents the form from submitting
    console.log('Double Click Working')
});

