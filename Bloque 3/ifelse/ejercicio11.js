//SOLUCIÓN PARA NAVEGADOR.
// Constantes de conversión
const kmToMiles = 0.621371;
const milesToKm = 1.60934;


const opcion = prompt("Elija una opción:\n1. Convertir kilómetros a millas\n2. Convertir millas a kilómetros");
const cantidad = parseFloat(prompt("Ingrese la cantidad a convertir:"));

if (opcion === "1") {
    const millas = cantidad * kmToMiles;
    console.log(`${cantidad} kilómetros son ${millas} millas.`);
} else if (opcion === "2") {
    const kilometros = cantidad * milesToKm;
    console.log(`${cantidad} millas son ${kilometros} kilómetros.`);
} else {
    //Control de las opciones no recogidas por la selección. Preveer errores.
    console.log("Opción no válida. Por favor, elija 1 o 2.");
}