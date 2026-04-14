

//Espera a que el HTML esté cargado o se haya completado de descargar

const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");
const inputPassword = document.getElementById("password");
const inputEdad = document.getElementById("edad");
const resultado = document.getElementById("resultado");

document.addEventListener("DOMContentLoaded", function () {
    console.log("HTML Cargado");

    class Persona {
        //nombre,direccion,edad, telefono.....
        constructor(nombre, correo, password, edad) {
            this.nombre = nombre;
            this.correo = correo;
            this.password = password;
            this.edad = edad;
        }
        info() {
            return `Nombre:${this.nombre},
        Correo: ${this.correo},
        password: ${this.password},
        Edad: ${this.edad}`;
        }
    }






})


document.getElementById("clase").addEventListener("click", () => {
    const nombre = inputNombre.value.trim();
    const correo = inputCorreo.value.trim();
    const password = inputPassword.value.trim();
    const edad = inputEdad.value.trim();

    if (nombre === "" || correo === "" || password === "" || edad === "") {
        resultado.innerText = "Todos los campos son  obligatorio";
        resultado.style.color = "red";
        return;
    }

    //Crear objeto usando la clase
    const persona= new Persona(nombre,correo,password,edad);
    // Mostrar información
    resultado.innerText=persona.info();



    // const persona = new Persona("Ana", 25);
    // document.getElementById("resultado").innerText = persona.info();

});




