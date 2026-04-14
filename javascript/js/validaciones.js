//e.preventDefault 
console.log("Validaciones cargadas...");
const form = document.getElementById("formulario");
const inputnombre = document.getElementById("nombre");
const passswordInput= document.getElementById("password");
const contadorPassword=document.getElementById("contadorPassword");
const maxPassword=12;



form.addEventListener("submit", function (e) {
    e.preventDefault();


    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;
    const edad = document.getElementById("edad").value;
    const mensaje = document.getElementById("mensaje");

    if (nombre.trim() == "" || correo == "" || password == "" || edad == "") {
        mensaje.innerText = "Todos los campos son obligatorio";
        mensaje.style.color = "red";
        return;


    }

    //Valido correo
    if (!correoValido(correo)) {
        mensaje.innerText = "Correo no válido";
        mensaje.style.color = "red";
        return;
    }
    //Exijo que tenga minimo 6 caracteres
    if (password.length < 6) {
        mensaje.innerText = "La contraseña debe tener 6 dígitos";
        mensaje.style.color = "red";
        return

    }

    //voy a exijir que sea mayor de edad
    if (isNaN(edad) && edad < 18) {
        mensaje.innerText = "Debe ser mayor de edad";
        mensaje.style.color = "red";
        document.getElementById("edad").focus();
        return;
    }



    mensaje.innerText = "Campos completos";
    mensaje.style.color = "green";

});
function correoValido(correo) {
    return correo.includes("@") && correo.includes(".");

}
//DOM 
//Document Object Model



const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    console.log("Boton presionado");

});




//Validaciones en tiempo real 
//Se ejecuta en cada pulsación de tecla
inputnombre.addEventListener("input", function () {

    console.log("Ingresa al evento input")

    const valor = inputnombre.value.trim();
    if (valor.length < 3) {
        mensaje.innerText = "El nombre debe tener al menos 3 caracteres";
        mensaje.style.color = "red";
        inputnombre.style.border="2px solid red";

    }
    else if(valor.length <= 4)
    {
        mensaje.innerText="Sigue escribiendo......";
        mensaje.style.color="orange";
        inputnombre.style.border="2px solid orange";
    }
    else
    {

        mensaje.innerText="Nombre válido";
        mensaje.style.color="green";
        inputnombre.style.border="2px solid green";
    }


});


//Se ejecuta cuando el usuario deja el input
inputnombre.addEventListener("change",function(){

console.log("Ingresa al evento change");

});


passswordInput.addEventListener("input",()=>{
const cantidad= passswordInput.value.length;
contadorPassword.innerText=`${cantidad} / ${maxPassword}`;
if(cantidad> maxPassword)
{
    contadorPassword.style.color="red";
}
else
{
    contadorPassword.style.color="green";
}




});





