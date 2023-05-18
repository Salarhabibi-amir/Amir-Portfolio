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
        icon: './img/Icon-GitHub.svg',
        icon1: './img/Icon - Export.svg',
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
        icon: './img/Icon-GitHub.svg',
        icon1: './img/Icon - Export.svg',

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
        icon: './img/Icon-GitHub.svg',
        icon1: './img/Icon - Export.svg',

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
        icon: './img/Icon-GitHub.svg',
        icon1: './img/Icon - Export.svg',
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
const opac = document.querySelectorAll('.opacity');
seeProject.forEach((button) => button.addEventListener('click', (button) => {
    const { id } = button.target;
    const pop = projects.find((button) => button.id === id);
    const modal = document.createElement('div');
    modal.className = 'modal';
    const popup = document.createElement('div');
    popup.innerHTML = `
  <!-- The Modal -->
      <!-- Modal content -->
      <div class="modal-content">
          <div class="modal-content-flexItem">
              <span class="close">&times;</span>
              <h2 class="Tonic-popup title">${pop.title}</h2>
          </div>
          <div class="modal-content-flexItem">
              <ul class="Canopy-list">
                  <li id="canopy">${pop.company}</li>
                  <li>${pop.specialization}</li>
                  <li>${pop.year}</li>
              </ul>
          </div>
          <div class="modal-content-flexItem">
              <img src="${pop.imageDesktop}" alt="" id="img">
          </div>
          <div class="desk-popUp-nestFlex modal-content-flexItem">
              <div class="desk-popUp-item1">
                  <p id="paragraph">${pop.description1}</p>
              </div>
              <div class="desk-popUp-item2">
                  <div>
                      <ul class="ul-list-popup">
                          <button class="buttons"><li>${pop.technologies.tech1}</li></button>
                          <button class="buttons"><li>${pop.technologies.tech2}</li></button>
                          <button class="buttons"><li>${pop.technologies.tech3}</li></button>
                      </ul>
                      <br>
                      <hr>
                  </div>
                  <div class="modal-content-flexItem btns-live-cods-flex">
                  
                  <a href="${pop.live}"  class="btns-live-cods"><span>See live</span><img src="${pop.icon1}"></a>
                  <a href="${pop.live}"  class="btns-live-cods"><span>See source</span><img src="${pop.icon}"></i></a>
                  </div>
              </div>
          </div>
      </div>

  `;
    modal.appendChild(popup);
    body.append(modal);

    const span = document.getElementsByClassName('close')[0];
    span.addEventListener('click', () => {
        modal.remove(popup);
        // body.remove(modal);
        for (let i = 0; i < opac.length; i += 1) {
            opac[i].style.opacity = '1';
        }
    });

    for (let i = 0; i < opac.length; i += 1) {
        opac[i].style.opacity = '0.4';
    }
    window.onclick = (event) => {
        if (event.target === popup) {
            modal.style.display = 'none';
            for (let i = 0; i < opac.length; i += 1) {
                opac[i].style.opacity = '1';
            }
        }
    };
}));
// // Email validation
// const form = document.getElementsByClassName('form-flix');
// form.addEventListener('submit', function(event) {
//     const email = document.getElementById('email').value;
//     const error = document.querySelector('.error');
//     const errorMessage = "E-mail should be lovercase";

//     if (email.toLowerCase === email) {
//         form.submit();
//         error.textContent = errorMessage
//     } else {
//         even.preventDefault();
//         error.textContent = errorMessage;
//     }
// })
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const errorMessage = document.querySelector('.error');

    if (email.toLowerCase() === email) {
        errorMessage.innerText = '';
        contactForm.submit();
    } else {
        errorMessage.innerText = 'Error: Email address must be in lowercase.';
    }
});