
const obtenerPokemon = require("./library");

// Codigo funcion callback
function quienEsEstePokemon(pokemon){
    console.log("el pokemon :"+pokemon.forms[0].name);
    pokemon.abilities.forEach(habilidades => console.log(habilidades.ability.name));
}


// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido

obtenerPokemon("pikachu",quienEsEstePokemon);
