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
image.alt = 'photo de profil';

// const myImage = new Image();
// myImage.src = 'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg';
// laDiv.appendChild(myImage)

const Name = document.createElement('h2');
Name.innerText = userData.name;
laDiv.appendChild(Name);

const email = document.createElement ('h3');
email.innerText = userData.email;
laDiv.appendChild(email);

const age = document.createElement ('h3');
age.innerText = userData.age;
laDiv.appendChild(age);

const date = document.createElement ('h3');
date.innerText = userData.dob;
laDiv.appendChild(date);

const active = document.createElement ('h3');
active.innerText = userData.active;
laDiv.appendChild(active);

// active.innerText = userData.active ? 'OnLine' : 'OffLine';
// laDiv.apprend(active);

// Nouvel exo 

// const div2 = document.querySelector('.exo2');

// function ajouterTexte (pseudo, texte) {
//     let pPseudo = document.createElement('h1');
//     pPseudo.innerText = pseudo;
//     div2.append(pseudo);
//     let pTexte = document.createElement('p');
//     pTexte.innerText = texte;
//     div2.append(texte);
//     return (pseudo + " "+ texte);
// }

// let teste = ajouterTexte('Dani','Grace');
// console.log(teste);

// ajouterTexte('Anna', "Lune");
// ajouterTexte('Joe', "Chandler");



// function ajouterTexte (pseudo, texte) {
//     let paragraphe = document.createElement('p');
//     let strong = document.createElement('strong');
//     paragraphe.append(strong);
//     strong.innerText = pseudo;
//     let phrase = document.createElement ('p');
//     phrase.innerText = pseudo + " - "+ texte;
//     div2.append(phrase);
// }
// ajouterTexte('Anna', 'Lune');


function ajouterTexte(prenom, nom) {
  const containerAdd = document.querySelector('#textAdd');
  console.log(containerAdd);
  // On créer un élément p
  const nouveauParagraphe = document.createElement('p');
// On créer un élément strong
const strong = document.createElement('strong');
// On ajoute le texte au strong
strong.textContent = prenom;
// On ajoute le strong au p
nouveauParagraphe.append(strong);
// On ajoute le texte au p
nouveauParagraphe.append(` - ${nom}`);
// On ajoute le p au body
containerAdd.append(nouveauParagraphe);
}






