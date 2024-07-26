let usuarios = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', edad: 28 },
    { id: 2, nombre: 'Ana', apellido: 'García', edad: 34 },
    { id: 3, nombre: 'Luis', apellido: 'Martínez', edad: 23 }
];

let datos = usuarios.map(usuario => `El usuario nº ${usuario.id} se llama ${usuario.nombre} ${usuario.apellido} y tiene `)