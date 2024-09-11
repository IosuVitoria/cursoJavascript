// Crea un objeto "punto" con las propiedades x y y. Añade un método mover que permita cambiar las coordenadas x y y. Imprime el objeto antes y después de moverlo.

const punto = {
    x: 17,
    y: 25,
    mover: function(){
        console.log(`ANTES - X : ${this.x}, Y: ${this.y}.`);
        this.x = 18;
        this.y = 26;
        console.log(`DESPUÉS - X : ${this.x}, Y: ${this.y}.`);
    }
}

punto.mover();