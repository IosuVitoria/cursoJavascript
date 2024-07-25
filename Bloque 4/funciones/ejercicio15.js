function crearPalidromo (string){
    //Crear variable que guarde la palabra en orden invertido.
    let palindromo = string;

     // Añadir caracteres de la cadena original en orden inverso. Se descarga el último caracter por eso el length menos 2.
     for (let i = string.length - 2; i >= 0; i--) {
        palindromo += string[i];
    }

    //Devolver la palabra convertida en palíndromo
    return palindromo;
}


console.log(crearPalidromo("palabra"));

//USando split, reverse, join y slice para trabajar con strings.

const crearPalidromo1 = (string) => {
    //Objetivo de revertir la cadena.
    let reversed = string.split('').reverse().join('');
    // Crear el palíndromo agregando la cadena invertida a la original, sin el primer carácter de la invertida y para ello uso slice.
    let palindromo = string + reversed.slice(1);
    return palindromo;
}



console.log(crearPalidromo1("palabra"));

//Documentación de interés:
//SPLIT: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split
//SLICE: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
//REVERSE: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
//JOIN: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join
