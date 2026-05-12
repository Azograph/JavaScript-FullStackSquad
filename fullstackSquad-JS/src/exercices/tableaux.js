let nom = "Gaston";
let age = 75;
let passion = ["pêche", "scrable"];
let tabUser = [nom, age, passion];

console.log (tabUser);
console.log (tabUser[2]);
console.log (tabUser[2][0]);

tabUser.push("Ajout avec push", 2);
console.log(tabUser);

tabUser.pop(); // Suppression du dernier élément du tableau
console.log(tabUser);