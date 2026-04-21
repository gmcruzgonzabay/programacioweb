
console.log("Archivo cargado correctamente");

$(function () {

    //Cambiar a registro
    $("#irRegistro").click(function () {

        console.log("Ir a ventana de registro");
        $("#loginBox").hide();
        $("#registroBox").show();


    });

    //Cambiar a Login

    $("#irLogin").click(function(){
         $("#registroBox").hide();
           $("#loginBox").show();
       

    });


    //registro del usuario
    $("#btnRegistro").click(function(){
        let nombre=$("#nombre").val();
        let correo=$("#correo").val();
        let password=$("#password").val();
        let confirmPassword=$("#confirmPassword").val();

        if(nombre=="" || correo=="" || password==""){
            mostrarMensaje("Completa todos los campos", "danger");
        }

        if(password != confirmPassword)
        {
            mostrarMensaje("La contraseña no coincide","warning");
            return;
        }


        //Registrar el usuario
        //LocalStorage: guarda de manera temporar variables o mapas

        let usuario={ nombre,correo,password};
        localStorage.setItem("usuario",JSON.stringify(usuario));

        mostrarMensaje("Registro exitoso","success");

        //Limpiar los inputs o campos
        $("#nombre,#correo, #password,#confirmPassword").val("");





    });


    // Login del usuario
    $("#btnLogin").click(function(){

        let correo= $("#loginCorreo").val();
        let password=$("#loginPassword").val();

        mostrarMensaje("Validando....","warning");

        //Acceder a localStorage

        let usuario=JSON.parse(localStorage.getItem("usuario"));

        if(!usuario){
            mostrarMensaje("Usuario no existe","danger");
            return;
        }
        if(correo === usuario.correo && password=== usuario.password)
        {
            window.location.href="../dashboard.html";

        }
        else
        {
            mostrarMensaje("Credenciales incorrectas","danger");
        }


    });


    //Mostrar mensaje
    function mostrarMensaje(texto, tipo)
    {
        $("#mensaje")
            .html(texto)
            .removeClass()
            .addClass("alert alert-" + tipo)
            .hide()
            .fadeIn();
    }



});







//Modificar elementos con JS
//document.getElementById("mensaje").innerText="Esta es una modificación desde JS...";

//Modificar elementos con Jquery
//$("#mensaje").text('Esto es modificado con Jquery');


//Utilizamos eventos con JS
// document.getElementById("btnLogin").addEventListener("click",function(){
// alert("Alerta con JS");

//     });

//Llamar un evento con Jquery

// $("#btnLogin").click(function(){

//     alert("Esto es una alerta con Jquery");
// });

//Ocultar una etiqueta con JS
//document.getElementById("mensaje").style.display="none";

//Ocultar etiqueta con Jquery
//$("#mensaje").hide();

//Mostrar elemento con JS
//document.getElementById("mensaje").style.display="block";

//Mostrar elemento con Jquery 
//$("#mensaje").show();

// $("#loginCorreo").keyup(function(){
//     let texto=$(this).val();
//     console.log("Escribiendo...",texto);
// });
// // ********Teclado**** 
//keyup cuando sueltas una tecla se activa o se ejecuta
//keydown cuando presionas la tecla
//keypress cuando mantiene presionada la tecla

// ****** Formulario ********
//.submit  cuando se envia el Formulario
// .change cuando se cambia de input
// .focus cuando entro al input
// .blur cuando deja del input


// **** DOM******
// $(document).ready() cuando la página cargado
// .load() cuando carga el contenido


// *** Interación visual


// .hover() pasa el mouse encima
// .toggle() mostrar/ ocultar