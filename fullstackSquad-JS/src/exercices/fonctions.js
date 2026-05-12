
// Créer une focntion qui prend un nombre en paramètre.
// La fonction doit afficher en console: 33+ le nombre reçu en paramètre.
function test(number=1) { 
    console.log (33 + number)
    }
test(30);

// Créer une fonction qui prend 2 nombres en paramètre.
// Cette seconde fonction doit afficher en console l'addition des 2 nombres reçus en paramètre. 
function test2(number1=1, number2=1) {
    console.log(number1 + number2)
}
test2(20,10);
test2(); // Cas d'erreur

// Fonction responsable :
function test3(number1=1, number2=1) {
    return number1 + number2
}
console.log(test3(20,10));

// CORRECTION 

function additionner(nombre=0) {
    console.log(33 + nombre);
}

additionner(2);

function additionner2(firstNumber=0, secondNumber=0) {
    console.log(firstNumber + secondNumber);
}
additionner2(2, 3);

//! Pour mieux séparer la responsabilité de la fonction,on va dire que notre fonction doit retourner un résultat.
//! On fait l'affichage dans un autre endroit.(console.log)
//! On va aussi utiliser des paramètres par défaut pour éviter les erreurs de type "undefined".

function additionnerOpti(firstNumber=0, secondNumber=0) {
    return firstNumber + secondNumber;
}
console.log(additionnerOpti(2, 3));

// Ambiance fonction fléchée
const additionnerFleche = (firstNumber=0, secondNumber=0) => {
    return firstNumber + secondNumber;
}
console.log(additionnerFleche(2, 3));

// Ambiance fonction fléchée optimisée
const additionnerFlecheOpti = (firstNumber=0, secondNumber=0) => firstNumber + secondNumber;
console.log(additionnerFlecheOpti(2, 3));

// Ambiance fonction fléchée optimisée avec paramètre par défaut
const additionnerFlecheOptiDefault = (firstNumber=0, secondNumber=0) => firstNumber + secondNumber;
console.log(additionnerFlecheOptiDefault(2, 3));


//! Fonction sécurisée pour éviter les erreurs de type "undefined".
//! Avec gestion d'erreur.
function additionnerOptiSécurisée(firstNumber=0, secondNumber=0) {
    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        throw new Error('Les paramètres doivent être des nombres');
    }
    return firstNumber + secondNumber;
}
console.log(additionnerOptiSécurisée("azerty", 3));
