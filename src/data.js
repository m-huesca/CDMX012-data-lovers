// estas funciones son de ejemplo
import data from './data/pokemon/pokemon.js';
//import pokemonDatabase from './src/main.js';
//console.log(pokemonDatabase);
/* export const filter = {

  filterData: function (searchBy){
// definimos la variable que va a tener la condición para filtrar
var results = [];
var searchField = data.pokemon.name;
for (var i=0 ; i < data.pokemon.length ; i++)
{
    if (data.pokemon[i][searchField] == searchBy) {
        results.push(data.pokemon[i]);
    }
  }

  return console.log(results);
}
*/

// let result = pokemons.filter(pokemon => searchPoke(pokemon, given_pokemon))

// let stringResult = JSON.stringify(result, null, 2);

// JSON.stringify(result, null, 2)

export let searchPokemon = function(pokemon_database, pokemon_name) {
  return pokemon_database.filter(pokemon => pokemon.name === pokemon_name || pokemon.num === pokemon_name);
}
export function pokemonCard(pokemon){
  return `
  <div class="pokemonCard">
   <img class="cardImage" src="${Object.values(pokemon.img).join("")}">
  <label class="cardNum"> ${Object.values(pokemon.num).join("")} </label>
 <p class="cardName"> ${Object.values(pokemon.name).join("")} </p>
 <label class="cardType ${Object.values(pokemon.type)}"> ${Object.values(pokemon.type).join(" , ")} </label>
  </div>
  `
}
// export const filterData = (searchBy) => {
//   var results = [];
//   var searchField = data.pokemon.name;
//   for (var i=0 ; i < data.pokemon.length ; i++)
//   {
//       if (data.pokemon[i][searchField] == searchBy) {
//           results.push(data.pokemon[i]);
//       }
//     }
//     return console.log(results);
//   };
 
