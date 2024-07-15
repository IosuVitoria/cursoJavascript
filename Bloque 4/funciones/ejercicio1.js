//Dos soluciones. Una con pseudocódigo y otra simplificada y sin él.

const suma = (a, b) =>{
    //Recoger el primer parámetro en una variable.
    let num1 = a;
    //Recoger el segundo parámetro en otra variable y declarar la variable resultado.
    let num2 = b;
    let resultado;
    //Realizar la operación.
    resultado = a + b;
    //Devolver el resultado.
    return resultado;
}

//El pseudocódigo en este caso recarga la función pero sirve de ejemplo para como pensar en situaciones mucho más complejas.

console.log(`El resultado de la suma de 45 y 18 es: ${suma(45, 18)}`);

//Forma 2:

const suma2 = (a,b) => {
    return a + b;
}

//Se puede trabajar mucho más rápido cuando son operaciones simples.

console.log(`El resultado de la suma de 45 y 18 es: ${suma2(45, 18)}`);