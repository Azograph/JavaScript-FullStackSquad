
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

//
