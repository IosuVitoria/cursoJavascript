function findInList (array, element){

    //Recojo en una variable el elemento que me entra en la función y el array en otro.
    let arrayObjetivo = array;
    let elementoBusqueda = element;

    //Inicio una tercera variable que arranco en false para saber si está o no esta.
    let isFound = false;

    //Realizo un for y comparo elemento por elemento del array con el que tengo almacenado. Si coincicide cambio la tercera variable a true.
    for (let i = 0; i < arrayObjetivo.length; i++){
        if(elementoBusqueda === arrayObjetivo[i]){
            isFound = true;
        }
    }

    //Devuelvo en mi return el resultado de la búsqueda.
    return isFound;

}

console.log(findInList([2, 3, 5, 3, "abogado", true, {clave01: "37"}], 5));
console.log(findInList([2, 3, 5, 3, "abogado", true, {clave01: "37"}], false));

//Para la versión más avanzada de la solución incluiré el método includes. Muy útil y bastante usado. Aquí documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes


const findInList1 = (array, element) =>{
    return array.includes(element);
}

console.log(findInList1([2, 3, 5, 3, "abogado", true, {clave01: "37"}], 5));
console.log(findInList1([2, 3, 5, 3, "abogado", true, {clave01: "37"}], false));