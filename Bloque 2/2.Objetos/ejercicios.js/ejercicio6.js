// Crea un objeto "rectángulo" con las propiedades ancho y alto. Añade un método llamado area que calcule y retorne el área del rectángulo (ancho * alto).

const rectángulo = {
    ancho: 34,
    alto: 12,
    area: function(){
        console.log(`El área del rectángulo es: ${rectángulo.alto * rectángulo.ancho}.`);
    }
}

rectángulo.area();