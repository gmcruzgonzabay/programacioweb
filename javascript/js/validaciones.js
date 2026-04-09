//e.preventDefault 
console.log("Validaciones cargadas...");
const form= document.getElementById("formulario");
const nombre=document.getElementById("nombre");



form.addEventListener("submit",function(e){
    e.preventDefault()


    const nombre= document.getElementById("nombre").value;
    const correo=document.getElementById("correo").value;
    const password= document.getElementById("password").value;
    const edad=document.getElementById("edad").value;
    const mensaje=document.getElementById("mensaje");

    if(nombre=="" || correo=="" || password=="" || edad=="")
    {
        mensaje.innerText="Todos los campos son obligatorio";
        mensaje.style.color="red";
        return;


    }

    //Valido correo
if(!correoValido(correo)){
    mensaje.innerText="Correo no válido";
    mensaje.style.color="red";
    return;
}
//Exijo que tenga minimo 6 caracteres
if(password.length< 6)
{
    mensaje.innerText="La contraseña debe tener 6 dígitos";
    mensaje.style.color="red";
    return

}

//voy a exijir que sea mayor de edad
if(isNaN(edad) && edad<18)
{
    mensaje.innerText="Debe ser mayor de edad";
    mensaje.style.color="red";
    document.getElementById("edad").focus;
    return;
}



    mensaje.innerText="Campos completos";
    mensaje.style.color="green";

});
function correoValido(correo){
    return correo.includes("@") && correo.includes(".");

}
//DOM 
//Document Object Model



const btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
console.log("Boton presionado");

});

//Validaciones en tiempo real 
nombre.addEventListener("input",()=>{

if(nombre.value.length<3)
{

    nombre.style.border="2px solid red";
    
}
else{

    nombre.style.border="2px solid green";
}
});


nombre.addEventListener("change",()=>{
console.log("Se ejecutó  el evento change")
});




