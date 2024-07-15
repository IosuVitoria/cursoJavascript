function revertir(cadena) {
    // Tomar la palabra en una variable y declarar otra en la que se irán dejando letras.
    let palabra = cadena.toString();
    let letras = palabra.split("");
  
    let revertida = "";

    // Realizar un ciclo que recorra del final al comienzo de la palabra.
    for(let i = (palabra.length - 1); i >= 0; i--) {
        revertida += letras[i];
    }
    
    // Devolver la cadena
    return revertida;
}

console.log("Esta es la palabra revertida: ", revertir("palabra"));

//Se usa split para separar. El método reverse para revertir y join para unir.

const revertir2 = cadena => cadena.split('').reverse().join('');

console.log("Esta es la palabra revertida: ", revertir2("revertir"));