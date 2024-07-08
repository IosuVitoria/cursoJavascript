let cont = 1;

while(cont <= 100){
    if(cont%3 == 0 && cont%5 == 0){
        console.log("FizzBuzz");
    }else if(cont%5 == 0){
        console.log("Buzz");
    }else if(cont%3 == 0){
        console.log("Fizz");
    }else{
        console.log(cont);
    }
    cont++
}