// Usando el array todosLosNombres, utiliza el método slice para obtener un subarray que contenga solo los dos primeros nombres. Muestra este subarray en la consola.

let nombres1 = ["Pedro", "Blanca", "Iosu"];

let nombres2 = ["Verónica", "Julen", "Patri"];

let todosLosNombres = nombres1.concat(nombres2);

let primerosNombres = todosLosNombres.slice(0, 2);

console.log(primerosNombres);

