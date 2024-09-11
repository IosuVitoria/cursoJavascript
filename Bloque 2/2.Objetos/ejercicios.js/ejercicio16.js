// Crea un objeto "juego" con una propiedad jugadores (un array de objetos con nombre y puntuacion). Añade un método aumentarpuntuacion que reciba el nombre de un jugador y un puntuacion a sumar. 
// Muestra los puntuacions actualizados después de usar el método.

const juego = {
    jugadores: [
        { nombre: "Juan", puntuacion: 10 },
        { nombre: "María", puntuacion: 15 },
        { nombre: "Pedro", puntuacion: 8 }
    ],
    aumentarPuntuacion: function(nombre, puntos) {
        const jugador = this.jugadores.find(jugador => jugador.nombre === nombre);
        if (jugador) {
            jugador.puntuacion += puntos;
            console.log(`El puntuación de ${nombre} ha sido incrementado en ${puntos}. Nuevo puntuacion: ${jugador.puntuacion}`);
        } else {
            console.log(`El jugador ${nombre} no fue encontrado.`);
        }
    }
};


console.log("puntuaciones antes:", juego.jugadores);
juego.aumentarPuntuacion("Juan", 5);
console.log("puntuaciones después:", juego.jugadores);