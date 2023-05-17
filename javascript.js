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

// The popUp JavaScript Code
const project1 = {
  title: 'Tonic',
  img: 'img/Portfolio.png',
  paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
};
const project2 = {
  title: 'Multi-Post Stories',
  img: 'img/Snapshoot Portfolio.png',
  paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
};
const project3 = {
  title: 'Tonic',
  img: 'img/Snapshoot Portfolio5.png',
  paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
};
const project4 = {
  title: 'Multi-Post Stories',
  img: 'img/Snapshoot Portfolio 2.png',
  paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
};
const modal = document.getElementById('myModal');
const buttons = document.querySelectorAll('.seeProject-button');
const span = document.getElementsByClassName('close')[0];
const opac = document.querySelectorAll('.opacity');
const title = document.querySelector('.title');
const img = document.getElementById('img');
const paragrpah = document.getElementById('paragraph');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    modal.style.display = 'block';
    for (let i = 0; i < opac.length; i += 1) {
      opac[i].style.opacity = '0.2';
    }
    if (e.target.parentElement.classList.contains('p1')) {
      title.innerHTML = project1.title;
      img.src = project1.img;
      paragrpah.innerHTML = project1.paragraph;
    } else if (e.target.parentElement.classList.contains('p2')) {
      title.innerHTML = project2.title;
      img.src = project2.img;
      paragrpah.innerHTML = project2.paragraph;
    } else if (e.target.parentElement.classList.contains('p3')) {
      title.innerHTML = project3.title;
      img.src = project3.img;
      paragrpah.innerHTML = project3.paragraph;
    } else {
      title.innerHTML = project4.title;
      img.src = project4.img;
      paragrpah.innerHTML = project4.paragraph;
    }
  });
});
span.addEventListener('click', () => {
  modal.style.display = 'none';
  for (let i = 0; i < opac.length; i += 1) {
    opac[i].style.opacity = '1';
  }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
    for (let i = 0; i < opac.length; i += 1) {
      opac[i].style.opacity = '1';
    }
  }
};