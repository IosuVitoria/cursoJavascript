// 2.	Añade un método llamado presentarse al objeto "persona" del ejercicio anterior, que imprima un mensaje como "Hola, me llamo [nombre] y soy [profesión]". Llama a este método.

const persona = {
    nombre: "Iosu",
    edad: 38,
    profesion: "programador",
    saludo : function(){
        console.log(`Hola, me llamo ${persona.nombre} y soy ${persona.profesion}`);
    }
}

persona.saludo();