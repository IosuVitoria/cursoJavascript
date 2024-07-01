//Existen 3 tipos de operadores lógicos con los cuales se van a realizar las sentencias lógicas a la hora de ejecutar código.

//Declaración de variables inicial.
let esMayorDeEdad = true;
let tienePermisoConducir = false;

// OPERADOR AND
// Es la "y" del lenguaje habitual. Ambas variables tienen que ser true para que la evaluación final de la sentencia sea TRUE.

let puedeConducir = esMayorDeEdad && tienePermisoConducir; 
console.log(`El hijo de mi amigo puede conducir: ${puedeConducir}`);

esMayorDeEdad = false;
console.log(`Mi hijo sin embargo, ¿Puede conducir?: ${puedeConducir}`);


// OPERADOR OR
//Es el "o" del lenguaje habitual. Una de las variables en true es suficiente para que la evaluación final de la sentencia sea TRUE.
let nuevoTrabajo = true;
esMayorDeEdad = false

let puedeEstudiar = esMayorDeEdad || nuevoTrabajo; 
console.log(`Ya seas mayor de edad o no, tengas un nuevo trabajo o no. La respuesta a tener que formarse siempre es: ${puedeEstudiar}`)

// OPERADOR DISTINTO DE
//Marca lo contrario de una variable. 

let noPuedeConducir = !tienePermisoConducir; 
console.log(noPuedeConducir)