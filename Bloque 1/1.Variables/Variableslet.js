//Ejemplo de alcance de una variable let

if(true){
    let mensaje = "Estoy dentro del bloque.";
    console.log(mensaje);
}

//console.log(mensaje); //En este caso se obtiene un error. La variable mensaje no se encuentra fuera de
// del if y por lo tanto no es accesible para para el console.log.

let mensaje2 = "Estoy dentro del bloque.";

if(true){
    console.log(mensaje2);
}
console.log(mensaje2);

//Este segundo caso si puede ser accedida la variable por los dos console.log.

//NOTA: Las estructuras IF serán explicadas a posteriori. 


//Reasignación de valores de una variable let:

let numero = 10;
console.log(numero); // El número vale 10 y se muestra

numero = 20;
console.log(numero); // El número ha sido cambiado y ahora muestra un 20.