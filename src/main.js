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
    <img class="cardImage" src="${data.pokemon[0].img}">
    <label class="cardNum"> ${Object.values(pokemon.num).join("")} </label>
   <h2 class="cardName"> ${Object.values(pokemon.name).join("")} </h2>
   <label class="cardType"> ${Object.values(pokemon.type).join(" , ")} </label>
    </div>
    `
}

document.getElementById("cardContainer").innerHTML = `
    ${data.pokemon.map(pokemonCard).join("")}
`;


//console.log(data);
 //<img class="pokemonImage" src="${data.pokemon.img}>