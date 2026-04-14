class Persona {
    //nombre,direccion,edad, telefono.....
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    info() {
        return `Nombre:${this.nombre}, Edad: ${this.edad}`;
    }
}
document.getElementById("clase").addEventListener("click", () => {
    const persona = new Persona("Ana", 25);
    document.getElementById("resultado").innerText = persona.info();

});




