//Imagen 10. Operadores de tipo matemático.

const variable1 = 10;
const variable2 = 5;

let resultado;

// Operador del tipo suma.
console.log("SUMA:", variable1 + variable2);
// Operador del tipo resta.
console.log("RESTA:", variable1 - variable2);
// Operador del tipo multiplicación
console.log("MULTIPLICACIÓN:", variable1 * variable2);
// Operdor del tipo división
console.log("DIVISIÓN:", variable1 / variable2);
// Operador del tipo módulo
console.log("MÓDULO:", variable1 % variable2);

//Imagen 11. Uso del operador + para unir strings.

let variable4 = "Esta es la primera parte de la frase";
let variable5 = "esta es la segunda parte de la frase";
console.log(`${variable4} y ${variable5}.`);
console.log(variable4 + " y " + variable5 + ".");

//Imagen 12. 

// Template strings. 
//¿Qué son? Una manera de poder mostrar una composición 
//compleja de strings y variables para dar un mensaje completo.
//Usa el siguiente acento: `` y si se quiere usar una variable
// si tiene que usar con la siguiente notación:
//${variableX}. Veamos con un ejemplo.

const variable6 = 'template string';
console.log(`Hola, soy una ${variable6}.`) 
// Impreso en consola: Hola, soy una template string.


//Imagen 13. Resto de operadores matemáticos.

let variable7 = 2;
let variable8 = 3;

//Operador exponente.
console.log("EXPONENTE: ", variable7**variable8);
//Operador incremento.
console.log("PREFIJO INCREMENTO: ", ++variable7);
console.log("SUFIJO INCREMENTO: ", variable7++);
//Operador decremento.
console.log("PREFIJO DECREMENTO: ", --variable8);
console.log("SUFIJO DECREMENTO: ", variable8--);

//Imagen 14. Operadores lógicos.

let variable9 = true;
let variable10 = false;

//Comparador AND.
console.log(variable9 && variable10);
console.log(variable9 && variable9);
//Comparador OR.
console.log(variable9 && variable10);
//Comparador NOT.
console.log(!variable9);
console.log(!variable10);

//Imagen 15. 

let variable11 = 10;
let variable12 = 12;
let variable13 = "10";

//Operador igual
console.log(variable11 == variable13);
//Operador igual estricto
console.log(variable11 == variable13);
//Operador diferente
console.log(variable11 != variable12);
//Operador diferente estricto
console.log(variable11 !== variable13);
//Operador mayor que // menor que
console.log(variable11 > variable12);
console.log(variable11 < variable12);
//Operador mayor o igual que // menor o igual que
console.log(variable11 <= variable12);
console.log(variable11 >= variable12);

