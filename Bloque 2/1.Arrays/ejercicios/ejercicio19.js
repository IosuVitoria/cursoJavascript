// Crea un array llamado precios con 5 números. Usa el método map para crear un nuevo array que contenga el doble de cada precio original. Muestra el nuevo array en la consola.

let numeros = [1, 2, 3, 4, 5];

let nuevoArray = numeros.map((numero) => {return numero*2});

console.log(nuevoArray);