// Explicando variables. Imagen 3.

console.log(nombre);
var nombre = "Carlos";
console.log(nombre);

//Imagen 4 problemas con var.

if(true){
    var x = 10;
}
console.log(x)

//Imagen 5 ejemplo de variable con let. 

let nombre2 = "Iosu";
console.log("Mi nombre es ",nombre2);

//Imagen 6. error con let.

function saludo(){
    console.log(nombre3);
    let nombre3 = "Pedro";
    console.log
}

//Imagen 7. Const y posibles problemas que puedan pasar.

const pi = 3.141592;

// Una reasignación como está no es posible y va a generar errores.
// El sistema node nos ofrecerá por consola un error del siguiente tipo: 
// TypeError: Assignment to constant variable.

// pi = 3.1416;

const persona = {
    nombre: 'Iosu',
    edad: 38,
    profesion: 'programador'
}

console.log("PREASIGNACIÓN: ", persona.profesion);

//La reasignación de objetos es posible. 

persona.profesion = 'full stack developer'

console.log("POSTASIGNACIÓN: ", persona.profesion)