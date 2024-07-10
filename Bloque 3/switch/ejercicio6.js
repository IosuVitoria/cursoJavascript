let transporte = "tren";
let precioPasaje;

switch(transporte){
    case "tren":
        precioPasaje = 8.0;
        break;
    case "bus":
        precioPasaje = 4.0;
        break;
    case "taxi":
        precioPasaje = 12.0;
        break;
    case "avion":
        precioPasaje = 24.0;
        break;
    default:
        precioPasaje = "Transporte no disponible."
}

console.log(`El billete de ${transporte} hasta Bilbao cuesta ${precioPasaje} euros.`)