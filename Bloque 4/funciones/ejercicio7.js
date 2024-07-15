//Contar vocales

const cuentaVocales = (palabra) => {

    //Recibir palabra y transformar para simplificar.
    let palabraConteo = palabra.toString().toLowerCase();
    let conteo = 0;

    //Recorrer la palabra, comparamos con vocales y sumamos al conteo final
    for(let i = 0; i < palabraConteo.length; i++){
        if(palabraConteo[i] === "a" || palabraConteo[i] === "e" || palabraConteo[i] === "i" || palabraConteo[i] === "o" || palabraConteo[i] === "u"){
            conteo++;
        }
    }
    //Se devuelve el conteo para imprimir
    return conteo;
}

console.log(`La cantidad de vocales en la palabra murciélago es de: ${cuentaVocales("Murcielago")}`);

//Versión mejorada.

const cuentaVocales2 = palabra => {
    return (palabra.toLowerCase().match(/[aeiou]/g) || []).length;
}

console.log(cuentaVocales2("Hola Mundo"));

//Esta expresión: match(/[aeiou]/g) busca todas las vocales de la cadena. APROXIMACIÓN A LAS EXPRESIONES REGULARES. 
//Documentación:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions