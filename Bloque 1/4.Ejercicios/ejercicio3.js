// Convierte la variable edad a una cadena y asígnala a una nueva variable llamada edadCadena.
// Convierte la variable esEstudiante a una cadena y asígnala a una nueva variable llamada esEstudianteCadena.
// Haz un log de cada variable para mostrar el cambio del tipo de la misma.

let edad = 27;
let edadCadena = String(edad);

let esEstudiante = true;
let esEstudianteCadena = esEstudiante.toString();

console.log(edadCadena, typeof(edadCadena));
console.log(esEstudianteCadena, typeof(esEstudianteCadena))