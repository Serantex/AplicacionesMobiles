
const obtenerPersonaFake = require("./library");

// Codigo funcion callback
function funcionCallback(persona){

    persona.results.forEach(i =>{
        console.log("la/el "+i.name.first+" "+i.name.last+" con genero "+i.gender+"\n vive en "
        +i.location.country+", "+i.location.state+", "+i.location.city+", "+i.location.street.name+" "+i.location.street.number+ " codigo postal "+i.location.postcode
        +"\n mail: "+i.email+ " usuario: "+i.login.username+" contraseña: "+i.login.password)
    }
    
    );
}


// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(funcionCallback);
