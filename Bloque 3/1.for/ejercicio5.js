const numeros = [-5, 3, 8, -1, 7, -2, 4];
let resultado = 0;

for(let i = 0; i < numeros.length; i++){
    if(numeros[i]>0){
        resultado+=numeros[i];
    }
    // console.log(numeros[i]); Para mostrar iteración.
}

console.log(`El resultado final de la suma es: ${resultado}`);