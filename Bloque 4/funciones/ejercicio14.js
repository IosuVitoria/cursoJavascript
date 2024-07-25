function eliminarDuplicados(array){

    //Recoger el array entrante en una variable. Declarar y iniciar una nueva variable para el nuevo array sin duplicados.
    let arrayPorFiltrar = array;
    let filtrado = []; //Lo inicializo como array para después poder meter elementos dentro del mismo.

    //Recorrer el array. Condicionar con un if la adición del elemento al array filtrado usando includes.
    for(let i = 0; i < arrayPorFiltrar.length; i++){
        if(filtrado.includes(arrayPorFiltrar[i]) === false){
            filtrado.push(arrayPorFiltrar[i]);
        }
    }

    //Devolver array filtrado.
    return filtrado;

}

console.log(eliminarDuplicados([1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3]));

//Versión resumida usando set y new.

const eliminarDuplicados1 = (array) => {
    return [...new Set(array)];
}

console.log(eliminarDuplicados1([1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3]));