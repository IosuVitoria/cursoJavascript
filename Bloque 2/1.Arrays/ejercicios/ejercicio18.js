// Crea un array llamado edades que contenga varias edades. Usa el método filter para crear un nuevo array que solo contenga las edades mayores de 18 años.
// Muestra el array filtrado en la consola.

let edades = [2, 18, 17, 35, 38, 55, 66];

let edadesFiltradas = edades.filter((edad) => {
    return edad > 18;
});

console.log(edadesFiltradas);