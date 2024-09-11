// Crea un objeto "carrito" con una propiedad productos (un array de objetos donde cada producto tiene propiedades nombre y precio). 
// Añade un método calcularTotal que calcule el costo total de los productos en el carrito.

const carrito = {
    productos: [
        {
            nombre: "Gambas",
            precio: 15
        },
        {
            nombre: "Lechuga",
            precio: 2
        },
        {
            nombre: "Naranjas",
            precio: 4
        }
    ],
    calcularTotal : function(){
        let total = 0;
        for(let i = 0; i < carrito.productos.length; i++){
            total += carrito.productos[i].precio;
        }
        console.log(`El total de lo gastado es de: ${total} €.`)
    }
}

carrito.calcularTotal();