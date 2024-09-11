// Crea un objeto "familia" que tenga una propiedad miembros (un array de objetos donde cada objeto tiene las propiedades nombre, edad, y relación). 
// Añade un método añadirMiembro que permita agregar nuevos miembros a la familia.

const familia = {
    miembros: [
        { nombre: "Carlos", edad: 40, relacion: "Padre" },
        { nombre: "Ana", edad: 38, relacion: "Madre" },
        { nombre: "Luis", edad: 18, relacion: "Hijo" }
    ],
    
    añadirMiembro: function(nombre, edad, relacion) {
        this.miembros.push({ nombre, edad, relacion });
        console.log(`${nombre} ha sido añadido a la familia.`);
    }
};

console.log("Miembros actuales de la familia:", familia.miembros);
familia.añadirMiembro("Lucía", 10, "Hija");
console.log("Miembros actualizados:", familia.miembros);
