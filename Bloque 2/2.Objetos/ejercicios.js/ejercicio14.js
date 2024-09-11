// Crea un objeto "biblioteca" que tenga una propiedad libros (un array de objetos con propiedades título, autor, y disponible). 
// Añade un método prestarLibro que marque un libro como no disponible si está prestado.

const biblioteca = {
    libros: [
        { titulo: "El Quijote", autor: "Miguel de Cervantes", disponible: true },
        { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", disponible: true },
        { titulo: "1984", autor: "George Orwell", disponible: true }
    ],
    
    prestarLibro: function(titulo) {
        const libro = this.libros.find(libro => libro.titulo === titulo);
        if (libro && libro.disponible) {
            libro.disponible = false;
            console.log(`El libro "${titulo}" ha sido prestado.`);
        } else {
            console.log(`El libro "${titulo}" no está disponible.`);
        }
    }
};


console.log("Estado de la biblioteca antes de prestar:", biblioteca.libros);
biblioteca.prestarLibro("1984");
console.log("Estado de la biblioteca después de prestar:", biblioteca.libros);
