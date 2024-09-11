// Modifica una propiedad del objeto "persona" creado en el primer ejercicio. Cambia su edad por un nuevo valor y muestra el objeto modificado.

const persona = {
    nombre: "Iosu",
    edad: 38,
    profesion: "programador",
    cumpleaños : function(){
        this.edad++;
        console.log(`Mi nueva edad es ${persona.edad} años.`);
    }
}

console.log(persona.edad);
persona.cumpleaños();