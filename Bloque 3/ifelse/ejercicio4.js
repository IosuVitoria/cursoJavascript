const edad = 25;


if (edad >= 0 && edad <= 12){
    console.log("Eres un niño.");
}else if(edad >= 13 && edad <= 19){
    console.log("Eres un adolescente.");
}else if (edad >= 20 && edad <= 64){
    console.log("Eres un adulto.");
}else{
    console.log("Eres un anciano.")
}