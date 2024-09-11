// Crea un objeto "alumno" que tenga una propiedad notas (un array de números). Añade un método calcularPromedio que calcule y retorne el promedio de las notas.

const alumno = {
    nombre: "Isabel",
    notas: [5, 6, 7, 8, 7, 8, 8, 8],
    calcularPromedio: function() {
        let total = 0;
        for (let i = 0; i < this.notas.length; i++){
            total += this.notas[i];
        }
        console.log(`La nota media de la alumna: ${alumno.nombre} es de: ${total/this.notas.length}`);
    }
}

alumno.calcularPromedio();