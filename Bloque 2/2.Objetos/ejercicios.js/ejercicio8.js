// Crea un objeto "agenda" que tenga una propiedad contactos (un array de objetos, donde cada objeto tiene propiedades nombre y teléfono). Añade un método agregarContacto para añadir nuevos contactos a la agenda.

const agenda = {
    contactos: [
        {
            nombre: "Luis",
            telefono: 654897231
        },
        {
            nombre: "Marta",
            telefono: 658947123
        }
    ],
    agregarContacto : function(){
        let contactoAdd = {
            nombre: "Paco",
            telefono: 641258357
        } 
         
        this.contactos.push(contactoAdd);

        console.log("Después de la ejecución: ", this.contactos);
    }
}

console.log("Antes de la ejecución: ", agenda.contactos);

agenda.agregarContacto();