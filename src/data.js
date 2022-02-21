
import data from './data/pokemon/pokemon.js';
export let searchPokemon = function(pokemon_database, pokemon_name) {
  return pokemon_database.filter(pokemon => pokemon.name === pokemon_name || pokemon.num === pokemon_name);
}
export function pokemonCard(pokemon){
  return `
  <div class="pokemonCard">
   <img class="cardImage" src="${Object.values(pokemon.img).join("")}">
  <label class="cardNum"> ${Object.values(pokemon.num).join("")} </label>
 <p class="cardName"> ${Object.values(pokemon.name).join("")} </p>
 <label class="cardType ${Object.values(pokemon.type).join(" ")}"> ${Object.values(pokemon.type).join(" ")} </label>
  </div>
  `
}
export function navBar(pokemon) {
  //let typeDoubleOne = Object.values(pokemon.type[0]).join("");
  return `
  <option>${Object.values(pokemon.type).join(" ")}</option>
  ` 
}

