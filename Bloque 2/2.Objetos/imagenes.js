// Imagen 20: ejemplo de objeto.

let coche = {
    marca: "Subaru",
    modelo: "Impreza",
    color: "Azul",
    traccion: "Integral",
    lanzamientoInicial: 1992,
    arrancar: function (){
        console.log("El coche ha arrancado.");
    },
    girar: function(){
        console.log("El coche ha girado.")
    },
    frenar: function(){
        console.log("El coche ha frenado.")
    }
}

console.log(coche);

//Imagen 21: Ejemplo de objeto II. Acceso a propiedades.

let coche2 = {
    marca: "Subaru",
    modelo: "Impreza",
    color: "Azul",
    kilometros: 0,
    lanzamientoInicial: 1992,
    mover: function (){
        coche2.kilometros++
        console.log("El coche se ha movido un km.");
    },
    frenar: function(){
        console.log("El coche ha frenado.");
    }
}

console.log(coche2.color);
//Antes del método.
console.log("ANTES: ",coche2.kilometros);
coche2.mover();
//Después del método.
console.log("DESPUÉS: ", coche2.kilometros);

//Imagen 23: Ejemplo de agregar nueva propiedad y nuevo método.

let coche3 = {
    marca: "Subaru",
    modelo: "Impreza",
    color: "Azul",
    kilometros: 0,
    lanzamientoInicial: 1992,
    mover: function (){
        coche2.kilometros++
        console.log("El coche se ha movido un km.");
    },
    frenar: function(){
        console.log("El coche ha frenado.");
    }
}

coche3.pais = "Japón";
coche3.moverDoble = function(){
    coche3.kilometros+=2;
    console.log("El coche se ha movido dos kilómetros.")
}

//Prueba método.
console.log("Antes: ",coche3.kilometros);
coche3.moverDoble();
console.log("Después: ",coche3.kilometros);

//Imagen 25: Ejemplo de objeto anidado.

let persona = {
    datos_personales: {
        nombrePila: "Luis",
        apellidos: "Betolaza Sotogrande",
        edad: 44,
        contacto: 666777888,
        email: "luisBetoSoto@gmail.com"
    },
    datos_contacto:{
        calle: "Plaza de la Concordia Nº 5 3E",
        cp: "01008",
        ciudad: "vitoria_gasteiz"
    },
    aficciones: ["leer", "correr", "pintar"],
    saludar: function(){
        console.log(`Hola soy ${this.datos_personales.nombrePila}!`);
    }
}

console.log(persona);
persona.saludar();
console.log(`Hola mi aficción preferida es ${persona.aficciones[0]}.`);


//Imagen 26: comparación de objetos.

let objeto = {nombre: "Jose"};
let objeto2 = {nombre: "Jose"};

console.log("COMPARACIÓN OBJETO === OBJETO2: ", objeto === objeto2); // Respuesta por consola: false.
//Los objetos están en dos referencias de memorias diferentes y por lo tanto no son lo mismo.

let objeto3 = objeto;

console.log("COMPARACIÓN OBJETO3 === OBJETO: ", objeto3 === objeto); // Respuesta por consola: true.
// El objeto y objeto3 apuntan a la misma referencia en memoria y por lo tanto son lo mismo.

//Imagen 27: Alterando objetos con la misma asignación en memoria.

let objeto4 = {nombre: "Iosu"};
let objeto5 = objeto4;

objeto5.nombre = "Alberto";

console.log("OBJETO 4: ", objeto4.nombre);
console.log("OBJETO 5: ", objeto5.nombre);

//Imagen 29: Spread operator

let asignaturas = ["programacion", "formación y orientación laboral", "inglés técnico"];

let asignaturas2 = [...asignaturas, "bases de datos"];

console.log("asginaturas2: ", asignaturas2);

// Imagen 31 : Operador Spread con objetos. Cuidado con las referencias...

let persona2 = {
    nombre: "Jon",
    apellidos: "López Valdecantos",
    direccion:{
        calle: "Plaza porticada",
        numero: 10,
        cp: "01009",
        ciudad: "Vitoria"
    }
}

console.log("PERSONA2 ANTES: ", persona2.direccion.calle);
let persona3 = {...persona2};
persona3.direccion.ciudad = "Bilbao";

//Al ser copias de referencia si imprimo por consola la ciudad de persona 2 y 3 tendrás la misma.

console.log("PERSONA2 DESPUÉS: ", persona2.direccion.ciudad);
console.log("PERSONA3: ", persona3.direccion.ciudad);