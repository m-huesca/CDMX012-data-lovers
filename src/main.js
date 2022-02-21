import {searchPokemon, pokemonCard, navBar} from './data.js';
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
   
  });

  //funcion para drop down menu
document.getElementById("typeMenu").innerHTML = `
${data.pokemon.map(navBar).join("")}
`;
