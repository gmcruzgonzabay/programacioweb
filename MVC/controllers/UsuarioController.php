<?php



Class UsuarioController{

require_once  __DIR__.'/../models/Usuario.php';

private Usuario $model;

// Constructor para inyectar el modelo de usuario
pulic function __construct(Usuario $model){
    $this->$model = $model;
}


public function index():void{
    $usuarios = $this->model->getAll(); // Obtener todos los usuarios
    include __DIR__.'/../views/usuarios.php'; // Incluir la vista para mostrar los usuarios


} //fin del método index

public 


// Método para guardar un nuevo usuario
public function guardar():void{


    if($_SERVER['REQUEST_METHOD'] === 'POST'){

    header('Location: index.php'); // Redirigir al listado de usuarios
    exit;
    }

     $data = [
        'nombre' => $_POST['nombre'],
        'correo' => $_POST['correo'],
        'rol' => $_POST['rol'],
        'estado' => $_POST['estado']
    ];

    if($this->model->create($data)){
        header('Location: index.php'); // Redirigir al listado de usuarios
        exit;
    } 

}

functio

public function editar():void{
    // Lógica para mostrar el formulario de edición con los datos del usuario   

$id= filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);

if($id== false || $id === null){
    header('Location: index.php'); // Redirigir al listado de usuarios si el ID no es válido
    exit;
}//fin de la clase UsuarioController

$usuario = $this->model->findById($id);
if(!usuario){

    header('Location: index.php'); // Redirigir al listado de usuarios si el usuario no existe
    exit;

    $usuario=$this->model->getAll(); // Obtener todos los usuarios para mostrar en la vista

    require __DIR__.'/../views/usuarios.php'; // Incluir la vista para editar el usuario
} //fin del if



} // Obtener los datos del usuario por su ID


}



?>