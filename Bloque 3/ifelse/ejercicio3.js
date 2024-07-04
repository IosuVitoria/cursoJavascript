const precio = 150;

let descuento;

if(precio>100){
    descuento = 0.1;
}else{
    descuento = 0;
}

let precioFinal = precio * (1-descuento);

console.log(`Este es el primer precio final: ${precioFinal}$`);


const precio2 = 90;

let descuento2;

if(precio2>100){
    descuento2 = 10;
}else{
    descuento2 = 0;
}

let precioFinal2 = precio2 * (1-descuento2);

console.log(`Este es el segundo precio final: ${precioFinal2}$`);