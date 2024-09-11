// Crea un objeto "curso" con las propiedades nombreCurso, alumnos (un array de objetos donde cada objeto tiene nombre y nota).
//  Añade un método obtenerAprobados que retorne un array con los nombres de los alumnos cuya nota es mayor o igual a 5.

const curso = {
    nombreCurso: "Matemáticas Avanzadas",
    alumnos: [
        { nombre: "Eneritz", nota: 7 },
        { nombre: "Carlos", nota: 4 },
        { nombre: "Laura", nota: 6 },
        { nombre: "Iosu", nota: 3 }
    ],
    
    obtenerAprobados: function() {
        const aprobados = this.alumnos
            .filter(alumno => alumno.nota >= 5)
            .map(alumno => alumno.nombre);
        return aprobados;
    }
};

console.log("Alumnos aprobados:", curso.obtenerAprobados());
