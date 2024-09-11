// Crea un objeto "parque" que tenga las propiedades nombre, ubicación, y un array de zonas (un array de objetos donde cada zona tiene nombre y capacidad).
//  Añade un método mostrarZonas que imprima el nombre y capacidad de cada zona del parque.

const parque = {
    nombre: "Parque Central",
    ubicacion: "Centro de la ciudad",
    zonas: [
        { nombre: "Juegos infantiles", capacidad: 50 },
        { nombre: "Zona de picnic", capacidad: 30 },
        { nombre: "Cancha de fútbol", capacidad: 20 }
    ],
    
    mostrarZonas: function() {
        console.log(`Zonas del parque "${this.nombre}" en ${this.ubicacion}:`);
        this.zonas.forEach(zona => {
            console.log(`${zona.nombre} - Capacidad: ${zona.capacidad} personas`);
        });
    }
};

parque.mostrarZonas();
