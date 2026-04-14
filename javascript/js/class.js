

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
            //toLowerCase me transforma el texto en minúsculas
            //toUpperCase me transforma el texto en Mayúsculas

            return `Nombre:${this.nombre.toLowerCase()},
        Correo: ${this.correo.toUpperCase()},
        password: ${this.password},
        Edad: ${this.edad}`;
        }

        esMayorEdad(){
            return this.edad>=18 ?  'Es Mayor de edad' : 'Es menor de edad' //Operador ternario, o un if corto
        }
    }





document.getElementById("clase").addEventListener("click", () => {
    const nombre = inputNombre.value.trim(); //Capturamos los datos del input y eliminamos espacios con trim()
    const correo = inputCorreo.value.trim();
    const password = inputPassword.value.trim();
    const edad = inputEdad.value.trim();

    if (nombre === "" || correo === "" || password === "" || edad === "") {
        resultado.innerText = "Todos los campos son  obligatorio";
        resultado.style.color = "red";
        console.log("Línea antes del return");
        return;
        console.log("Codigo despues del return"); //Esta linea no se ejecuta porque el return hace que se salga de la función
    }

    //Crear objeto usando la clase
    const persona= new Persona(nombre,correo,password,edad);
    // Mostrar información
    
    resultado.innerText=persona.info();

    //resultado.innerText=persona.esMayorEdad();

    //LIMPIAMOS LOS inputs 

    inputNombre.value="";
    inputCorreo.value="";
    inputPassword.value="";
    inputEdad.value="";



    // const persona = new Persona("Ana", 25);
    // document.getElementById("resultado").innerText = persona.info();

});



})




