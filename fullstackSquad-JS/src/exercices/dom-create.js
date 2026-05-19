//! EXO 20.1 
//TODO: via JS afficher le profil  utilisateur dans la page web
const userData = {
  name: 'John delavega',
  email: 'john.doe@example.com',
  age: 25,
  dob: '08/02/1989',
  active: true,
  img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
};

const laDiv = document.querySelector('.vide');
console.log(laDiv);
laDiv.style.width = '400px';
laDiv.style.padding = "3vh";
laDiv.style.background = 'linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)';
laDiv.style.color = 'White';


const image = document.createElement('img');
image.src = 'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg';
laDiv.appendChild(image);
image.style.width = '100%';

// const myImage = new Image();
// myImage.src = 'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg';
// laDiv.appendChild(myImage)

const Name = document.createElement('h2');
Name.innerText = "John Delavega";
laDiv.appendChild(Name);

const email = document.createElement ('h3');
email.innerText = "john.doe@example.com";
laDiv.appendChild(email);

const age = document.createElement ('h3');
age.innerText = "25";
laDiv.appendChild(age);

const date = document.createElement ('h3');
date.innerText = "08/02/1989";
laDiv.appendChild(date);

const active = document.createElement ('h3');
active.innerText = "True";
laDiv.appendChild(active);

