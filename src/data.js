// estas funciones son de ejemplo
import data from './data/pokemon/pokemon.js';
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


export const filterData = (searchBy) => {
  var results = [];
  var searchField = data.pokemon.name;
  for (var i=0 ; i < data.pokemon.length ; i++)
  {
      if (data.pokemon[i][searchField] == searchBy) {
          results.push(data.pokemon[i]);
      }
    }
    return console.log(results);
  };
 
