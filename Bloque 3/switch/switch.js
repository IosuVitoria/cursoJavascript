// El switch es una estructura de control que permite evaluar una expresión y 
// ejecutar diferentes bloques de código en función del valor de esa expresión. 
// Es una alternativa más organizada a una serie de sentencias if...else if...else.


switch (expresión) {
  case valor1:
    // Bloque de código para el caso valor1
    break;
  case valor2:
    // Bloque de código para el caso valor2
    break;
  // Puedes tener tantos casos como necesites
  default:
    // Bloque de código si ninguno de los casos coincide
}

// Elementos

// Expresión: Es evaluada una vez y su resultado se compara con los valores de cada caso.
// Case valor: Si la expresión coincide con el valor, se ejecuta el bloque de código asociado a ese caso.
// break: Termina la ejecución del switch y evita que se ejecuten los casos posteriores. Si se omite, se continuará ejecutando el siguiente caso hasta encontrar un break.
// default: (opcional) Se ejecuta si ninguno de los casos coincide.