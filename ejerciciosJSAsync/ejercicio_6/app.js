
const obtenerPersonaFake = require("./library");

// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido
obtenerPersonaFake().then(function funcionCallback(persona){

    persona.results.forEach(i =>{
        console.log("la/el "+i.name.first+" "+i.name.last+" con genero "+i.gender+"\n vive en "
        +i.location.country+", "+i.location.state+", "+i.location.city+", "+i.location.street.name+" "+i.location.street.number+ " codigo postal "+i.location.postcode
        +"\n mail: "+i.email+ " usuario: "+i.login.username+" contraseña: "+i.login.password)
    }
    
    );
});
