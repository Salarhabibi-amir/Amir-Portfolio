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
const projects = [{
  id: 'Project1',
  title: 'Tonic',
  title1: 'Tonic',
  company: 'CANOPY',
  company1: 'CANOPY',
  icon: './img/Counter.png',
  specialization: 'Back End Dev',
  specialization1: 'Back End Dev',
  year: '2015',
  year1: '2015',
  description: 'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
  description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  technologies: {
    tech1: 'html',
    techE: 'Ruby on rials',
    tech2: 'css',
    tech3: 'javaScript',
  },
  details: 'See project',
  imageMobile: './img/Portfolio.png',
  imageDesktop: './img/Portfolio.png',
  live: 'https://Salarhabibi-amir.github.io/',
  source: 'https://github.com/Salarhabibi-amir/Salarhabibi-amir.github.io',
},
{
  id: 'Project2',
  title: 'Multi-Post',
  title1: 'Multi-Post',
  company: 'CANOPY',
  company1: 'FACEBOOK',
  icon: './img/Snapshoot Portfolio.png',
  specialization: 'B2ack End Dev',
  specialization1: 'Full Stack Dev',
  year: '2015',
  year1: '2015',
  description: 'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
  description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  technologies: {
    tech1: 'html',
    techE: 'Ruby on rials',
    tech2: 'css',
    tech3: 'javaScript',
  },
  details: 'See project',
  imageMobile: './img/Snapshoot Portfolio.png',
  imageDesktop: './img/Snapshoot Portfolio.png',
  live: 'https://Salarhabibi-amir.github.io/',
  source: 'https://github.com/Salarhabibi-amir/Salarhabibi-amir.github.io',
},
{
  id: 'Project3',
  title: 'Tonic',
  title1: 'Facebook 360',
  company: 'CANOPY',
  company1: 'FACEBOOK 360',
  icon: './img/Snapshoot Portfolio5.png',
  specialization: 'B2ack End Dev',
  specialization1: 'Full Stack Dev',
  year: '2015',
  year1: '2015',
  description: 'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
  description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  technologies: {
    tech1: 'html',
    techE: 'Ruby on rials',
    tech2: 'css',
    tech3: 'javaScript',
  },
  details: 'See project',
  imageMobile: './img/Snapshoot Portfolio5.png',
  imageDesktop: './img/Snapshoot Portfolio5.png',
  live: 'https://Salarhabibi-amir.github.io',
  source: 'https://github.com/Salarhabibi-amir/Salarhabibi-amir.github.io',
},
{
  id: 'Project4',
  title: 'Multi-Post<br>Stories',
  title1: 'Uber Navigation',
  company: 'CANOPY',
  company1: 'Uber',
  icon: './img/Snapshoot Portfolio 2.png',
  specialization: 'Back End Dev',
  specialization1: 'Lead Developer',
  year: '2015',
  year1: '2018',
  description: 'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
  description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  technologies: {
    tech1: 'html',
    techE: 'Ruby on rials',
    tech2: 'css',
    tech3: 'javaScript',
  },
  details: 'See project',
  imageMobile: './img/Snapshoot Portfolio 2.png',
  imageDesktop: './img/Snapshoot Portfolio 2.png',
  live: 'https://Salarhabibi-amir.github.io/',
  source: 'https://github.com/Salarhabibi-amir/Salarhabibi-amir.github.io',
},
];
const Worksection = document.querySelector('.works-container');
projects.forEach((project) => {
  const cardDiv = document.createElement('div');
  cardDiv.innerHTML = `
  <div class="works-grid-item opacity">
  <div class="desktop">
      <div class="template-img flex-item-width">
          <img src="${project.imageDesktop}" alt="">
      </div>
  </div>
  <div class="desktop">
      <div class="Tonic flex-item-width">
          <h2>${project.title}</h2>
      </div>
      <div class="ol-list flex-item-width">
          <ul>
              <li id="canopy">${project.company}</li>
              <li>${project.specialization}</li>
              <li>${project.year}</li>
          </ul>
      </div>
      <div class="flex-item-width paragraph">
         <p>${project.description1}</p>
      </div>
      <div class="flex-item-width buttons-flix">
          <ul class="ul-list">
              <button class="buttons"><li>${project.technologies.tech1}</li></button>
              <button class="buttons"><li>${project.technologies.tech2}</li></button>
              <button class="buttons"><li>${project.technologies.tech3}</li></button>
          </ul>
      </div>
      <br>
      <div class="flex-item-width p1">
          <button class="seeProject-button" id="${project.id}">${project.details}</button>
      </div>
  </div>
</div>
  `;
  Worksection.append(cardDiv);
});
const body = document.querySelector('body');
const seeProject = document.querySelectorAll('.seeProject-button');
seeProject.forEach((button) => button.addEventListener('click', () => {
  const modal = document.createElement('div');
  modal.className = 'modal';
  const popup = document.createElement('div');
  popup.innerHTML = `
  <!-- The Modal -->
      <!-- Modal content -->
      <div class="modal-content">
          <div class="modal-content-flexItem">
              <span class="close">&times;</span>
              <h2 class="Tonic-popup title">Tonic</h2>
          </div>
          <div class="modal-content-flexItem">
              <ul class="Canopy-list">
                  <li id="canopy">CANOPY</li>
                  <li>Back End Dev</li>
                  <li>2015</li>
              </ul>
          </div>
          <div class="modal-content-flexItem">
              <img src="img/Portfolio.png" alt="" id="img">
          </div>
          <div class="desk-popUp-nestFlex modal-content-flexItem">
              <div class="desk-popUp-item1">
                  <p id="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
              </div>
              <div class="desk-popUp-item2">
                  <div>
                      <ul class="ul-list-popup">
                          <button class="buttons"><li>HTML</li></button>
                          <button class="buttons"><li>CSS</li></button>
                          <button class="buttons"><li>JavaScript</li></button>
                      </ul>
                      <br>
                      <hr>
                  </div>
                  <div class="modal-content-flexItem btns-live-cods-flex">
                      <button class="btns-live-cods">See live &nbsp;&nbsp; <i class="fa fa-power-off "></i></button>
                      <button class="btns-live-cods">See codes &nbsp;&nbsp;<i class="fa fa-github"></i></button>
                  </div>
              </div>
          </div>
      </div>

  `;
  modal.appendChild(popup);
  body.append(modal);
}));