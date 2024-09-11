const data = [
    {
        id: 1,
        name: "Josu",
        age: 28,
        hobbies: ["Leer", "Correr", "Programar"],
        address: {
            city: "Vitoria",
            zip: "01008"
        },
        scores: [85, 92, 78]
    },
    {
        id: 2,
        name: "Vero",
        age: 34,
        hobbies: ["Nadar", "Bicicleta"],
        address: {
            city: "Bilbao",
            zip: "49020"
        },
        scores: [88, 76, 90]
    },
    {
        id: 3,
        name: "Aiur",
        age: 22,
        hobbies: ["Jugar", "Animales", "Tractores"],
        address: {
            city: "Lagrán",
            zip: "01800"
        },
        scores: [95, 80, 85]
    },
    {
        id: 4,
        name: "Julen",
        age: 30,
        hobbies: ["Cocinar", "Viajar"],
        address: {
            city: "Lagrán",
            zip: "01800"
        },
        scores: [70, 75, 80]
    }
];


//a) Imprime todos los nombres del array.

//Forma con exceso de código. Accediendo a cada elemento.

console.log(data[0].name);
console.log(data[1].name);
console.log(data[2].name);
console.log(data[3].name);

//NO ES OPERATIVO Y CORRES RIESGO DE DEJARTE ELEMENTOS.
//USAR FOR EACH
console.log(data.forEach(persona => console.log(persona.name)));

// b) Crear un nuevo array que contenga sólo los nombres.
const names = data.map(persona => persona.name);
console.log(`Array de nombres: ${names}`, typeof(names));

// c) Filtrar a las personas mayores de 30 años.
const mayoresDe30 = data.filter(persona => persona.age>=30);
console.log(mayoresDe30);

// d) Encontrar a la persona con el id = 3.
const personaConId3 = data.find(person => person.id === 3);
console.log(personaConId3);

// e) Calcular la edad media de todas las personas.
const edadMedia = data.reduce((sum, person) => sum + person.age, 0) / data.length;
console.log(edadMedia);