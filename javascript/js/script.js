
let contador = 0;

function mostrarMensaje() {

    contador = contador + 1;

    const resultado = document.getElementById("resultado-js");
    const boton = document.getElementById("btn");


    //Desactivar el boton si dio 5 veces click
    if (contador == 5) 
    {
        boton.disabled = true;
        resultado = textContent = "Botón desactivado";

    }




    /*
        if (contador == 1) 
        {
            resultado.textContent = "Primer Click";
        }
        else {
            resultado.textContent = " Has hecho click " + contador + " veces";
        }
        resultado.style.color = "blue";
        //alert("Hola Desde JavaScript");
    
        */

}


function Mensaje2(){

alert("Presionaste el botón 2");

}

function cambiarColor(){
    const boton= document.getElementById("btnColor");
    boton.style.backgroundColor="blue";
    boton.style.color="white";

    setTimeout(function(){
boton.style.background="";
boton.style.color="";

    }, 5000);

}

//Restablecer el color original del botón

function colorOriginal(){
const boton =document.getElementById("btnColor");
boton.style.background="";
boton.style.color="";

}


function mouseOver(){
    const boton=document.getElementById("btnColor");
    boton.style.backgroundColor="orange";
}

function mouseOut(){
    const boton=document.getElementById("btnColor");
    boton.style.backgroundColor="";
}
