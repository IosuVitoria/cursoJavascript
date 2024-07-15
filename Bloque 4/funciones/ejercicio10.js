//Un número es primo cuando sólo es divisible por si mismo y por uno.
const esPrimo = n => {
    //Los números 1 y 0 no son considerados primos.
    if (n <= 1) {
        return false;
    }else{
        //Basta con ir haciendo divisiones recursivas si alguna es de modulo 0, el número no será primo y la condición pasa a false..
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false
            };
        }
        return true;
    }
   
}

console.log(esPrimo(2));  
console.log(esPrimo(4));  
console.log(esPrimo(7));  
console.log(esPrimo(10));

//Versión compacta del código: 
const esPrimo2 = n => n > 1 && Array.from({length: n - 2}, (_, i) => i + 2).every(i => n % i !== 0);

console.log(esPrimo2(89));
console.log(esPrimo2(125));
console.log(esPrimo2(131));
console.log(esPrimo2(143));
