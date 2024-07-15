const calculoTresNumeros = (a, b, c) => {
    // Se crea un array para guardar los números.
    let numeros = [a, b, c];

    // Se determina primero el mínimo y máximo usando el objeto Math con el operador de propagación.
    let min = Math.min(...numeros);
    let max = Math.max(...numeros);

    let resultados = {
        max: max,
        min: min
    };

    // console.log(resultados);
    return resultados;
}

console.log(`El análisis de máximos y mínimos para [-17, -25, 24] es: ${JSON.stringify(calculoTresNumeros(-17, -25, 24))}`);


//Este código se puede resumir al máximo si se hace así:

const calculoTresNumeros2 = (a, b, c) => ({
    max: Math.max(a, b, c),
    min: Math.min(a, b, c)
});

console.log(`El análisis de máximos y mínimos para [-17, -25, 24] es: ${JSON.stringify(calculoTresNumeros2(-17, -25, 24))}`);
