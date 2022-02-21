import {searchPokemon, pokemonCard} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';

// import data from './data/rickandmorty/rickandmorty.js';
//JSON.stringify())= para tranformar la data a string
//json.parse()=to convert the string into a JavaScript object:
//var obj = JSON.parse(JSON.stringify(data));
//document.getElementById("pokemonDisplay").innerHTML = obj.pokemon[0].num + " " + obj.pokemon[0].name + " " + obj.pokemon[0].type;

let pokemon_database = data.pokemon;

//funcion para template literals de pokemon cards


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
   /*document.getElementById("searchResult").innerHTML = `
   <div class="searchResult">
    ${pokemon.map(pokemonCard).join("")}
    </div>
   `;*/
  });

// function printSearch(pokemon) {
//     document.getElementById("searchResult").innerHTML = `
//     ${pokemon.map(pokemonCard).join("")}
// `;
// }
  


//console.log(data);
 //<img class="pokemonImage" src="${data.pokemon.img}>