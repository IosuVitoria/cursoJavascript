const secuencia = "AAATTTGGCCAATTTGGCCCAATTATATATATATA";
const conteo = {"A": 0, "T":0, "C": 0, "G":0};

for(let i=0; i < secuencia.length; i++){
    if(secuencia[i] == "A"){
        conteo.A+=1;
    }else if(secuencia[i] == "T"){
        conteo.T+=1;
    }else if(secuencia[i] == "C"){
        conteo.C+=1;
    }else {
        conteo.G+=1;
    }
}

for(clave in conteo){
    console.log(`Hay tantos nucleótidos de ${clave}: ${conteo[clave]}`)
}