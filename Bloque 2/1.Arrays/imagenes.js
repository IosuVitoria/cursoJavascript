//Imagen 16. EJEMPLO BÁSICO DE ARRAY.

let frutas = ["manzanas", "naranjas", "peras", "limones"];

console.log(`La posición 0 corresponde a ${frutas[0]}`);
console.log(`La posición 1 corresponde a ${frutas[1]}`);
console.log(`La posición 2 corresponde a ${frutas[2]}`);

//Imagen 17. ejemplos de push, pop, shift y unshift.

let frutas2 = ["manzanas", "naranjas", "peras", "limones"];

//PUSH.
frutas2.push("melones");
console.log("PUSH: ", frutas2);
//POP. Se eliminan los melones introducidos previamente.
frutas2.pop();
console.log("POP: ", frutas2);
//SHIFT. Se eliminan las manzanas de la primera posición.
frutas2.shift();
console.log("SHIFT: ", frutas2);
//UNSHIFT. Se agregan los melones pero en la primera posición.
frutas2.unshift("melones");
console.log("UNSHIFT: ", frutas2);

//Imagen 18: Impresión por consola de lo que se muestra en la imagen 17.

let frutas3 = ["manzanas", "naranjas", "peras", "limones", "pitayas", "sandías", "melocotones"];

// SPLICE
// Modalidad sin reponer valores tras retirada de los originales. Tercer parámetro no se usa.
let frutas4 = frutas3.splice(2,1);
console.log(frutas4);
// Se retiran las peras que quedan almadenadas en frutas4.
console.log(frutas3);
// Modalidad cambiando los valores tras retirada de los originales.
let frutas5 = frutas3.splice(2,2,"limas", "melones");
// Se retiran limones y pitayas.
console.log(frutas5);
// Se retiran las peras que quedan almadenadas en frutas4.
console.log(frutas3);

// SLICE
let frutas6 = frutas3.slice(2,5);
//Se seleccionan limas melones y sancías.
console.log(frutas6);
console.log(frutas3);