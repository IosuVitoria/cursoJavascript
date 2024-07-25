function resolverCuadratica(a, b, c) {
    //Calcular el discriminante en una variable. 
    const discriminante = b * b - 4 * a * c;

    //Determinar los 3 casos que pueden darse por el cálculo del discriminante.
    //Si el valor es inferior a 0 --> NO HAY SOLUCIÓN Y SE DEVUELVE UN ARRAY VACÍO DE SOLUCIONES.
    if (discriminante < 0) {
        return []; 
    //Si el valor es 0 significa que tenemos una única solución y el valor de la misma se calcula con la formula x = -b /2a.
    } else if (discriminante === 0) {
        const x = -b / (2 * a);
        return [x]; 
    //Mayor que 0 debo hacer la fórmula completa. Para ello plantear un else.
    } else {
        const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return [x1, x2]; 
    }
}

console.log(resolverCuadratica(1, -3, 2)); 
console.log(resolverCuadratica(1, 2, 1)); 
console.log(resolverCuadratica(1, 0, 1)); 


//Repasito de conceptos de cuadráticas: https://www.neurochispas.com/wiki/discriminante-de-una-ecuacion-cuadratica-formula-y-ejercicios/

const resolverCuadratica1 = (a, b, c) => {
    const discriminante = b * b - 4 * a * c;

    return discriminante < 0 
        ? [] 
        : discriminante === 0 
            ? [-b / (2 * a)] 
            : [(-b + Math.sqrt(discriminante)) / (2 * a), (-b - Math.sqrt(discriminante)) / (2 * a)];
}

console.log(resolverCuadratica1(1, -3, 2)); 
console.log(resolverCuadratica1(1, 2, 1)); 
console.log(resolverCuadratica1(1, 0, 1)); 