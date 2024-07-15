//2 maneras. 1 con pseudocódigo y extendido y otro sin el.

const parImpar = (num) => {
    //Declarar una variable para trabajar y llevar el num a ella.
    let numParImpar = num;
    //Valorar el número con un if-else. Si es par el resultado de num%2 ===0.
    if(numParImpar%2 === 0){
        return true;
    }
    //Devolver false si es impar.
    else{
        return false;
    }
}

console.log(`El número 45 es par: ${parImpar(45)}`);

//Manera simplificada. Usando operador ternario para simplificar código.

const parImpar2 = (num) =>{
    return num%2 === 0 ? true : false;
}

console.log(`El número 46 es par: ${parImpar2(46)}`);

