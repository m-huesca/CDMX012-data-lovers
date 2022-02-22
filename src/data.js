
import data from './data/pokemon/pokemon.js';
export let searchPokemon = function(pokemon_database, pokemon_name) {
  return pokemon_database.filter(pokemon => pokemon.name === pokemon_name || pokemon.num === pokemon_name);
}
export function pokemonCard(pokemon){
  if (pokemon.type.length > 1){
    return `
  <div class="pokemonCard">
   <img class="cardImage" src="${Object.values(pokemon.img).join("")}">
  <label class="cardNum"> ${Object.values(pokemon.num).join("")} </label>
 <p class="cardName"> ${Object.values(pokemon.name).join("")} </p>
 <label class="cardType ${Object.values(pokemon.type[0]).join("")}" > ${Object.values(pokemon.type[0]).join("")} </label>
 <label class="cardType ${Object.values(pokemon.type[1]).join("")}" > ${Object.values(pokemon.type[1]).join("")} </label>
 </div>
  `
  } else { 
    return `
  <div class="pokemonCard">
   <img class="cardImage" src="${Object.values(pokemon.img).join("")}">
  <label class="cardNum"> ${Object.values(pokemon.num).join("")} </label>
 <p class="cardName"> ${Object.values(pokemon.name).join("")} </p>
 <label class="cardType ${Object.values(pokemon.type).join(" ")}" > ${Object.values(pokemon.type).join(" ")} </label>
 </div>
  ` 

  }
 
}
export function navBar(pokemon_database) {
  let allPokemonType =[];
  
  pokemon_database.map(pokemon => allPokemonType.push((pokemon.type)))
  let duplicateTypes = allPokemonType.flat()
  const allTypes = JSON.stringify(new Set(duplicateTypes));
  return allTypes
}

/*`
  <option>${Object.values(allTypes)}</option>
  `*/