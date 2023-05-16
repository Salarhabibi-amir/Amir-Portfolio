const portfoliobtn = document.querySelector('.close-overlap1');
const aboutbtn = document.querySelector('.close-overlap2');
const contactbtn = document.querySelector('.close-overlap3');
const barbtn = document.querySelector('.fa-bars');
const closebtn = document.querySelector('.closebtn');
closebtn.addEventListener('click', () => {
  document.getElementById('myNav').style.height = '0%';
});
barbtn.addEventListener('click', () => {
  document.getElementById('myNav').style.height = '100%';
});
portfoliobtn.addEventListener('click', () => {
  document.getElementById('myNav').style.height = '0%';
});
aboutbtn.addEventListener('click', () => {
  document.getElementById('myNav').style.height = '0%';
});
contactbtn.addEventListener('click', () => {
  document.getElementById('myNav').style.height = '0%';
});