
function orderList(array){

    //Crear una nueva variable para alojar la nueva lista que se cree.
    let arrayOrdenado = []; //Lo inicializo en vacío.

    //Usar sort para ordenar la lista. Documentación oficial: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort.
    arrayOrdenado = array.sort();

    //Devolver la lista ordenada con un return.
    return arrayOrdenado;

}

console.log(orderList([4,3,1,2,5,2,3,4]));


//Opcion resumida.

const orderList1 = (array) => {
    return array.sort();
}

console.log(orderList1([4,3,1,2,5,2,3,4]));