let calificacion = 85;
let letraCalificacion;

switch (true) {
  case (calificacion >= 90):
    letraCalificacion = "A";
    break;
  case (calificacion >= 80):
    letraCalificacion = "B";
    break;
  case (calificacion >= 70):
    letraCalificacion = "C";
    break;
  case (calificacion >= 60):
    letraCalificacion = "D";
    break;
  default:
    letraCalificacion = "F";
}

console.log(letraCalificacion); 