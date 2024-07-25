//ALGORITMO DE BÚSQUEDA BINARIA.

function busquedaBinaria(lista, objetivo) {
    //En un algoritmo de este estilo necesitamos definir el límite inicial y el límite final.
    let izquierda = 0;
    let derecha = lista.length - 1;

    //Realizar una búsqueda hasta encontrar el valor.
    while (izquierda <= derecha) {

        // En este tipo de algoritmo revisamos el valor central, así que se calcula.
        let medio = Math.floor((izquierda + derecha) / 2);

        // Comparar y seleccionar el valor.
        if (lista[medio] === objetivo) {
            return medio;
        } else if (lista[medio] < objetivo) {
            izquierda = medio + 1;
        } else {
            
            derecha = medio - 1;
        }
    }

    //Mensaje si el elemento no está en la lista.
    return -1;
}

let listaOrdenada = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let objetivo = 7;
let resultado = busquedaBinaria(listaOrdenada, objetivo);

console.log(`El elemento ${objetivo} se encuentra en el índice: ${resultado}`);

