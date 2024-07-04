const num1 = 3;
const num2 = 4;
const signo = "*";

if(signo === "+"){
    console.log(`El resultado de la suma es: ${num1 + num2}`);
}else if(signo === "-"){
    console.log(`El resultado de la resta es: ${num1 - num2}`);
}else if(signo === "*"){
    console.log(`El resultado de la multiplicación es: ${num1 * num2}`);
}else{
    console.log(`El resultado de la división es: ${num1 / num2}`);
}