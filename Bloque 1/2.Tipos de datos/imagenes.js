//Imagen 8. Tipos de variables.

// Variable de tipo numérico.
let variable1 = 1;
console.log(variable1, typeof(variable1));

// Variable del tipo string.
let variable2 = "Hola mundo!";
console.log(variable2, typeof(variable2));

// Variable del tipo boolean.
let variable3 = true;
console.log(variable3, typeof(variable3));

// Variable del tipo null.
let variable4 = null;
console.log(variable4, typeof(variable4));

// Variable del tipo undefined.
let variable5;
console.log(variable5, typeof(variable5));

// Variable del tipo Símbolo.
let variable6 = Symbol("id");
console.log(variable6, typeof(variable6));


//Imagen 9. Tipos de variables. Datos estructurales.

// Variable del tipo objeto.

const persona = {
    nombre: "Iosu",
    apellidos: "Gómez Valdecatos",
    edad: 38,
    casado: false,
    religion: null
};

console.log(persona);

// Variable del tipo array.

let frutas = ["manzanas", "peras", "naranjas"];
let mezcla = [1,2,3,"cuatro", null];

console.log(frutas);
console.log(mezcla);

// Función

function saludo(nombre){
    console.log(`Buenos días ${nombre}!`);
}

saludo("Iosu")