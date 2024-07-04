let precio = 9;
let edad = 65;
let descuento = 0;

if(edad >= 0 & edad <= 12){
    descuento = 0.5;
    precio = precio * (1 - descuento);
    console.log(`Precio final niño: ${precio}`);
}else if(edad >= 13 & edad <= 64){
    precio = precio * (1 - descuento);
    console.log(`Precio final adulto: ${precio}`);
}else{
    descuento = 0.3;
    precio = precio * (1 - descuento);
    console.log(`Precio final senior: ${precio}`);
}

