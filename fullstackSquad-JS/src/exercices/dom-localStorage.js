const textArea = document.querySelector(".textarea");
const textRender = document.querySelector(".textRender");


textArea.value = localStorage.getItem('superText');

if (textArea.length !==0) {
    textRender.innerText=textArea.value;
};

textArea.addEventListener("keyup", () =>{
    localStorage.setItem('superText', textArea.value);
    textRender.innerText=textArea.value;
});

