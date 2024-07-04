const letra = 'a';

// Convertimos la letra a minúscula para evitar problemas con mayúsculas
const letraMinuscula = letra.toLowerCase();

const vocales = ['a', 'e', 'i', 'o', 'u'];

if (vocales.includes(letraMinuscula)) {
    console.log(`${letra} es una vocal.`);
} else {
    console.log(`${letra} es una consonante.`);
}