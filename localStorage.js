// Local STorage
localStorage.setItem('Name','Puja');
localStorage.setItem('Name1','Diya');

// Get a key value from local storage
// console.log(localStorage.getItem('Name1'));

// Removing entire local storage
// localStorage.clear();

// Removing one element from local storage
// localStorage.removeItem('Name1');


// Session Storage:
sessionStorage.setItem('sessionName','Puja');
sessionStorage.setItem('sessionName1','Diya');

// get a key value from session storage:
// console.log(sessionStorage.getItem('sessionName'));

// clear session storage:
// sessionStorage.clear();

// Removing one element from session storage
// sessionStorage.removeItem('sessionName1');

// NOTE: session storage is cleared when browser or session is closed but local storage reamins as it is for the website

// Storing array in local storage:

let name=['Puja','Diya','Dora','Dona'];
localStorage.setItem('name2',JSON.stringify(name));

let pars=localStorage.getItem('name2')
pars=JSON.parse(pars);
console.log(pars[3]);
