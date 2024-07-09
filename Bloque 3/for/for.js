// El bucle for en JavaScript es una de las estructuras de control de flujo más versátiles y 
// comunes para iterar sobre bloques de código.

// 1. Bucle for Básico


// for (inicialización; condición; incremento) {
//   // Bloque de código
// }

// Inicialización: Se ejecuta una sola vez al comienzo del bucle.
//  Aquí se establece una variable de control del bucle.
// Condición: Se evalúa antes de cada iteración del bucle. 
// Si es true, el bucle continúa; si es false, el bucle termina.
// Incremento: Se ejecuta al final de cada iteración. 
// Normalmente se usa para actualizar la variable de control del bucle. TAmbién se pueden restar unidades al contador dentro del for.

//Ejemplo sumando
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//Ejemplo restando
for (let i = 10; i > 0; i--) {
    console.log(i);
}


//Es muy común verlo combinado con ifs y elses.
for(let i = 0; i <= 10; i++){
    if(i%2 === 0){
        console.log(i); //para imprimir números pares del 1 al 10.
    }
}

//También podemos cortar un bucle usando un break.
for(let i = 0; i <= 10; i++){
    if(i=== 8){
        break; //para el bucle de ejecución cuando i = 8.
    }
}

//Usando continue podemos saltar una situación dentro del bucle.
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      continue;
    }
    console.log(i);
}

// Esto viene a dar de salida: 1, 2, 4, 5 (omite el 3).

//Se puede usar con arrays:
const frutas = ['manzana', 'banana', 'cereza'];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// Se puede usar la estructura for in para recorrer todas las propiedades ennumerables en objeto.

const persona = { nombre: 'Juan', edad: 30, ciudad: 'Madrid' };

for (let clave in persona) {
  console.log(clave + ': ' + persona[clave]);
}

//Y tenemos el for of también para recorrer todos los valores de un array.
const colores = ['rojo', 'verde', 'azul'];

for (const color of colores) {
  console.log(color);
}

//Estos son los usos más comunes de for.