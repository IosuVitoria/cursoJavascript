//9.	Crea un objeto "empresa" con las propiedades nombre, ubicación, y un array empleados (un array de objetos con propiedades nombre y salario).
// Añade un método calcularSalarioTotal que calcule la suma de los salarios de todos los empleados.

const empresa = {
    nombre: "InfoVito",
    ubicacion: "Vitoria",
    empleados: [ 
        {
        nombre: "Jefe",
        salario: 35000
        },
        {
        nombre: "empleado1",
        salario: 25000
        },
        {
        nombre: "empleado2",
        salario: 25000
        },
    ],
    calcularSalariototal: function() {
        let total = 0;
        for(let i = 0; i < this.empleados.length; i++){
            total += this.empleados[i].salario;
        }
        console.log(`El salario total de todos es: ${total}`);
    }
}

empresa.calcularSalariototal();