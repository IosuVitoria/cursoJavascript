// Crea un objeto "libro" con las propiedades título, autor, y añoPublicación. Añade una nueva propiedad editorial después de haber creado el objeto. Imprime el objeto completo en la consola.

const libro = {
    titulo: "El señor de los Anillos",
    autor: "J. R. Tolkien",
    añoPublicación: 1942
}

console.log("OBJETO ANTES: ", libro);

libro.editorial = "Alfaguara";

console.log("OBJETO DESPUÉS: ", libro);