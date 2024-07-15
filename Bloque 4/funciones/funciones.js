// Una definición de una función consta de la palabra clave function seguida de:

// - El nombre de la función.
// - Lista de parámetros de la función. Entre paréntesis y separados por comas.
// - Las declaraciones de JavaScript que definen la función, encerradas entre llaves, { ... }.

// function square(number){
//     return number * number
// }

// Con ECMAS6 llegan las arrow functions que se escriben así:

// const square = (number) =>{
//     return number * number;
// }

//Ejemplos:

//Usando el objeto Math para calcular la hipotenusa.

//Math.sqrt --> Usado para hacer la raiz cuadrada. Se puede obtener lo mismo usando el operador potencia ** y poniendo por 0.5.
//Math.pow --> Usado para hacer potencias. El primer parámetro es la base y el segundo la potencia a la cual queremos elevar.

function pitagoras(a, b){
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

console.log(`La hipotenusa del cuadrado con catetos de 3cm y 4cm mide: ${pitagoras(3,4)}cm.`);


//Usando arrow function y sin usar el objeto Math.

const pitagoras2 = (a, b) => {
    return ((a)**2+(b)**2)**0.5
}

console.log("Segunda manera:");
console.log(`La hipotenusa del cuadrado con catetos de 3cm y 4cm mide: ${pitagoras2(3,4)}cm.`);

//Al usar frameworks como React(meta) es muy común usar funciones Arrow. Sería recomendable pasar a este tipo de función.