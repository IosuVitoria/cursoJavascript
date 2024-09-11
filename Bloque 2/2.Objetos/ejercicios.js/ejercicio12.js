// Crea un objeto "cuentaBancaria" con propiedades titular y saldo. Añade métodos depositar y retirar que modifiquen el saldo, e imprime el saldo después de cada operación.

const cuentaBancaria = {
    titular: "Juan Carlos López",
    saldo: 350000,
    depositar: function(depposito){
        console.log(`El saldo antes del depósito era de: ${this.saldo}.`);
        this.saldo += depposito;
        console.log(`El saldo después del depósito era de: ${this.saldo}.`);
    },
    retirar: function(necesidad){
        console.log(`El saldo antes de la retirada era de: ${this.saldo}.`);
        this.saldo -= necesidad;
        console.log(`El saldo después de la retirada era de: ${this.saldo}.`);
    },
}

cuentaBancaria.depositar(35000);
cuentaBancaria.retirar(35000);