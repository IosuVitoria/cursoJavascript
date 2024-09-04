const numeros = [3, 4, 6, 89, 12];

const mayor = numeros.reduce((max, numero) => (numero > max ? numero: max), numeros[0])

console.log(mayor)