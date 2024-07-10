let idioma = 'fr';
let saludo;

switch (idioma) {
  case 'en':
    saludo = "Hello!";
    break;
  case 'es':
    saludo = "¡Hola!";
    break;
  case 'fr':
    saludo = "Bonjour!";
    break;
  case 'eu':
    saludo = "Kaixo!";
    break;
  default:
    saludo = "Idioma no soportado";
}

console.log(saludo);