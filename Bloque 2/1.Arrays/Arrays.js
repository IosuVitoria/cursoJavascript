//Arrays. Estructura de datos que permite almacenar múltiples valores en una sola variable. Son dinámicos y portanto accesibles.

//Crear un array.

//1. Crear un array de manera directa usando los corchetes y valores.
const numeros = [1,2,3,4];
console.log(typeof(numeros), numeros); // object [ 1, 2, 3, 4 ]

//2. Usando un constructor.
const numeros2 = new Array(1,2,3,4);
console.log(typeof(numeros2), numeros2); // object [ 1, 2, 3, 4 ]

//Se puede construir un array vacío si se pasa en el constructor un sólo parámetro.
const numeros3 = new Array(3);
console.log(typeof(numeros3), numeros3); //Se arranca el array con 3 elementos vacíos. object [ <3 empty items> ]

//ACCEDER A LOS ELEMENTOS DE UN ARRAY (Recuerda que existe la posición 0 y que luego se sigue avanzando.)

const x = numeros[0];
const y = numeros[1];

//Posición 0 en array numeros es 1 y la posición 1 en el array números es 2.

console.log(`La suma de ${x} y ${y} es ${x+y}.`);

//MÉTODOS DE LOS ARRAYS

//a) Manipular arrays.
// push(): Añade uno o más elementos al final del array.

const array1 = [1, 2, 3];
array1.push(4, 5);
console.log(array1); // [1, 2, 3, 4, 5]

// pop(): Elimina el último elemento del array y lo devuelve.

const array2 = [1, 2, 3];
const ultimo = array2.pop();
console.log(ultimo); // 3
console.log(array2); // [1, 2]


// unshift(): Añade uno o más elementos al inicio del array.

const array3 = [1, 2, 3];
array3.unshift(0);
console.log(array3); // [0, 1, 2, 3]

// shift(): Elimina el primer elemento del array y lo devuelve.

const array4 = [1, 2, 3];
const primero = array4.shift();
console.log(primero); // 1
console.log(array4); // [2, 3]


// b)Acceso y Búsqueda:

// indexOf(): Devuelve el primer índice en el que se encuentra un elemento.

const array5 = [1, 2, 3, 2];
console.log(array5.indexOf(2)); // 1

// lastIndexOf(): Devuelve el último índice en el que se encuentra un elemento.

const array6 = [1, 2, 3, 2];
console.log(array6.lastIndexOf(2)); // 3

// includes(): Verifica si un array contiene un elemento.

const array7 = [1, 2, 3];
console.log(array7.includes(2)); // true
console.log(array7.includes(4)); // false

// find(): Devuelve el primer elemento que cumpla una condición.

const array8 = [1, 2, 3, 4];
const encontrado = array8.find(elemento => elemento > 2);
console.log(encontrado); // 3


// findIndex(): Devuelve el índice del primer elemento que cumpla una condición.

const array9 = [1, 2, 3, 4];
const index = array9.findIndex(elemento => elemento > 2);
console.log(index); // 2

//c) Iteración:

// forEach(): Ejecuta una función para cada elemento del array.

const array10 = [1, 2, 3];
array10.forEach(elemento => console.log(elemento));
// Imprime 1, 2, 3

// map(): Crea un nuevo array con los resultados de aplicar una función a cada elemento.

const array11 = [1, 2, 3];
const cuadrados = array11.map(elemento => elemento ** 2);
console.log(cuadrados); // [1, 4, 9]

// filter(): Crea un nuevo array con todos los elementos que cumplan una condición.

const array12 = [1, 2, 3, 4];
const pares = array12.filter(elemento => elemento % 2 === 0);
console.log(pares); // [2, 4]

// reduce(): Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un único valor.

const array13 = [1, 2, 3, 4];
const suma2 = array13.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log(suma2); // 10

// d) Transformación y Ordenación:

// slice(): Devuelve una copia de una parte del array dentro de un nuevo array.

const array14 = [1, 2, 3, 4, 5];
const subArray = array14.slice(1, 3);
console.log(subArray); // [2, 3]

// splice(): Añade, elimina o reemplaza elementos del array.

const array15 = [1, 2, 3, 4, 5];
array15.splice(2, 1, 'nuevo');
console.log(array15); // [1, 2, 'nuevo', 4, 5]

// concat(): Combina dos o más arrays.

const array16 = [1, 2];
const array17 = [3, 4];
const combinado = array16.concat(array17);
console.log(combinado); // [1, 2, 3, 4]

// join(): Une todos los elementos de un array en una cadena.

const array18 = ['Hola', 'mundo'];
const cadena = array18.join(' ');
console.log(cadena); // 'Hola mundo'

// reverse(): Invierte el orden de los elementos del array.

const array19 = [1, 2, 3];
array19.reverse();
console.log(array19); // [3, 2, 1]

// sort(): Ordena los elementos del array.

const array20 = [3, 1, 4, 1, 5, 9];
array20.sort();
console.log(array20); // [1, 1, 3, 4, 5, 9]

//e) Verificación y Validación:

// every(): Verifica si todos los elementos cumplen una condición.

const array21 = [1, 2, 3, 4];
const todosPares = array21.every(elemento => elemento % 2 === 0);
console.log(todosPares); // false

// some(): Verifica si al menos un elemento cumple una condición.

const array22 = [1, 2, 3, 4];
const algunPar = array22.some(elemento => elemento % 2 === 0);
console.log(algunPar); // true
