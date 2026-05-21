const apiDiv = document.querySelector('.apiContact');

const contactApiSecurePlus =  async () => {
    try {
        const rawData = await fetch('https://api.chucknorris.io/jokes/random');
        console.log(rawData);
        
        if (!rawData.ok || rawData.status !== 200) { 
            console.error("Erreur lors de la récupération des données : ", rawData.statusText);
            return; 
        }

        const transformedData = await rawData.json();
        console.log(transformedData);
        apiDiv.innerHTML=(transformedData.value);
        }
        
    catch (error) {
        console.error("Erreur lors de l'appel à l'API : ", error);
    }
    
}

let btnToggle = document.querySelector('.btntoggle');
btnToggle.addEventListener('click',contactApiSecurePlus);
