for (let i = 1; i <= 30; i++) {
    let esPrimo = true;
  
    if (i === 1) {
      esPrimo = false; 
    } else {
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          esPrimo = false;
          break;
        }
      }
    }
  
    if (esPrimo) {
      console.log(`${i} es un número primo.`);
    } else {
      console.log(`${i} no es un número primo.`);
    }
}