import {searchPokemon, pokemonCard, byHighest, type, byLowest} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';

/* Reload página con la imagen*/
const reload = document.getElementById('logo');

reload.addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
    location.reload();
});

//array 251 pokemones
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

//aplciar Grafica

document.getElementById("stats").addEventListener("click", function(){
document.getElementById("myChart").innerHTML = cargarGrafica();
})

//Grafica 
let
generationTotal,
generationiPercentage,
generationiiPercentage,
generationi = 0,
generationii = 0,
resultado =[];

const variables =['generationi','generationii'];
const pokemonGenerations = pokemon_database.map(pokemon => pokemon.generation.num);
const grafica = document.querySelector('#myChart');


generationPokemon();
function generationPokemon(){
    pokemonGenerations.forEach((generation)=>{
        if(generation ===  "generation i"){
          generationi+=1;
        }else{
            generationii+=1;
        }
    });

    generationTotal= generationi+generationii;
    generationiPercentage=(generationi*100)/generationTotal;
    generationiiPercentage=(generationii*100)/generationTotal;
    resultado.push(generationiPercentage);
    resultado.push(generationiiPercentage);

    return resultado;
}


function cargarGrafica(){ 
const myChart = new Chart(grafica, {
    type: 'bar',
    data: {
        labels:variables,
        datasets: [{
            label: '# of pokemons',
            data: resultado,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}
