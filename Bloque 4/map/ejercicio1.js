const numCuadrado = (array) => {

    //Recupero en una variable el array que me entra.
    let arraySinTransformar = array;

    //Uso map para hacer la transformación requerida a cada elemento.
    let arrayTransformado = arraySinTransformar.map((x) => {return x**2})

    //Devolver array transformado.
    return arrayTransformado
}


console.log(numCuadrado([2,3,4,5,6,7,8,9]));

//Documentación oficial map: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map