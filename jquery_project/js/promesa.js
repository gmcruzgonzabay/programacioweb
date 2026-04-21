console.log("Archivo de promesa cargado correctamente....");

function loginUsuarioPromesa(correo,password){

return new Promise((resolve,reject)=>{
setTimeout(()=>{
        let usuario=JSON.parse(localStorage.getItem("usuario"));

        if(!usuario){
            reject("Usuario no existe");
            return;
        }

        if(correo===usuario.correo && password=== usuario.password){
            resolve(usuario);
        }
        else
        {
            reject("Credenciales Incorrectas");
        }

},2000); //Simula el tiempo de consulta al servidor

});

} // Fin de loginUsuarioPromesa


$("#btnLoginPromesa").click(function(){

    let correo= $("#loginCorreo").val();
    let password=$("#loginPassword").val();
    $("#mensaje").text("Validando.....");

    loginUsuarioPromesa(correo,password).then(function(usuario){
        $("#mensaje").text("Login correcto....");
        console.log("Usuario:",usuario);

        setTimeout(()=>{
            window.location.href="../dashboard.html";
        },1000 );

    });

});







// function ejemploPromesa(){

//     return new Promise((resolve,reject)=>{

//   setTimeout(()=>{

//     let error=true;

//     if(error){

//         reject("proceso con error... intenta más tarde");
//     }
//     else
//     {

//         resolve("Proceso con éxito");
//     }

//         console.log("Esto se ejecuta después (Tarea asíncrona)");
//         //resolve("Terminé la tarea...");

//     },2000);
//     });
  

//  } ;


// async function ejecutar(){
// console.log("inicio del programa");

// try{
//     let respuest=await ejemploPromesa();


// }
// catch(error){
//     console.error("ERROR",error);

// }

// // ejemploPromesa().then((respuesta)=>{
// //     console.log(respuesta);
// // });

// console.log("Fin del programa");

// }

// ejecutar();






    
    


// setTimeout(()=>{
//     console.log("Esto se ejecuta despuès(Tarea asíncrona)");

// },2000); //Se ejecuta en el orden N3

// console.log("Esto se ejecuta primero(Tarea síncrona)"); //se ejecuta en el orden N2


//Estructura de una promesa

// new Promise((resolve,reject)=>{}));

//En una promesa existen 2 estados, exito o error 
//resolve es una función que indica que todo salió bien
//el reject indica que hubo un error








//}




