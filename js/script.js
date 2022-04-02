/*const para = document.querySelector('p');

para.addEventListener('click',updateName);

function updateName () {
  const name = prompt('Enter a new name');
  para.textContent = `Player 1: s(name)`;
}*/

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name' myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage,getItem('none')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
