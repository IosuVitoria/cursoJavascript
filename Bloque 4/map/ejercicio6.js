let productos = [
    { id: 1, nombre: 'Laptop', precio: 1000 },
    { id: 2, nombre: 'Teléfono', precio: 500 },
    { id: 3, nombre: 'Tablet', precio: 300 }
];

let productosNombre = productos.map(producto => producto.nombre.toUpperCase());

console.log(productosNombre)