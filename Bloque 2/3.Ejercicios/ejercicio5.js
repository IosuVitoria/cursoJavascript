// Muestra en un log los datos que hay en el json sobre el decano de la universidad de ciencias.

const data = require("./objeto.js");

const nombre = data.universidad.facultades[0].decano.nombre;
const edad = data.universidad.facultades[0].decano.edad;
const anios = data.universidad.facultades[0].decano.años_en_el_puesto;

console.log(`El decano de la universidad de ciencias es ${nombre}, tiene ${edad} años y lleva ${anios} años en el puesto.`);