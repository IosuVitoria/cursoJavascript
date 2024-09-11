//  Crea un objeto "coche" con las propiedades marca, modelo, y año. Añade un método detalles que imprima la descripción del coche en una sola línea.

const coche = {
    marca : "Seat",
    modelo : "Ibiza",
    año : 2004,
    detalles: function() {
        console.log(`El coche es un ${coche.marca} ${coche.modelo} del 2004.`);
    }
};


coche.detalles();