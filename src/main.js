import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//JSON.stringify())= para tranformar la data a string
//json.parse()=to convert the string into a JavaScript object:
//var obj = JSON.parse(JSON.stringify(data));
//document.getElementById("pokemonDisplay").innerHTML = obj.pokemon[0].num + " " + obj.pokemon[0].name + " " + obj.pokemon[0].type;

function pokemonCard(pokemon){
    return `
    <div class="pokemonCard">
    <img class="pokemonImage" src="${data.pokemon.img}">
   <h2> ${data.pokemon.name} <span class="pokemonType"> (${data.pokemon.type}) </span> </h2>
   <p> ${data.pokemon.num} </p>
    </div>
    `
}

document.getElementById("pokemonDisplay").innerHTML = `
    <h1 class="displayTitle"> Pokedex (${data.pokemon.length}) <h1>
    ${data.pokemon.map(pokemonCard).join("")}
`;
//console.log(data);
 //<img class="pokemonImage" src="${data.pokemon.img}>