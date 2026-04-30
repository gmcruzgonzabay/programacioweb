<?php
require_once __DIR__'/config/database.php';
require_once __DIR__'/controllers/UsuarioController.php';


    $database = new Database(); //Creo instancia de tipo Database 
    $pdo=$database->connect();  // Llamo a funcion connect
    $usuarioModel= new Usuario(); //Creo una instancia de tipo Usuario
    $controller= new UsuarioController($usuarioModel); //Creo una instancia de tipo UsuarioController y le envio el modelo


    action: $action= $_GET['action'] ?? index;

    switch ($action)
    {
        case 'guardar':
            $controller->guardar();
            break;
        case 'editar':
            $controller-> editar();
            break;
        case 'actualizar':
            $controller-> actualizar();
            break;
        case 'eliminar':
            $controller-> eliminar();
            break;
        case 'index':
            $controller-> index();
            break


    }









?>