//Factorial: Multiplicación de un número en ciclo hasta que se llega a uno.

const factorial = (n) => {

    //Se inicia una variable resultado en el que se acumularán los resultados de las multiplicaciones por asignación. 
    let resultado = 1;

    //Se recorren todos los números hasta la unidad.
    for(let i = n; i > 1; i--){
        resultado *= i;
    }

    //Se devuelve para trabajar.
    return resultado;
}

console.log(`El factorial de 5 es:  ${factorial(5)}.`);

//OPTIMIZADA:

//En esta versión se tiene en cuenta la posibilidad de números negativos.
const factorial2 = n => n < 0 ? 'Error: Número negativo' : n <= 1 ? 1 : n * factorial2(n - 1);

console.log(`El factorial de 5 es: ${factorial2(5)}.`);  