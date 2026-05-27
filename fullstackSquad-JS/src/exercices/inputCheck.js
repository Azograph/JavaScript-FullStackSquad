const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
const regexChiffre= /[\d]+/; 
const regexCarSpe= /[$&@!]+/;

const email = document.querySelector("#login-mail");
const mdp = document.querySelector("#login-password");
const errorSection = document.querySelector("#errorSection");


function verifEmail () {
    return regexMail.test(email.value);
};

function verifChiffre () {
    return mdp.value.match(regexChiffre);
};

function verifCarSpe () {
    return mdp.value.match(regexCarSpe);
};

function verificationMail () {
    if (verifEmail()) {
        email.style.background ="chartreuse";
        }
    else {
        email.style.background= "red";
    }
}
email.addEventListener ('keyup', verificationMail);

// function verificationMdp () {
//     if (!verifChiffre()) {
//         const verif1 = document.createElement ('li');
//         verif1.innerText = "Le Mot de passe doit contenir 1 chiffre";
//         liste.append(verif1);
//     }
//     else 
//         mdp.style.background ="red";
// }

// mdp.addEventListener ('keyup', verificationMdp)

const error = document.querySelector('#error');

mdp.addEventListener('keyup', () => {
    let errorMessages = "";
    if (mdp.value.length <6 ) {
        errorMessages+='<li>Votre Mot de passe est trop Court</li>';
        console.log(errorMessages);
    }
    if (mdp.value.length > 8) {
        errorMessages += '<li>Votre Mot de passe est trop Long</li>';
        console.log(errorMessages);
    }

    if (!mdp.value.match(regexChiffre)) {
        errorMessages += "<li>Le Mot de passe doit contenir 1 chiffre</li>";
    }

    if (!mdp.value.match(regexCarSpe)) {
        errorMessages += "<li>Le Mot de passe doit contenir 1 caractère spécial</li>";
    }

    if (errorMessages.length !== 0) {
        errorMessages += "<li>T'es nul, lis putain </li>";
            error.innerHTML=errorMessages;
    }

    if (errorMessages.length == 0 ) {
        let gg = "Bien joué";
        error.innerHTML=gg;
    }
});



// - SINON SI la longueur est > 8 : ajouter le message "<li>Votre Mot de passe est trop Long</li>"