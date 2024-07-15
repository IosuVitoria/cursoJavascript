const area = (r) => {
    //Declaro una variable para guardar el radio.
    let radio = r;
    //Hago el cálculo. Area = PI x R2 (cuadrado)
    // let area = Math.PI * Math.pow(radio, 2);
    let area = (Math.PI * Math.pow(radio, 2)).toFixed(2);
    //Devuelvo el resultado.
    return area;
}

console.log(`El area de un cículo de 50 cm de radio es: ${area(50)} cm2`);

//Existe un método que es toFixed(2) --> Podemos ajustar los decimales a 2, 3, etc... Los que se deseen.
//El area comentada NO LLEVA EL AJUSTE. El área sin comentar si que lo lleva y se puede ver el resultado con una cantidad controlada de decimales.


const area2 = (r) => {
    return (Math.PI * Math.pow(r, 2)).toFixed(2);
}


console.log(`El area de un cículo de 50 cm de radio es: ${area2(50)} cm2`);