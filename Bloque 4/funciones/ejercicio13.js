function countWords(string){

    //Declaro una variable para guardar el conteo de palabras. Declaro una variable para acoger el string.
    let conteoPalabras;
    let frase = string;

    //Transformo el string en un array usando split. Documentación aquí: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split.
    let arrayPalabras = frase.split(" ");

    //Uso length para contar el número de elementos del array y lo igualo a la variable de conteo.
    conteoPalabras = arrayPalabras.length;
    
    //Devuelvo el valor obtenido en el return.
    return conteoPalabras;

}


console.log(countWords("Esto es una cadena que voy a contar."));

//Concatenando funciones y optimizando código.

const countWords1 = (string) => {
    return string.split(" ").length; //Podemos concatenar métodos para ir trabajando sobre una variable concreta.
}

console.log(countWords1("Esto es una cadena que voy a contar."));