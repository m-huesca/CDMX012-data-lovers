import {searchPokemon, pokemonCard, grass} from './data.js';
import pokemon from './data/pokemon/pokemon.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';

let pokemon_database = data.pokemon;
//let grassPrueba = (Object.values(pokemon_database[3])[7]);
//console.log(grassPrueba);

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
 











// funcionalidad del drop down menu types
const selectType = document.querySelector('.typeMenu');

/*selectType.addEventListener('change', (event) => {
    const selectType = document.querySelector('.resultado');
    const selectionType = event.target.value
    selectType.textContent = `
    Pokemon de ${selectionType}`;
});
*/
//añadimos un addEventListener con 'change' y una función para que cuando cambie el selector, active la funcion
selectType.addEventListener('change', function () {

    // selectionType es el valor del select
    let selectionType = document.getElementsByClassName("typeOption").value;
    //pokemon es la variable que contiene nuestra funcion
    let pokemon = grass(pokemon_database, selectionType)
    // indicando que el resultado de la funcion lo pase a texto y aparezca en el div resultado 
    //pokemon.map (funcion que filtra y dandole los argumentos)
    document.getElementById("resultado").innerHTML = `
    ${pokemon.map(pokemonCard).join("")}
`;
})});