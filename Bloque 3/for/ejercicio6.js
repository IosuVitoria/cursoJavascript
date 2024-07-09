const cadenas = ['radar', 'hello', 'level', 'world', 'civic'];

for (let i = 0; i < cadenas.length; i++) {
  let cadena = cadenas[i];
  let cadenaInvertida = '';
  
  for (let j = cadena.length - 1; j >= 0; j--) {
    cadenaInvertida += cadena[j];
  }

  if (cadena === cadenaInvertida) {
    console.log(`${cadena} es un palíndromo.`);
  } else {
    console.log(`${cadena} no es un palíndromo.`);
  }
}
