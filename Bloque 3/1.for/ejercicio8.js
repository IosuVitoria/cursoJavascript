const numeros = [23, 5, 76, 12, 34, 89, 3];
let maximo = numeros[0];
let minimo = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maximo) {
    maximo = numeros[i];
  } else if (numeros[i] < minimo) {
    minimo = numeros[i];
  }
}

console.log('El número máximo es:', maximo);
console.log('El número mínimo es:', minimo);