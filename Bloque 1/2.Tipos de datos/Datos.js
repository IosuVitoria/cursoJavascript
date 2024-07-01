//TIPOS DE DATOS EN JAVASCRIPT

//Tipo de dato number. 

let edad = 38; // Edad es un entero.
let impuesto = 1.21 // Impuesto es un número decimal.

console.log(typeof(edad), typeof(impuesto));

//El método typeof muestra el tipo de dato con el que se está trabajando.

//Tipo de dato string.

let nombre = "Iosu";
let apellidos = `Gómez Valdecantos`;

console.log(typeof(nombre), typeof(apellidos));

//Tipo de dato Big Int. Sirve oara bñyneris de grab tamaño.
let distanciaPlutonCm = 590000000000000n;
console.log(typeof(distanciaPlutonCm));

//Tipo de dato Boolean.
let gustaMusica = true;
let gustaPure = false;
console.log(typeof(gustaMusica), typeof(gustaPure));

// Tipo de dato undefined.
let edad2;
console.log(`Este es el caso de un tipo de dato undefined: ${edad2}`);

//Tipo de dato symbol.

const symbol1 = Symbol('description1');
const symbol2 = Symbol('description2');

console.log(typeof(symbol1), typeof(symbol2));


//TIPO NULL -- NO CONTROLADO POR EL OPERADOR TYPEOF

let variable1 = null;
console.log(`Este es el log de variable1: ${variable1}`);

//Tipo object

const alumnos = [{nombre:"Pedro", edad:37}, {nombre:"Maria", edad:32}, {nombre:"Laura", edad:33}];

console.log(alumnos)
console.log(typeof(alumnos));

const lista = {"lechuga":17,"tomates":15, "aguacate":16};

console.log(`Tipo de objequeto para lista: ${typeof(lista)}`);


//Tipo función

//Función con ECMAScript 6
const saludo = () => {
    console.log("Hola usuario");
}

function despedida(){
    console.log("Adios usuario");
}

console.log(`Reconociendo los tipos de las funciones: ${typeof(saludo)} y ${typeof(despedida)}`)