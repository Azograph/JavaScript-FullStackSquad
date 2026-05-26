

const input = document.querySelector("#input-exercice-keyup");
const paragraphe = document.querySelector("#renderKeyboard");
const body = document.querySelector("body");

input.addEventListener("keyup", (event) => {
    valeur=(event.target.value);
    console.log(valeur)
    paragraphe.innerText = input.value;
});


const input2 = document.querySelector("#input-exercice2-keyup");
const bouton = document.querySelector(".exo2");

input2.addEventListener("keyup", () => {
    if(input2.value.length>= 5){
        bouton.disabled = true;
    }
    else{
    bouton.disabled = false;
    }
});


setTimeout(() => { 
    body.style.background = 'linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)';
}, 3000);


