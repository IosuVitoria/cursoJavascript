//Es posible transformar datos si se necesita para poder operar con ellos. Aquí se verán las dos más comunes y sencillas.

//1º Conversión de número a string.

let num = 123;
let str = String(num); 
let str2 = num.toString();

console.log(`Primera conversión: ${str} y segunda conversión: ${str2}`);

//2º Conversión de string a número.

let str3 = "123";
let num2 = Number(str3); 
let intNum = parseInt(str3); 
let floatNum = parseFloat("123.45"); 

console.log(`Primera conversión: ${num2}, segunda conversión: ${intNum} y tercera conversión: ${floatNum}`);