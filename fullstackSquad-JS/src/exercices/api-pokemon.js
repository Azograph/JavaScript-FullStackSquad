const apiDiv = document.querySelector('.apiContact');

const contactApiSecurePlus =  async () => {
    try {
        const rawData = await fetch('https://pokeapi.co/api/v2/pokemon');
        console.log(rawData);
        
        if (!rawData.ok || rawData.status !== 200) { 
            console.error("Erreur lors de la récupération des données : ", rawData.statusText);
            return; 
        }

        const transformedData = await rawData.json();
        console.log(transformedData);
        for (const element of transformedData.results) {
            console.log(element.name);
            let pokemon = document.createElement('h2');
            pokemon.innerText = element.name;
            apiDiv.appendChild(pokemon);
        }
        
    } catch (error) {
        console.error("Erreur lors de l'appel à l'API : ", error);
    }
    
}

contactApiSecurePlus();


// correction :

// //? Version un peu plus SAFE (try catch if)
// const pokemonApiContactSafe = async () => {
//     const pokemonListe = document.getElementById('pokemonListing');
//     console.log(pokemonListe);

//     try {
//         // Data va récup toutes les données de l'api
//         const pokemonData = await fetch('https://pokeapi.co/api/v2/pokemon');
//         console.log('pokemonData', pokemonData);

//         if (!pokemonData.ok || pokemonData.status !== 200) {
//             console.error('Erreur lors de la récupération des données :', pokemonData.statusText);
//             return;
//         }

//         // Plutôt que de travailler sur la réponse, on la transforme en objet JS
//         const pokemonDataTransformed = await pokemonData.json();
//         console.log('pokemonDataTransformed', pokemonDataTransformed);
//         console.log(pokemonDataTransformed.results);
//         console.log(pokemonDataTransformed.results[0].name);
//         // console.log(pokemonDataTransformed.results[0]['name']);

//         pokemonDataTransformed.results.forEach(unPokemon => {
//         // pokemonDataTransformed.results.map(unPokemon => {
//             const listElement = document.createElement('p');
//             // <p></p>
//             listElement.innerText = unPokemon.name;
//             // <p>bulbasaur</p>
//             pokemonListe.append(listElement);
//         });
//     } catch (error) {
//         console.error("Erreur lors de l'appel à l'API :", error);
//     }
// };
// pokemonApiContactSafe();