const paragraphes = document.getElementsByTagName('p');
console.log(paragraphes);

let tableCollec = Array.from(paragraphes);
console.log(tableCollec);

// TODO : Dans une page avec plein de paragraphes.
// TODO : Se débrouiller pour selectionner tous les paragraphes dans une HTMLCollection getElementsByTagName.
// TODO : Avec Array.from(), convertir la HTMLCollection en tableau.
// TODO : Sur le tableau on va utiliser la méthode .map() pour parcourir chaque paragraphe et modifier leur contenu via innerText ainsi que leur style.backgroundColor.

const allParagraphs = document.getElementsByTagName('p');
// On affiche la HTMLCollection
console.log(allParagraphs);

// On va transformer la HTMLCollection en tableau
let tabCollection = Array.from(allParagraphs);
console.log(tabCollection);

tabCollection.map(unP => {
    console.log(unP);
    unP.innerText = 'Hello la fullstackSquad';
    unP.style.backgroundColor = 'chartreuse';
    unP.style.fontSize = '20px';
    unP.style.fontFamily = 'comic sans ms';
    unP.style.fontWeight = 'bold';
    unP.style.textAlign = 'center';
    unP.style.textTransform = 'uppercase';
    unP.style.textDecoration = 'underline';
    unP.style.textShadow = '2px 2px 2px rgba(0, 0, 0, 0.5)';
    unP.style.textOverflow = 'ellipsis';
    unP.style.whiteSpace = 'nowrap';
});

//Avec append on va rajouter du texte brut dans la div qu'on  a laissé vide 

const laDiv = document.querySelector('.vide');
console.log(laDiv);

laDiv.append(`Là c'est JS qui ajoute du texte dans la div`);
// Append plutot pensé pour ajouter du contenu à la volé au format string
// si on a crée ou séléctionné un élément que l'on veut placer : ceci peut marcher
// Mais on a aussi la fonction appendChild;
laDiv.appendChild(allParagraphs[0]);


//ON va créer via JS un element de TEXT 
// Phase 1 : Créer le nouveau element de texte
const nouveauTexte = document.createTextNode('azertyuiop');
// Phase 2 : On se débrouille pour le placer dans la page
laDiv.append(nouveauTexte);


//!On va créer n'importe quelle balise HTML 
// Phase 1 on créer l'élément ---> <h1></h1>
const newH1 = document.createElement('h1');
//phase 2 on rempli la balise ---> <h1>Hello FullstackSqaaaaad  ! ! ! </h1>
newH1.innerText = "Hello FullstackSqaaaaad  ! ! ! ";
newH1.style.backgroundColor = 'chartreuse';
//phase 3 on place dans la page 
laDiv.appendChild(newH1);