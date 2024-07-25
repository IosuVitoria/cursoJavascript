function calculate(array) {
    // Ordenar el array para facilitar el cálculo de la mediana
    let arrayOrdeado = array.slice().sort((a, b) => a - b);

    // Calcular la media
    let sum = array.reduce((acc, val) => acc + val, 0);
    let media = sum / array.length;

    // Calcular la mediana
    let medio = Math.floor(arrayOrdeado.length / 2);
    let mediana = arrayOrdeado.length % 2 !== 0 ? arrayOrdeado[medio] : (arrayOrdeado[medio - 1] + arrayOrdeado[medio]) / 2;

    // Calcular la moda
    let frecuencia = {};
    let maxFreq = 0;
    let moda = null;

    for (let num of array) {
        frecuencia[num] = (frecuencia[num] || 0) + 1;
        if (frecuencia[num] > maxFreq) {
            maxFreq = frecuencia[num];
            moda = num;
        }
    }

    // Si todos los elementos tienen la misma frecuencia, no hay moda
    let allSamefrecuencia = Object.values(frecuencia).every(freq => freq === maxFreq);
    if (allSamefrecuencia) moda = null;

    return { media, mediana, moda };
}

const lista = [1, 3, 5, 7, 9, 11, 11, 15, 17, 19];
const resultados = calculate(lista);
console.log(`La media, mediana y moda de la siguiente lista: ${lista} son: media: ${resultados.media}, mediana: ${resultados.mediana} y moda: ${resultados.moda}.`);
