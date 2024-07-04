const num1 = -43;
const num2 = 16;
const num3 = -5;

let mayor = num1;

if(num1 > num2 && num1> num3){
    console.log(`El mayor número es num1: ${num1}`);
}else if(num1 < num2 && num2 > num3){
    mayor = num2;
    console.log(`El mayor número es num2: ${num2}`);
}else if(num1 < num3 && num2 < num3){
    mayor = num3;
    console.log(`El mayor número es num3: ${num3}`);
}

console.log(`El mayor número es: ${mayor}`);