// Elimina el último elemento del array superheroes y muestra el array resultante en la consola. Luego, elimina el primer elemento y muestra el array nuevamente.

let superheroes = ["Hulk", "Spiderman", "Thor", "Ironman", "Black Widow", "Hawkeye"];

// Elimina el primero de los elementos del array.
let elemento = superheroes.pop();
console.log("ELEMENTO FINAL: ", elemento);

// Elimina el segundo de los elementos del array.
let elemento2 = superheroes.shift();
console.log("ELEMENTO INICIAL: ", elemento2);

// Mostrar los elementos del array.
console.log(superheroes);