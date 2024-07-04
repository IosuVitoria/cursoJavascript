//Control de flujo de código. if-else else if

// if (solo)

// La estructura if evalúa una condición y, si es verdadera, ejecuta el bloque de código dentro de las llaves {}.

const x = 5;

if (x===5) {
    console.log("Mensaje");
}

// if-else

// La estructura if-else proporciona una alternativa en caso de que la condición sea falsa.

if (x===5) {
    console.log("Mensaje");
    // Bloque de código a ejecutar si la condición es verdadera
} else {
    console.log("Mensaje2");
    // Bloque de código a ejecutar si la condición es falsa
}



// if-else else if

// Permite evaluar múltiples condiciones en secuencia.

const b = 6;

if (x === 5) {
    console.log("Mensaje3");
    // Bloque de código a ejecutar si la condición1 es verdadera
} else if (x === 6 ) {
    console.log("Mensaje4");
    // Bloque de código a ejecutar si la condición2 es verdadera
} else {
    console.log("Mensaje5");
    // Bloque de código a ejecutar si ninguna de las condiciones anteriores es verdadera
}