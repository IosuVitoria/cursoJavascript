const conversor = (temp) => {
    //Recoger temperatura.
    let tempConvertir = temp;
    //Aplicar factor de conversión de Celsisus a Fahrenheit a una nueva variable.
    let tempFinal = tempConvertir * (9/5) + 32;
    //Devolver para trabajar con ella.
    return tempFinal;
}

console.log(`El otro día en las Vegas(Nevada) hubo ${conversor(48)}ºF.`);

const conversor2 = (temp) => {
    return temp * (9/5) + 32;
}

console.log(`El otro día en las Vegas(Nevada) hubo ${conversor2(35)}ºF.`);