
const obtenerPokemon = require("./library");

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
obtenerPokemon("pikachu").then(function quienEsEstePokemon(pokemon){
    console.log("el pokemon :"+pokemon.forms[0].name);
    pokemon.abilities.forEach(habilidades => console.log(habilidades.ability.name))
});
