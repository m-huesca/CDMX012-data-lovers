import {searchPokemon, pokemonCard, byHighest, type, byLowest} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';

let pokemon_database = data.pokemon;


// display pokemon html + json
document.getElementById("cardContainer").innerHTML = `
    ${data.pokemon.map(pokemonCard).join("")}
`;
// funcion para buscar pokemones por nombre o numero

document.getElementById("searchButton").addEventListener("click", function(){
    let searchBy = document.getElementById("searchName").value;
   let pokemon = searchPokemon(pokemon_database,searchBy);
    // console.log(JSON.stringify(pokemon, null, 2))
    document.getElementById("cardContainer").innerHTML = `
    ${pokemon.map(pokemonCard).join("")}
`;
})

//Sort by highest number */
document.getElementById("byHighest").addEventListener("click", function(){
    //(pokemons)
    let pokemonByHighest = byHighest(pokemon_database);
document.getElementById("cardContainer").innerHTML = `
  ${pokemonByHighest.map(pokemonCard).join("")}
    `;
})

//Sort by lowest
document.getElementById("byLowest").addEventListener("click", function(){
    //(pokemons)
    let pokemonByLowest = byLowest(pokemon_database);
document.getElementById("cardContainer").innerHTML = `
  ${pokemonByLowest.map(pokemonCard).join("")}
    `;
})

// funcionalidad del drop down menu types ejemplo
const selectType = document.querySelector('.typeMenu');

//añadimos un addEventListener con 'change' y una función para que cuando cambie el selector, active la funcion
selectType.addEventListener('change', function () {
   // selectionType es el valor del select
    let select = document.getElementById("typeMenu");
    let selectValue = select.options[select.selectedIndex].value;
    //pokemon es la variable que contiene nuestra funcion
    let pokemonsByType = type(pokemon_database, selectValue)
    // indicando que el resultado de la funcion lo pase a texto y aparezca en el div resultado 
    //pokemon.map (funcion que filtra y dandole los argumentos)
    document.getElementById("cardContainer").innerHTML = `
    ${pokemonsByType.map(pokemonCard).join("")}
`;
});
