const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

function preguntarAdivinanza() {
    rl.question('Adivina el número (entre 1 y 100): ', (respuesta) => {
        const suposicion = parseInt(respuesta);

        if (isNaN(suposicion)) {
            console.log('Por favor, ingresa un número válido.');
            preguntarAdivinanza();
        } else if (suposicion < numeroSecreto) {
            console.log('Demasiado bajo.');
            preguntarAdivinanza();
        } else if (suposicion > numeroSecreto) {
            console.log('Demasiado alto.');
            preguntarAdivinanza();
        } else {
            console.log('¡Correcto! Has adivinado el número.');
            rl.close();
        }
    });
}

preguntarAdivinanza();
