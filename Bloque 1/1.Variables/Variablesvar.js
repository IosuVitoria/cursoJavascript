//Ejemplo de variable situada para que tenga un alcance global.

var proteina = "creatina";

//Uso dentro de una función.
function entrenamiento(){
    console.log(`Me han aconsejeado que tome ${proteina} cuando hago fuerza.`);
}
entrenamiento();

//La variable se usa fuera de una función.
console.log(`El médido me ha aconsejado que no tome tanta ${proteina}.`);


//Ejemplo de variable situada para que tenga un alcance dentro del código en el que es declarada.
function atletismo(){
    var carrera = "Behobia";
    console.log(`Mi carrera favorita es : ${carrera}`);
}

// console.log(`La carrera favorita de mi amigo es: ${carrera}`);


//HOISTING

console.log(nombre); // Esto debe dar undefined
var nombre = 'Juan';
console.log(nombre); // Esto debe mostrar Juan.