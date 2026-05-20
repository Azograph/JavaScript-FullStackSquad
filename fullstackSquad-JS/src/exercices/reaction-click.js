let divUser = document.querySelector('.emote');
let isClicked = false;
divUser.addEventListener('click',()=>{
    divUser.innerText='🦄';
    divUser.innerText = isClicked ? '🦄' : 'Exercice reaction click';
    isClicked = !isClicked;
});

let titre = document.querySelector('h1');
let btnAjouter = document.querySelector('.ajouter');
let btnSupprimer = document.querySelector('.supprimer');
let btnToggle = document.querySelector('.toggle');

btnAjouter.addEventListener('click',()=>{
    titre.classList.add('titre');
});

btnSupprimer.addEventListener('click',()=>{
    titre.classList.remove('titre');
});

btnToggle.addEventListener('click',()=>{
    titre.classList.toggle('titre');
});

const laDiv = document.querySelector('.vide');



document.addEventListener('click', (clickEvent) => {
    console.log('coord X',clickEvent.pageX);
    console.log('coord Y',clickEvent.pageY);
    const newImage = new Image();
    newImage.src="https://terraria.wiki.gg/images/Blue_Horseshoe_Balloon.png?a25222";
    newImage.style.position='absolute';
    newImage.style.top= clickEvent.y - (newImage.height/2) +'px';
    newImage.style.left= clickEvent.x - (newImage.width/2) +'px';
    document.body.append(newImage);
});

// Autre method plus efficace (ajuster les classes dans le html): 

// const allBtn = document.querySelectorAll('.btn-exo-classList');
// allBtn[0].addEventListener('click', () => {
//     console.log('Click sur ADD');
//     secondTitle.classList.add('superClass')
// });
// allBtn[1].addEventListener('click', () => {
//     console.log('Click sur REMOVE');
//     secondTitle.classList.remove('superClass')

// });
// allBtn[2].addEventListener('click', () => {
//     console.log('Click sur TOGGLE');
//     secondTitle.classList.toggle('superClass')
// });