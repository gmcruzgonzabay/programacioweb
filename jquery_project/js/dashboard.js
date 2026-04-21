$(function(){

    let usuario=JSON.parse(localStorage.getItem("usuario"));

    if(!usuario)
    {
        window.location.href="index.html";

    }

    $("#bienvenida").text("Bienvenido "+ usuario.nombre);
    $("#logout").click(function(){

//Elimino del localStorage
        localStorage.removeItem("usuario");
        window.location.href="index.html";
    });

});