const persona={
    nombre : "Iosu",
    edad: 38,
    ciudad: "Vitoria",
    aficiones:[
        "correr",
        "programar",
        "cocinar", 
        "viajar"
    ],
    estudios:{
        estudio1: {
            id: 1,
            nombre: "Máster biología molecular y biomedicina"
        },
        estudio2:{
            id:2,
            nombre: "Licenciado en biología"
        }
    }
}

// a) Imprimir el nombre de la persona:

console.log(persona.nombre);

// b) Agregar una nueva afición:

persona.aficiones.push("leer");
console.log(persona.aficiones); 

// c) Cambiar la ciudad a "Bilbao":

persona.ciudad = "Bilbao";
console.log(persona.ciudad); 

// d) Eliminar la afición "correr":

const index = persona.aficiones.indexOf("correr");
if (index !== -1) {
    persona.aficiones.splice(index, 1);
}
console.log(persona.aficiones); 


// e) Agregar un nuevo estudio:

persona.estudios.estudio3 = {
    id: 3,
    nombre: "Doctorado en Genética"
};
console.log(persona.estudios);

// f) Obtener el número total de aficiones:

const totalAficiones = persona.aficiones.length;
console.log(totalAficiones); 