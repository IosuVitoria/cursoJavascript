// Crea un array llamado puntos que contenga 5 números. Usa el método reduce para obtener la suma de todos los elementos en el array. Muestra el resultado en la consola.

let puntos = [10, 20, 30, 40, 50];

let sumaPuntos = puntos.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
}, 0);

console.log(sumaPuntos);