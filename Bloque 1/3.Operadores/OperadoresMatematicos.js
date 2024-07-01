// Operaciones Matemáticas

let a = 10;
let b = 3;

//Operador suma
let sum = a + b;       
console.log(`Ressultado de la suma: ${sum}`);

//También se puede aplicar a strings para concatenar texto.
let saludoA = "¡Bienvenido a ";
let saludoB = "casa!"
let saludoC = saludoA + saludoC;
console.log(saludoC);

//Operador resta
let diferencia = a - b;
console.log(`Este es el resultado de la resta: ${diferencia}`);

//Operador multiplicación
let multiplicacion = a * b;    
console.log(`Este es el resultado de la multiplicacion: ${multiplicacion}`);

//Operador división
let division = a / b; 
console.log(`Este es el resultado de la división: ${division}`);

//Operador resto
//Nota: recordar que el resto es lo que queda de dividir a entre b.
let resto = a % b; 
console.log(`Este es el resultado del resto: ${resto}`);

//Operador potencia
let potencia = a ** b;     
console.log(`Este esl resultado de la potencia: ${potencia}`);

//OPERADORES ASIGNACIÓN
//Recuerda que los operadores se pueden utilizar para hacer sumas, restas, divisiones, multiplicaciones y módulos en asignación.
//MUY COMÚN DE USAR EN ESTRUCTURAS DE CONTROL.

let variable3 = 7;

//Suma en asignación.
variable3 += 7;
console.log("SUMA: ", variable3);

//Resta en asignación.
variable3 -= 7;
console.log("RESTA: ", variable3);

//Multiplicación en asignación.
variable3 *= 7;
console.log("MULTIPLICACIÓN: ",variable3);

//División en asignación.
variable3 /= 7;
console.log("DIVISIÓN", variable3);