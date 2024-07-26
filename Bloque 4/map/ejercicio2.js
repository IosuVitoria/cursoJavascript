let personas = [
    {nombre: "Juan", edad: 25},
    {nombre: "Ana", edad: 30},
    {nombre: "Luis", edad: 35}
];


function conversionCadena(array){

    let cadenasFormateadas = array.map((persona) => `${persona.nombre} (${persona.edad} años)`)

    return cadenasFormateadas
}

console.log(conversionCadena(personas));