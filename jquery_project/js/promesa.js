console.log("Archivo de promesa cargado correctamente....");






function ejemploPromesa(){

    return new Promise((resolve,reject)=>{

  setTimeout(()=>{

    let error=true;

    if(error){

        reject("proceso con error... intenta más tarde");
    }
    else
    {

        resolve("Proceso con éxito");
    }

        console.log("Esto se ejecuta después (Tarea asíncrona)");
        //resolve("Terminé la tarea...");

    },2000);
    });
  

 } ;


async function ejecutar(){
console.log("inicio del programa");

try{
    let respuest=await ejemploPromesa();


}
catch(error){
    console.error("ERROR",error);

}

// ejemploPromesa().then((respuesta)=>{
//     console.log(respuesta);
// });

console.log("Fin del programa");

}

ejecutar();






    
    


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




