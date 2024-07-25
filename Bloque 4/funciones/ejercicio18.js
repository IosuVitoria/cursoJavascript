function romanoAEntero(romano) {

    //Declarar un objeto que permita guardar los equivalente de los números romanos con nuestro sistema.
    const valores = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    //Declarar una variable a la cual iremos sumando los números que vayamos determinando.
    let entero = 0;

    //Iterar sobre el número romano. Al ser un letras será tratado como un string.
    for (let i = 0; i < romano.length; i++) {
        
        //Revisar los valores por pares. Así podremos restar en caso de ser necesario.
        const actual = valores[romano[i]];
        const siguiente = valores[romano[i + 1]];

        if (siguiente && actual < siguiente) {
            entero -= actual;

            //ejemplo IX sería igual a -1 +10 en nuesta cuenta particular.
        } else {
            entero += actual;
        }
    }
    return entero;
}

console.log(romanoAEntero('MCMXCIV'));