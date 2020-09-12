class Persona{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }

    presentarse(){
        return "hola mi nombre es "+ this.nombre+" tengo "+ this.edad+" años";
    }

}

class Estudiante extends Persona{
    
    constructor(nombre,edad){
        super(nombre,edad);
    }

    estudiando(){
        return "Estudiando con el profesor "+ this.profesor;
    }

    setProfesor(nameProfesor){
        this.profesor=nameProfesor;
    }

}


var alumno=new Estudiante("Lautaro","25");

alumno.setProfesor("Christian Dario Nievas");

console.log(alumno.presentarse());
console.log(alumno.estudiando());
