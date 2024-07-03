// Un objeto en JavaScript es una colección de propiedades, donde cada propiedad se compone de una clave 
// (nombre de la propiedad) y un valor. Los valores pueden ser de cualquier tipo, incluidos otros objetos
//  y funciones.

// Creación de Objetos

// Sintaxis literal:

const persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
};

// Constructor de Object:

const persona2 = new Object();
persona2.nombre = "Juan";
persona2.edad = 30;
persona2.saludar = function() {
    console.log("Hola, mi nombre es " + this.nombre);
};

// Objetos anidados:

const persona3 = {
    nombre: "Juan",
    direccion: {
        calle: "Calle Falsa 123",
        ciudad: "Springfield",
        pais: "USA"
    }
};


// Acceso a Propiedades

// Notación de punto: 
//La notación del punto es fundamental para poder entender las respuestas de los servidores y acceder a las informaciones que estas llevan.
//En el objeto.js del aparatado 3 del bloque 2 hay un modelo de respuesta complejo con el que trabajar para conseguir datos.
console.log(persona.nombre); // "Juan"

// Notación de corchetes:
console.log(persona2["edad"]); // 30

// Acceso a propiedades anidadas:
console.log(persona3.direccion.ciudad); // "Springfield"