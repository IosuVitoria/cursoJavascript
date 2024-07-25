const validarEmail = (email) =>{
    //Establecer un regex o patrón que dermina la presencia del arroba.
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}

console.log(validarEmail("iosu@iosu.com"));
console.log(validarEmail("iosu@.com"));
console.log(validarEmail("iosu@iosu"));


//Documentación interesante regex:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
// Expresiones útiles: https://programacion.net/articulo/25_expresiones_regulares_que_todo_programador_web_deberia_conocer_1213
// Para testar tus regex: https://regex101.com/ introducir tu regex y un string y valida su funcionamiento.