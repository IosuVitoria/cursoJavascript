//Secuencia fibonacci
const fibonacci = n => {
    //Controlar si se mete 0 o menos de 0 para evitar errores.
    if (n <= 0) {
        return [];
    }
    //Si se mete un sólo número que también esté controlado.
    else if (n === 1) {
        return [0];
    }
    //Generar la secuencia fibonacci.
    else{
        //Par de arranque de números.
        const fib = [0, 1];
        //Recorrer el array y se van haciendo los cálculos de los nuevos miembros del array en base a los dos números precedentes.
        for (let i = 2; i < n; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
        return fib;
    }
   
}

console.log(fibonacci(9));

//Otra versión de la función.

const fibonacci2 = n => {
    if (n <= 0) return [];
    return Array.from({ length: n }).reduce(
        (secuencia, _, i) => {
            if (i >= 2) secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
            return secuencia;
        },
        [0, 1]
    );
}

console.log(fibonacci2(9));