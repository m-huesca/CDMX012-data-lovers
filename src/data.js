

export let searchPokemon = function(pokemon_database, pokemon_name) {
  return pokemon_database.filter(pokemon => pokemon.name === pokemon_name || pokemon.num === pokemon_name);
 console.log(searchPokemon);
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

export const type = function (pokemons, selectionType) {
   return (pokemons.filter(pokemon => pokemon.type[0] === selectionType || pokemon.type[1] === selectionType));
}
//SORT by highest
export const byHighest = function (pokemons) {
  return pokemons.sort((a,b) => {
    return b.num - a.num ;
  })
  }
//SORT by lowest
export const byLowest = function (pokemons) {
  return pokemons.sort((a,b) => {
    return a.num - b.num ;
  })
}





/*export function navBar(pokemon_database) {
  let allPokemonType =[];
  pokemon_database.map(pokemon => allPokemonType.push((pokemon.type)))
  let duplicateTypes = allPokemonType.flat()
  const allTypes = new Set(duplicateTypes);
 return allTypes;
}*/




