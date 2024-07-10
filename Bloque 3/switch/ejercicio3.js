let diaSemana = 4;
let nombreDia;

switch (diaSemana) {
  case 0:
    nombreDia = "Domingo";
    break;
  case 1:
    nombreDia = "Lunes";
    break;
  case 2:
    nombreDia = "Martes";
    break;
  case 3:
    nombreDia = "Miércoles";
    break;
  case 4:
    nombreDia = "Jueves";
    break;
  case 5:
    nombreDia = "Viernes";
    break;
  case 6:
    nombreDia = "Sábado";
    break;
  default:
    nombreDia = "Día inválido";
}

console.log(nombreDia); 
